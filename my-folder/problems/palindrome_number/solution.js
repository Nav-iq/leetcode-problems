/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    // Negative numbers cannot be palindromes
    if (x < 0) {
        return false;
    }

    // Convert the integer to a string
    const strX = x.toString();

    // Check if the string is the same when reversed
    const reversedStrX = strX.split('').reverse().join('');
    return strX === reversedStrX;
}