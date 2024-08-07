class Solution:
    def reverse(self, x: int) -> int:
        # Define the limits for a 32-bit signed integer
        INT_MIN, INT_MAX = -2**31, 2**31 - 1

        # Record the sign and work with the absolute value of x
        sign = -1 if x < 0 else 1
        x = abs(x)

        # Reverse the digits of the absolute value
        reversed_x = 0
        while x != 0:
            pop = x % 10
            x //= 10
            # Check for overflow
            if (reversed_x > INT_MAX // 10) or (reversed_x == INT_MAX // 10 and pop > 7):
                return 0
            reversed_x = reversed_x * 10 + pop

        return sign * reversed_x

# Example usage:
solution = Solution()
