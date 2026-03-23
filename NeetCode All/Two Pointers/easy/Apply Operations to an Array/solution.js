/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length < 2 || nums.length > 2000)
    return [];

  const operationArray = new Array(nums.length).fill(0);
  let count = 0;

  for (let i = 0; i < operationArray.length; i++) {
    const currentNumber = nums[i];
    const nextNumber = nums[i + 1];
    const areEqual = currentNumber === nextNumber;

    if (currentNumber !== 0) {
      operationArray[count] = areEqual ? currentNumber * 2 : currentNumber;
      nums[i + 1] = areEqual ? 0 : nextNumber;
      count++;
    }
  }

  return operationArray;
};
