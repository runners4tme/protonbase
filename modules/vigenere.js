function vigenereCipher(object) {

  var key = "FRUITS";
  var mode = object.mode;
  var message = object.msg;

function processMessage(key, message, mode) {

  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var text = [];
  var ciphertext = "";
  var plaintext = "";
  var keyIndex = 0;
  var key = key.toUpperCase();

  for (a = 0; a < message.length; a++) {

    number = letters.indexOf(message[a].toUpperCase());

    if(number !== -1){
      if(mode === 'encrypt'){
        number += letters.indexOf(key[keyIndex])
      } else if(mode === 'decrypt'){
        number -= letters.indexOf(key[keyIndex])
      }

      if (number >= letters.length) {
          number = number - letters.length
         }
      else if (number < 0) {
          number = number + letters.length
        }

      if (/[A-Z]/.test(message[a])){
        text.push(letters[number])
      } else if(/[a-z]/.test(message[a])){
        text.push(letters[number].toLowerCase())
      }

      keyIndex += 1

      if (keyIndex === key.length) {
        keyIndex = 0
      }

    }
   else {
      text.push(message[a])
    }
  }

  text = text.join('');

  if(mode === 'encrypt'){
    plaintext = message;
    ciphertext = text;
  } else if(mode === 'decrypt'){
    plaintext = text;
    ciphertext = message;
  }

  return { ciphertext: ciphertext, plaintext: plaintext };

  }

  function encrypt(myKey, myMessage, myMode) {
    return processMessage(myKey, myMessage, myMode)
  }
  function decrypt(myKey, myMessage, myMode) {
    return processMessage(myKey, myMessage, myMode)
  }

  if (mode === 'encrypt') {
    return encrypt(key, message, mode)
  } else if(mode === 'decrypt') {
    return decrypt(key, message, mode)
  }

}

module.exports = vigenereCipher;
