/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the current area
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = width * currentHeight;

        // Update the maximum area
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer that points to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}