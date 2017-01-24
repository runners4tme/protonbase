var math = require("./math");


function affineCipher() {

  Symbols = "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

  myKey = 820;
  myMessage = "gK//J";
  myMode = "decrypt";

  if (myMode === "encrypt") {
    translated = encryptMessage(myKey, myMessage);
    }
  else if (myMode === "decrypt") {
    translated = decryptMessage(myKey, myMessage);
  }

  console.log("key: " + myKey);
  console.log(myMode + "ed text:");
  console.log(translated);

  function getKeyParts(key) {

    keyA = Math.floor(key/Symbols.length);
    keyB = key % Symbols.length;
    return keyA, keyB

}

function checkKeys(keyA, keyB, mode) {

  if(keyA === 1 && mode === "encrypt") {
    console.log('The affine cipher becomes incredibly weak when key A is set to 1. Choose a different key.');
  }

  if(keyB === 0 && mode === "encrypt" ) {
    console.log('The affine cipher becomes incredibly weak when key B is set to 0. Choose a different key.');
  }

  if(keyA < 0 || keyB > (Symbols.length - 1)) {
    console.log("Key A must be greater than 0 and Key B must be between 0 and" + (Symbols.length - 1) );
  }

  x = gcd(keyA, Symbols.length);

  if(x != 1) {
    console.log('Key A ' + keyA + " and the symbol set size " + Symbols.length + " are not relatively prime. Choose a different key.");
  }

}

function encryptMessage(key, message) {

  keyA = getKeyParts(key);
  keyB = getKeyParts(key);
  checkKeys(keyA, keyB, 'encrypt');
  ciphertext = "";

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

function decryptMessage(key, message) {

  keyA = getKeyParts(key);
  keyB = getKeyParts(key);
  modInverseKeyB = math.fmi(keyA, Symbols.length);
  checkKeys(keyA, keyB, 'decrypt');
  ciphertext = "";

  for(z = 0; z < message.length; z++) {
    sysIndex = Symbols.indexOf(message[z]);
    if (sysIndex === - 1 ) {
      ciphertext = ciphertext + message[z];
      }
    else {
      ciphertext = ciphertext + Symbols[(sysIndex - keyB) * modInverseKeyB % Symbols.length];
      }
   }

   return ciphertext

}

function getRandomKey() {

while(true) {

  keyA = Math.random(2, Symbols.length)
  keyB = Math.random(2, Symbols.length)
  y = gcd(keyA, Symbols.length);

  if(y === 1) {
    return keyA * Symbols.length + keyB
    }
  }
}

}

affineCipher();

module.exports = affineCipher
