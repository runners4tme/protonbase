function gcd(a,b) {
  while(a != b) {
    a = b % a
    b = a
    return b
  }
};

module.exports = gcd;
