/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

function twoSum(nums, target) {
  let sums = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (sums.hasOwnProperty(complement)) {
      return [i, sums[complement]];
    }
    sums[nums[i]] = i;
  }

  return [];
}

const example = [2, 7, 11, 15];
const target1 = 9;
const target2 = 13;
const target3 = 22;

let twoSum1 = twoSum(example, target1);
let twoSum2 = twoSum(example, target2);
let twoSum3 = twoSum(example, target3);

// [0,1]
console.log(`twoSum1: ${twoSum1}`);
// [0, 2]
console.log(`twoSum2: ${twoSum2}`);
// [1, 3]
console.log(`twoSum3: ${twoSum3}`);
