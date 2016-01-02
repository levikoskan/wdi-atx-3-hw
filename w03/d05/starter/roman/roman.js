function romanize(num) {
  var romanLetters = {
    CM:1000,
    M:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  };
  var roman = '';
  var i;
  for ( i in romanLetters ) {
      console.log(i);
    while ( num >= romanLetters[i] ) {
        console.log(i);
      roman += i;
      num -= romanLetters[i];
    }
  }
  return roman;
}
