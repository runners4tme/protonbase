function substitutionCipher(obj) {

  var message = obj.msg;
  var mode = obj.mode;
  var key = "QWERTYUIOPASDFGHJKLZXCVBNM";

function processMessage(key, message, mode) {

  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var text = new String();
  var characterA = new String();
  var characterB = new String();

  if(mode === "encrypt") {
    characterA = letters;
    characterB = key;
  } else if (mode === "decrypt") {
    characterA = key;
    characterB = letters;
  }

  for(i = 0; i < message.length; i++) {
    x = message[i].toUpperCase();
    symIndex = characterA.indexOf(x);
    if(symIndex != -1) {
    if(x) {
      text += characterB[symIndex].toUpperCase();
    } else {
      text += characterB[symIndex].toLowerCase();
    }
  }
  else {
    text += message[i];
  }
}

if(mode === 'encrypt'){
  plaintext = message;
  ciphertext = text;
} else if(mode === 'decrypt'){
  plaintext = text;
  ciphertext = message;
}

return { plaintext: plaintext, ciphertext: ciphertext }

}

function encrypt(mykey, myMessage, myMode) {
  return processMessage(mykey, myMessage, myMode);
}

function decrypt(mykey, myMessage, myMode) {
  return processMessage(mykey, myMessage, myMode);
}

if (mode === "encrypt") {
  return encrypt(key, message, mode);
}
else if (mode === "decrypt") {
  return decrypt(key, message, mode);
}

}

module.exports = substitutionCipher
