function affineCipher(obj) {

  var Symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var key = 213;
  var message = obj.msg;
  var mode = obj.mode;

  function computeKeys(myKey) {

    keyA = myKey;
    keyB = myKey % Symbols.length;
    return [keyA, keyB];

}

function encrypt(myKey, myMessage, myMode) {

  var ciphertext = new String();
  var plaintext = myMessage;
  var keys = computeKeys(myKey);
  var keyA = keys[0];
  var keyB = keys[1];

  for(i = 0; i < plaintext.length; i++) {
    sysIndex = Symbols.indexOf(plaintext[i]);
    if(sysIndex === - 1 ) {
      ciphertext = ciphertext + plaintext[i];
      }
    else {
     ciphertext = ciphertext + Symbols[(sysIndex * keyA + keyB) % Symbols.length];
      }
   }

   return { plaintext:plaintext, ciphertext:ciphertext }

}

function decrypt(myKey, myMessage, myMode) {

  var plaintext = new String();
  var ciphertext = myMessage;
  var keys = computeKeys(myKey);
  var keyA = keys[0];
  var keyB = keys[1];
  var modInverse = 21;

  for(z = 0; z < ciphertext.length; z++) {
    sysIndex = Symbols.indexOf(ciphertext[z]);
    if (sysIndex === - 1 ) {
      plaintext = plaintext + ciphertext[z];
      }
    else {
      plaintext = plaintext + Symbols[(sysIndex - keyB) * modInverse % Symbols.length];
    }
  }

  return { plaintext:plaintext, ciphertext:ciphertext }

}

if (mode === "encrypt") {
  return encrypt(key, message, mode);
  }
else if (mode === "decrypt") {
  return decrypt(key, message, mode);
}

}


module.exports = affineCipher;
