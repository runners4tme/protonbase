function main(key, message,mode){

  key = key;
  mode = mode;
  message = message;
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (mode === 'encrypt'){
    translated = encryptMessage(key, message)
  } else if(mode === 'decrypt') {
    translated = decryptMessage(key, message)
  }

  console.log(translated)

  function encryptMessage(key, message){
    return translateMessage(key, message, 'encrypt')
  }


  function decryptMessage(key, message){
  return translateMessage(key, message, 'decrypt')
}


function translateMessage(key, message, mode){

  translated = [];
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

     //fix the case!
      if (!message[a].toUpperCase()){
        translated.push(letters[number])
      } else if(!message[a].toLowerCase()){
        translated.push(letters[number].toLowerCase())
      }

      keyIndex += 1

      if (keyIndex === key.length){
        keyIndex = 0
      }

    }
   else {
      translated.push(message[a])
    }
  }

   return translated.join('');

}

}

main("hellow","happy","encrypt")
