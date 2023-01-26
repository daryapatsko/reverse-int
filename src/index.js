module.exports = function reverse (n) {
  let num=Math.abs(n);
    revnum=0;
    while (num>0){
      revnum=revnum*10+ num%10;
      num=Math.floor(num/10)
    }
    return revnum;
}
