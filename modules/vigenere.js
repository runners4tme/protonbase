function vigenereCipher(object) {

  key = object.key;
  mode = object.mode;
  message = object.msg;
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (mode === 'encrypt') {
    return encryptMessage(key, message)
  } else if(mode === 'decrypt') {
    return decryptMessage(key, message)
  }

  function encryptMessage(key, message) {
    return processMessage(key, message, mode)
  }


  function decryptMessage(key, message) {
  return processMessage(key, message, mode)
}


function processMessage(key, message, mode) {

  text = [];
  ciphertext = "";
  plaintext = "";
  keyIndex = 0;
  key = key.toUpperCase();

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

}

module.exports = vigenereCipher;
