function substitutionCipher() {

Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

myMessage = "If a man is offered a fact which goes against his instincts,he will scrutinize it closely";
myKey = "LFWOAYUISVKMNXPBDCRJTQEGHZ";
myMode = "encrypt";

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
  translated = '';
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
      translated += charsB[symIndex].toUpperCase();
    } else {
      translated += charsB[symIndex].toLowerCase();
    }
  }
  else {
    translated += message[i];
  }
}

return translated

}

function getRandomkey() {

  key = Letters.split('');

  function shuffle(array) {
    var i = 0
    var j = 0
    var temp = null
    for (i = array.length - 1; i > 0; i -= 1 ) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

shuffle(key).join("");
return key;
}

checkValidKey(myKey);

if (myMode === "encrypt") {
  translated = encryptMessage(myKey,myMessage);
}
else if (myMode === "decrypt") {
  translated = decryptMessage(myKey, myMessage);
}

console.log("Using key: " + myKey);
console.log("the " + myMode + "ed message is:");
console.log(translated);

}

substitutionCipher();

module.exports = substitutionCipher
