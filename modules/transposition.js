function transposition(object){

  var plainText = object.msg ;
  var key = object.key;
  var ciphertext = new Array(key);

  for (j = 0; j < key; j++) {
    if (ciphertext[j] === undefined) {
      ciphertext[j] = "";
    }
  }

  for (i = 0; i < key; i++) {
    var pointer = i;
    while (pointer < plainText.length) {
       ciphertext[i] = ciphertext[i] + plainText[pointer]
       pointer = pointer + key
    }
  }

  var cipherMessage = "";

  ciphertext.map(function(text) {
    cipherMessage = cipherMessage + text;
  })

  return { plainMessage:plainText, cipherMessage:cipherMessage }

}

exports.transposition = transposition;

function transpositionDecrypt(object) {

  message = object.msg;
  key = object.key;
  numOfColumns = Math.ceil(message.length/key);
  numOfRows = key
  numOfShadedBoxes = (numOfColumns * numOfRows) - message.length
  plainText = new Array(numOfColumns)

  for (j = 0; j < numOfColumns ; j++) {
    if (plainText[j] === undefined) {
      plainText[j] = "";
    }
  }

  col = 0
  row = 0

  for(i = 0; i < message.length; i++) {
    plainText[col] = plainText[col] + message[i]
    col = col + 1
    if (col === numOfColumns || col === (numOfColumns - 1) && row >= (numOfRows - numOfShadedBoxes)) {
      col = 0
      row = row + 1
    }
  }

  plainMessage = "";

  plainText.map(function(text) {
    plainMessage = plainMessage + text;
  })

  return { plainMessage:plainMessage, cipherMessage:message } 

}

exports.transpositionDecrypt = transpositionDecrypt
