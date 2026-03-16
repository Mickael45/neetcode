#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

const CATEGORIES = {
  "Core Skills": { easy: 41, medium: 35, hard: 7, total: 83 },
  "NeetCode All": { easy: 221, medium: 586, hard: 147, total: 954 },
};

const COLORS = {
  easy: "#00b8a3",
  medium: "#ffc01e",
  hard: "#ef4743",
  bg: "#0d1117",
  border: "#30363d",
  ring: "#21262d",
  text: "#e6edf3",
  dim: "#8b949e",
};

// ---------------------------------------------------------------------------
// Counting
// ---------------------------------------------------------------------------

function countSolutions(dir) {
  const counts = { easy: 0, medium: 0, hard: 0 };
  if (!fs.existsSync(dir)) return counts;

  (function walk(d, difficulty) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) {
        const key = entry.name.toLowerCase().trim();
        walk(full, ["easy", "medium", "hard"].includes(key) ? key : difficulty);
      } else if (difficulty && entry.name.endsWith(".js")) {
        counts[difficulty]++;
      }
    }
  })(dir, null);

  return counts;
}

function countByTopic(dir) {
  const topics = {};
  if (!fs.existsSync(dir)) return topics;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const key = entry.name.toLowerCase().trim();
    if (["easy", "medium", "hard"].includes(key)) continue;

    const counts = countSolutions(path.join(dir, entry.name));
    const total = counts.easy + counts.medium + counts.hard;
    if (total > 0) topics[entry.name.trim()] = { ...counts, total };
  }
  return topics;
}

// ---------------------------------------------------------------------------
// SVG generation
// ---------------------------------------------------------------------------

function buildSVG(name, solved, totals) {
  const total = totals.total;
  const done = solved.easy + solved.medium + solved.hard;
  const pct = ((done / total) * 100).toFixed(1);

  const cx = 370,
    cy = 95,
    r = 58,
    sw = 11;
  const C = 2 * Math.PI * r;
  const gap = 2;

  const segments = [
    { count: solved.easy, color: COLORS.easy },
    { count: solved.medium, color: COLORS.medium },
    { count: solved.hard, color: COLORS.hard },
  ];

  let offset = 0;
  const arcs = [];
  for (const seg of segments) {
    if (seg.count === 0) continue;
    const len = (seg.count / total) * C;
    arcs.push({
      color: seg.color,
      len: Math.max(len - gap, 1),
      offset: -offset,
    });
    offset += len;
  }

  const arcsSVG = arcs
    .map(
      (a) =>
        `  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" ` +
        `stroke="${a.color}" stroke-width="${sw}" ` +
        `stroke-dasharray="${a.len.toFixed(2)} ${C.toFixed(2)}" ` +
        `stroke-dashoffset="${a.offset.toFixed(2)}" ` +
        `stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"/>`
    )
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="190" viewBox="0 0 480 190">
  <rect width="480" height="190" rx="14" fill="${COLORS.bg}" stroke="${COLORS.border}" stroke-width="1"/>

  <text x="32" y="36" font-family="Segoe UI,Ubuntu,Helvetica Neue,Arial,sans-serif" font-size="17" font-weight="700" fill="${COLORS.text}">${name}</text>
  <text x="32" y="55" font-family="Segoe UI,Ubuntu,Helvetica Neue,Arial,sans-serif" font-size="12" fill="${COLORS.dim}">${total} problems · ${pct}% done</text>

  <circle cx="42" cy="88" r="5" fill="${COLORS.easy}"/>
  <text x="56" y="93" font-family="Segoe UI,Ubuntu,Helvetica Neue,Arial,sans-serif" font-size="15" font-weight="600" fill="${COLORS.easy}">Easy</text>
  <text x="130" y="93" font-family="Segoe UI,Ubuntu,Helvetica Neue,Arial,sans-serif" font-size="15" fill="${COLORS.text}">${solved.easy}<tspan fill="${COLORS.dim}">/${totals.easy}</tspan></text>

  <circle cx="42" cy="118" r="5" fill="${COLORS.medium}"/>
  <text x="56" y="123" font-family="Segoe UI,Ubuntu,Helvetica Neue,Arial,sans-serif" font-size="15" font-weight="600" fill="${COLORS.medium}">Med</text>
  <text x="130" y="123" font-family="Segoe UI,Ubuntu,Helvetica Neue,Arial,sans-serif" font-size="15" fill="${COLORS.text}">${solved.medium}<tspan fill="${COLORS.dim}">/${totals.medium}</tspan></text>

  <circle cx="42" cy="148" r="5" fill="${COLORS.hard}"/>
  <text x="56" y="153" font-family="Segoe UI,Ubuntu,Helvetica Neue,Arial,sans-serif" font-size="15" font-weight="600" fill="${COLORS.hard}">Hard</text>
  <text x="130" y="153" font-family="Segoe UI,Ubuntu,Helvetica Neue,Arial,sans-serif" font-size="15" fill="${COLORS.text}">${solved.hard}<tspan fill="${COLORS.dim}">/${totals.hard}</tspan></text>

  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${COLORS.ring}" stroke-width="${sw}"/>
${arcsSVG}
  <text x="${cx}" y="${cy - 2}" text-anchor="middle" font-family="Segoe UI,Ubuntu,Helvetica Neue,Arial,sans-serif" font-size="30" font-weight="700" fill="${COLORS.text}">${done}<tspan font-size="15" font-weight="400" fill="${COLORS.dim}">/${total}</tspan></text>
  <text x="${cx}" y="${cy + 20}" text-anchor="middle" font-family="Segoe UI,Ubuntu,Helvetica Neue,Arial,sans-serif" font-size="13" fill="${COLORS.dim}">Solved</text>
</svg>`;
}

// ---------------------------------------------------------------------------
// Dynamic quip (because data without sass is just a spreadsheet)
// ---------------------------------------------------------------------------

function getQuip(pct) {
  if (pct === 0)
    return "The journey of a thousand problems begins with opening the IDE. Maybe tomorrow.";
  if (pct < 2)
    return "We're basically rounding errors at this point. But hey — we exist on the chart!";
  if (pct < 5)
    return "If this was a marathon, we'd still be stretching in the parking lot.";
  if (pct < 10)
    return "Single digits. My portfolio has better numbers. Actually, no it doesn't.";
  if (pct < 25)
    return "Getting somewhere. Very slowly. Like a linked list traversal with extra steps.";
  if (pct < 50)
    return "Almost halfway! Well, not *almost*, but the spirit is willing even if Big-O is weak.";
  if (pct < 75)
    return "Past the halfway mark. The hard problems are starting to hit different.";
  if (pct < 100)
    return "The end is near. So is burnout. Racing to see which comes first.";
  return "DONE. I am become LeetCode, destroyer of free time.";
}

// ---------------------------------------------------------------------------
// README generation
// ---------------------------------------------------------------------------

function buildProgressSection(stats, topics) {
  const allDone =
    stats["NeetCode All"].counts.easy +
    stats["NeetCode All"].counts.medium +
    stats["NeetCode All"].counts.hard;
  const pct = (allDone / 954) * 100;
  const quip = getQuip(pct);

  const sortedTopics = Object.entries(topics).sort(
    ([, a], [, b]) => b.total - a.total
  );

  let topicTable = "";
  if (sortedTopics.length > 0) {
    topicTable =
      `\n### 🗺️ Territory Explored\n\n` +
      `| Topic | Easy | Med | Hard | Total |\n` +
      `|:------|:----:|:---:|:----:|:-----:|\n`;
    for (const [name, c] of sortedTopics) {
      topicTable += `| ${name} | ${c.easy || "—"} | ${c.medium || "—"} | ${c.hard || "—"} | **${c.total}** |\n`;
    }
  }

  return (
    `<div align="center">\n<br>\n\n` +
    `<img src=".github/assets/core-skills-progress.svg" alt="Core Skills Progress" />\n` +
    `&nbsp;&nbsp;&nbsp;&nbsp;\n` +
    `<img src=".github/assets/neetcode-all-progress.svg" alt="NeetCode All Progress" />\n\n` +
    `<br>\n\n` +
    `*${quip}*\n\n` +
    `</div>\n` +
    topicTable
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const assetsDir = path.join(ROOT, ".github", "assets");
  fs.mkdirSync(assetsDir, { recursive: true });

  const stats = {};

  for (const [name, totals] of Object.entries(CATEGORIES)) {
    const counts = countSolutions(path.join(ROOT, name));
    stats[name] = { counts, totals };

    const filename = name.toLowerCase().replace(/\s+/g, "-") + "-progress.svg";
    fs.writeFileSync(path.join(assetsDir, filename), buildSVG(name, counts, totals));
    console.log(`  ✓ ${filename}`);
  }

  const topics = countByTopic(path.join(ROOT, "NeetCode All"));
  const progressSection = buildProgressSection(stats, topics);

  const readmePath = path.join(ROOT, "README.md");
  let readme = fs.readFileSync(readmePath, "utf-8");

  const startTag = "<!-- PROGRESS:START -->";
  const endTag = "<!-- PROGRESS:END -->";
  const si = readme.indexOf(startTag);
  const ei = readme.indexOf(endTag);

  if (si === -1 || ei === -1) {
    console.error("❌ Missing PROGRESS markers in README.md");
    process.exit(1);
  }

  readme =
    readme.slice(0, si + startTag.length) +
    "\n" +
    progressSection +
    "\n" +
    readme.slice(ei);

  fs.writeFileSync(readmePath, readme);

  const coreDone =
    stats["Core Skills"].counts.easy +
    stats["Core Skills"].counts.medium +
    stats["Core Skills"].counts.hard;
  const allDone =
    stats["NeetCode All"].counts.easy +
    stats["NeetCode All"].counts.medium +
    stats["NeetCode All"].counts.hard;

  console.log(`\n  Core Skills : ${coreDone}/83`);
  console.log(`  NeetCode All: ${allDone}/954\n`);
}

main();
