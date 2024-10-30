# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

Recall both versions,
# The Tail-Recursive Fibonacci
```js
function fib(n){
  function _fib(n2, acc, acc2){
    if (n2 <= 1) return acc2;
    return _fib(n2 - 1, acc + acc2, acc);
  } 
  return _fib(n, 1, 1);
}
```
# The Non-Tail-Recursive Fibonacci
```js
function fib(n) {
  if (n <= 2) return 1;
  else return fib(n-1) + fib(n-2);
}
```
The asymptotic complexity of the tail recursive version is linear $O(n)$ because it only uses one recursive call per step.

The asymptotic complexity of the non-tail-recursive version is exponential $O(2^n)$ because it uses two recursive calls per step.

Thus they are different.

I did this entirely indepdently except for looking at the slides and using the basic Fibonacci code from there. I also modified the testcode from the Fibonacci-Invariants assignment. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

