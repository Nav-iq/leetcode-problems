function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // Initialize pointers for nums1, nums2, and the end of the merged array
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    // Merge in reverse order
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);  // Output: [1, 2, 2, 3, 5, 6]
