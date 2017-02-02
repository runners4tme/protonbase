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

checkValidKey(myKey);

if (myMode === "encrypt") {
  ciphertext = encryptMessage(myKey,myMessage);
}
else if (myMode === "decrypt") {
  ciphertext = decryptMessage(myKey, myMessage);
}

return { plaintext: myMessage, ciphertext: ciphertext }

}

module.exports = substitutionCipher
