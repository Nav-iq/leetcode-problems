/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
    // Create a 2D array dp with size (s.length + 1) x (p.length + 1)
    const dp = Array.from({ length: s.length + 1 }, () => Array(p.length + 1).fill(false));
    
    // Base case: empty string and empty pattern match
    dp[0][0] = true;
    
    // Handle patterns like "a*", ".*", etc.
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    // Fill the dp table
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // '*' can mean zero of the preceding element
                dp[i][j] = dp[i][j - 2];
                // '*' can mean one or more of the preceding element
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    
    // The result is whether the entire string matches the entire pattern
    return dp[s.length][p.length];
}