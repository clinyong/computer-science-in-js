/**
 * 计算斐波那契数列 https://www.wikiwand.com/en/Fibonacci_number
 *
 * f(n) =  0 (n = 0)
 *         1 (n = 1)
 *         f(n-1)+f(n-2) (n = 1)
 *
 * @param {number} n
 */
module.exports = function fibonacci(n) {
    const init = [0, 1];
    if (n < 2) {
        return init[n];
    }

    let fibMinusOne = init[0];
    let fibMinusTwo = init[1];
    let sum = 0;

    for (let i = 2; i <= n; i++) {
        sum = fibMinusOne + fibMinusTwo;
        fibMinusOne = fibMinusTwo;
        fibMinusTwo = sum;
    }

    return sum;
};

// 这种递归的写法，性能极差。比如当 n = 100 时，运算超级慢。
function fibonacciRecursive(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
