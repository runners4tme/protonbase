function transpositionCipher(obj) {

  var mode = obj.mode;

function encrypt(obj){

  var plaintext = obj.msg;
  var key = 5;
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

function decrypt(obj) {

  var ciphertext = obj.msg;
  var key = 5;
  var numOfColumns = Math.ceil(ciphertext.length/key);
  var numOfRows = key
  var numOfShadedBoxes = (numOfColumns * numOfRows) - ciphertext.length
  var text = new Array(numOfColumns)

  for (j = 0; j < numOfColumns ; j++) {
    if (text[j] === undefined) {
      text[j] = "";
    }
  }

  var col = 0
  var row = 0

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

if (mode === "encrypt") {
    return encrypt(obj);
  }
else if (mode === "decrypt") {
    return decrypt(obj);
  }
}

module.exports = transpositionCipher;
