function fib(n){
  function _fib(n, acc){
    if (n <= 2) return 0;
    return _fib(n - 1, acc + n);
  } 
  return _fib(n, 0);
}

