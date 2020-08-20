/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let memo = [0,1];
    let fibnacci = (n) => {
        if(memo[n] != null){
            return memo[n]
        }
        let fib1 = fibnacci(n-1,memo) % 1000000007;
        let fib2 = fibnacci(n-2,memo) % 1000000007;
        return memo[n] = fib1 + fib2
    }
    return fibnacci(n) % 1000000007;
  };