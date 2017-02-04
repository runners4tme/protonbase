var math = require("./math");


function affineCipher(object) {

  Symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  key = getRandomKey();
  message = object.msg;
  mode = object.mode;

  function getRandomKey() {

  while(true) {

    keyA = Math.floor(Symbols.length * Math.random());
    keyB = Math.floor(Symbols.length * Math.random());
    y = math.gcd(keyA, Symbols.length);

    if(y === 1) {
      return keyA * Symbols.length + keyB;
      }
    }

  }

  function getKeys(key) {

    keyA = Math.floor(key/Symbols.length);
    keyB = key % Symbols.length;
    return [keyA, keyB];

}

function checkKeys(keyA, keyB, mode) {

  warning = "";

  if(keyA === 1 && mode === "encrypt") {
    warning = 'Cipher too weak. Choose a different key.';
  }

  if(keyB === 0 && mode === "encrypt" ) {
    warning = 'Cipher too weak. Choose a different key.';
  }

  if(keyA < 0 || keyB > (Symbols.length - 1)) {
    warning = "Key A must be greater than 0 and Key B must be between 0 and" + (Symbols.length - 1);
  }

  x = math.gcd(keyA, Symbols.length);

  if(x != 1) {
    warning = 'Key A ' + keyA + " and the symbol set size " + Symbols.length + " are not relatively prime. Choose a different key.";
  }

  return warning;

}

function encrypt(myKey, myMessage, myMode) {

  ciphertext = "";
  keys = getKeys(key);
  keyA = keys[0];
  keyB = keys[1];
  checkKeys(keyA, keyB, myMode);

  for(i = 0; i < message.length; i++) {
    sysIndex = Symbols.indexOf(message[i]);
    if(sysIndex === - 1 ) {
      ciphertext = ciphertext + message[i];
      }
    else {
     ciphertext = ciphertext + Symbols[(sysIndex * keyA + keyB) % Symbols.length];
      }
   }

   return ciphertext
   
}

function decrypt(myKey, myMessage, myMode) {

  plaintext = "";
  keys = getKeys(key);
  keyA = keys[0];
  keyB = keys[1];
  modInverseKeyB = math.fmi(keyA, Symbols.length);
  checkKeys(keyA, keyB, myMode);

  for(z = 0; z < message.length; z++) {
    sysIndex = Symbols.indexOf(message[z]);
    if (sysIndex === - 1 ) {
      plaintext = plaintext + message[z];
      }
    else {
      plaintext = plaintext + Symbols[(sysIndex - keyB) * modInverseKeyB % Symbols.length];
      }
   }

   return plaintext

}

if (mode === "encrypt") {
  return encrypt(key, message, mode);
  }
else if (mode === "decrypt") {
  return decrypt(key, message, mode);
}

}

console.log(affineCipher({msg:"hello", mode:"decrypt"}))

module.exports = affineCipher;
