function transpositionCipher(object) {
  console.log(object)
  var mode = object.mode;
  if (mode === "encrypt") {
    return encryptMessage(object);
  }
  else if (mode === "decrypt") {
    return decryptMessage(object);
  }
}

function encryptMessage(object){

  var plaintext = object.msg;
  var key = Number(object.key);
  var text = new Array(key);

  for (j = 0; j < key; j++) {
    if (text[j] === undefined) {
      text[j] = "";
    }
  }

  for (i = 0; i < key; i++) {
    var pointer = i;
    while (pointer < plaintext.length) {
       text[i] = text[i] + plaintext[pointer]
       pointer = pointer + key
    }
  }

  var ciphertext = text.join("");

  return { plaintext:plaintext, ciphertext:ciphertext }

}

function decryptMessage(object) {

  ciphertext = object.msg;
  key = object.key;
  numOfColumns = Math.ceil(ciphertext.length/key);
  numOfRows = key
  numOfShadedBoxes = (numOfColumns * numOfRows) - ciphertext.length
  text = new Array(numOfColumns)

  for (j = 0; j < numOfColumns ; j++) {
    if (text[j] === undefined) {
      text[j] = "";
    }
  }

  col = 0
  row = 0

  for(i = 0; i < ciphertext.length; i++) {
    text[col] = text[col] + ciphertext[i]
    col = col + 1
    if (col === numOfColumns || col === (numOfColumns - 1) && row >= (numOfRows - numOfShadedBoxes)) {
      col = 0
      row = row + 1
    }
  }

  var plaintext = text.join("");

  return { plaintext:plaintext, ciphertext:ciphertext }

}

module.exports = transpositionCipher;
