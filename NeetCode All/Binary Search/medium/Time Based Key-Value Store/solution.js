class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */ 
    set(key, value, timestamp) {
        const item = this.keyStore.get(key)
        this.keyStore.set(key, { [timestamp]: value, ...item })
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const obj = this.keyStore.get(key)

        if (!obj) return ""

        const value = obj[timestamp] || ""

        if (value) return value

        const items = Object.entries(obj).sort((a, b) => a[0] - b[0])
        let nextItemIndex = items.findIndex(([k]) => k > timestamp)
        
        if (nextItemIndex === -1) nextItemIndex = items.length - 1
        else if (nextItemIndex > 0) nextItemIndex--

        const [k, val] = items[nextItemIndex]

        return +k <= timestamp ? val : ""
    }
}
