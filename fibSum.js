/*

Write a function, fibsSum(n), that finds the sum of the first n fibonacci numbers recursively.
Assume n > 0. Note that for this problem, the fibonacci sequence starts with [1, 1].

1 1 2 3 5 8 13 21

3 -> 4
4 -> 7
5 -> 12

function (num)
    if num = 1 return 1
    if num = 2 return 1

    return recursiveCall(num - 2) + recursiveCall(num - 1)
*/


function fibSum(num) {
    if (num === 1) return 1;
    if (num === 2) return 2;
    return fibSum(num - 2) + fibSum(num - 1) + 1;
}


console.log(fibSum(3))
console.log(fibSum(4))
console.log(fibSum(5))
