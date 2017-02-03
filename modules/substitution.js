function substitutionCipher(payload) {

Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

message = payload.msg
mode = payload.mode;
key = "WERTYUIOPASDFGHJKLZXCVBNM";

function validateKey(key) {

keyList = key.split('');
LettersList = Letters.split('');
keyList.sort();
LettersList.sort();

}

validateKey(key);

function processMessage(key, message, mode) {

  ciphertext = '';

  if(mode === "encrypt"){
    characterA = Letters;
    characterB = key;
  } else if (mode === "decrypt") {
    characterA = key;
    characterB = Letters;
  }

  for(i = 0; i < message.length; i++) {
    x = message[i].toUpperCase();
    symIndex = characterA.indexOf(x);
    if(symIndex != -1) {
    if(x) {
      ciphertext += characterB[symIndex].toUpperCase();
    } else {
      ciphertext += characterB[symIndex].toLowerCase();
    }
  }
  else {
    ciphertext += message[i];
  }
}

return ciphertext

}

function encrypt(key, message) {
  return processMessage(key, message, "encrypt");
}

function decrypt(key, message) {
  return processMessage(key, message, "decrypt");
}

if (myMode === "encrypt") {
  ciphertext = encrypt(myKey,myMessage);
}
else if (myMode === "decrypt") {
  ciphertext = decrypt(myKey, myMessage);
}

return { plaintext: message, ciphertext: ciphertext }

}

module.exports = substitutionCipher
