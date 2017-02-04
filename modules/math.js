function gcd(a,b) {
  while(a !== b) {
    a = b % a
    b = a
  }
  return b
};

function fmi(a,m) {

//b is the remainder
b = gcd(a, m);

//check if b in inverse modular
if(b != 1){
    return "none";
  }

u1 = 1;
u2 = 0;
u3 = a;

v1 = 0;
v2 = 1;
v3 = m;

while (v3 !== 0) {

  q = Math.floor(u3 / v3);

  u1 = v1;
  u2 = v2;
  u3 = v3;

  v1 = (u1 - q * v1);
  v2 = (u2 - q * v2);
  v3 = (u3 - q * v3);

  }

return u1 % m;

}

//fix the highest common denominator
console.log(gcd(51, 52));
//fix the modular inverse
console.log(fmi(5, 26));

exports.gcd = gcd;
exports.fmi = fmi;
