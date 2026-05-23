/**
 * Find the kth largest element in an array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    // Sort array in descending order
    nums.sort((a, b) => b - a);

    // Return kth largest element
    return nums[k - 1];
}

// Example usage
const numbers = [3, 2, 1, 5, 6, 4];
const k = 2;

console.log(`The ${k}th largest element is: ${findKthLargest(numbers, k)}`);