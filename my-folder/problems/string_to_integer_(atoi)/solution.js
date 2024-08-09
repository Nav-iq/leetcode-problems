/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    const INT_MAX = 2147483647; // 2^31 - 1
    const INT_MIN = -2147483648; // -2^31

    // Step 1: Ignore leading whitespace
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // Step 2: Check for sign
    if (i < s.length && (s[i] === '-' || s[i] === '+')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }

    // Step 3: Convert digits to integer
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        // Check for overflow and underflow
        if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
}