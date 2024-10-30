
function fib(n){
  function _fib(n2, acc, acc2){
    if (n2 <= 1) return acc2;
    return _fib(n2 - 1, acc + acc2, acc);
  } 
  
  return _fib(n, 1, 1);
}
