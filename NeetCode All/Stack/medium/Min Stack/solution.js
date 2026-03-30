class MinStack {
  constructor() {
    this.elementCount = 0;
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack[this.elementCount++] = val;
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack[this.elementCount - 1] = null;
    this.elementCount--;
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.elementCount - 1];
  }
  /**
   * @return {number}
   */
  getMin() {
    let minValue = Infinity;

    for (let i = 0; i < this.elementCount; i++) {
      const value = this.stack[i];
      if (!isNaN(value)) minValue = Math.min(minValue, value);
    }
    return minValue;
  }
}
