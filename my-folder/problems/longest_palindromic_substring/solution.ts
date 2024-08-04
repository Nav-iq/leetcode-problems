function longestPalindrome(s: string): string {
    if (s.length < 2) return s;
    
    let start = 0, maxLen = 1;

    const expandAroundCenter = (left: number, right: number): void => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        const len = right - left - 1;
        if (len > maxLen) {
            start = left + 1;
            maxLen = len;
        }
    };

    for (let i = 0; i < s.length - 1; i++) {
        expandAroundCenter(i, i);      // Odd length palindrome
        expandAroundCenter(i, i + 1);  // Even length palindrome
    }

    return s.substring(start, start + maxLen);
}