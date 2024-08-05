/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
    const n = nums.length;
    
    // Place each number in its correct position
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] with nums[nums[i] - 1]
            let correctIndex = nums[i] - 1;
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
    }
    
    // Find the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    
    // If all positions are correct, the missing number is n + 1
    return n + 1;
}