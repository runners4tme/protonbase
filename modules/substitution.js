function substitutionCipher(payload) {

Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

myMessage = payload.msg
myMode = payload.mode;
myKey = payload.key;

function checkValidKey(key) {

keyList = myKey.split('');
LettersList = Letters.split('');
keyList.sort();
LettersList.sort();

if (keyList.length != LettersList.length) {
  console.log("there is an error in the key or symbol set");
  }
}

function encryptMessage(key, message) {
  return translateMessage(key, message, "encrypt");
}

function decryptMessage(key, message) {
  return translateMessage(key, message, "decrypt");
}

function translateMessage(key, message, mode) {
  ciphertext = '';
  charsA = Letters;
  charsB = key

  if (mode === "decrypt") {
    charsA = charsB;
    charsB = charsA;
  }

  for(i = 0; i < message.length; i++) {
    x = message[i].toUpperCase();
    symIndex = charsA.indexOf(x);
    if(symIndex != -1) {
    if(x) {
      ciphertext += charsB[symIndex].toUpperCase();
    } else {
      ciphertext += charsB[symIndex].toLowerCase();
    }
  }
  else {
    ciphertext += message[i];
  }
}

return ciphertext

}

checkValidKey(myKey);

if (myMode === "encrypt") {
  ciphertext = encryptMessage(myKey,myMessage);
}
else if (myMode === "decrypt") {
  ciphertext = decryptMessage(myKey, myMessage);
}

return { plaintext: myMessage, ciphertext: ciphertext }

console.log("Using key: " + myKey);
console.log("the " + myMode + "ed message is:");
console.log(ciphertext);

}

module.exports = substitutionCipher
