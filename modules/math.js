function gcd(a,b) {
  while(a != b) {
    a = b % a
    b = a
    return b
  }
};

//divide the two numbers and get the remainder

function fmi(a, m) {

  function gcd(a,b) {
    while(a != b) {
      a = b % a
      b = a
      return b
    }
  };

//b is the remainder
b = gcd(a, m);

//check if b in inverse modular
if(b != 1){
    return "none"
  }
//that is check if b is equal to 1 otherwise the key won't work

u1 = 1;
u2 = 0;
u3 = a;

v1 = 0;
v2 = 1;
v3 = m;

while (v3 != 0) {

  q = Math.floor(u3 / v3);

  u1 = v1;
  u2 = v2;
  u3 = v3;

  v1 = (u1 - q * v1);
  v2 = (u2 - q * v2);
  v3 = (u3 - q * v3);

}
return u1 % m
}

exports.gcd = gcd;
exports.fmi = fmi;
