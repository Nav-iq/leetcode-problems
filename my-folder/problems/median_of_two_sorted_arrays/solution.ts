function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m, half_len = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = half_len - i;

        if (i < m && nums1[i] < nums2[j - 1]) {
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1;
        } else {
            let max_of_left: number;
            if (i === 0) { 
                max_of_left = nums2[j - 1]; 
            } else if (j === 0) { 
                max_of_left = nums1[i - 1]; 
            } else { 
                max_of_left = Math.max(nums1[i - 1], nums2[j - 1]); 
            }
            if ((m + n) % 2 === 1) {
                return max_of_left;
            }

            let min_of_right: number;
            if (i === m) { 
                min_of_right = nums2[j]; 
            } else if (j === n) { 
                min_of_right = nums1[i]; 
            } else { 
                min_of_right = Math.min(nums1[i], nums2[j]); 
            }

            return (max_of_left + min_of_right) / 2.0;
        }
    }

    throw new Error("Input arrays are not sorted or have invalid length.");
}