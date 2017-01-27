function caeser(object){

/**Declare the variables**/
var plainMessage = object.msg;
var key = Number(object.key);
var mode = object.mode;
var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var cipherMessage = '';
var plainMessage = plainMessage.toUpperCase();

/*Loop through the message!*/
for (i = 0; i < plainMessage.length; i++) {

   /*Store the number of the message on the alphabet system range 0 - 25*/
   number = letters.indexOf(plainMessage[i])

   /*If part of the message is a white space or special character, process it in the current state*/
   if (number === -1 ) {
     cipherMessage = cipherMessage + plainMessage[i]
   }
  else {
     if (mode === 'encrypt') {
         number = number + key
        }
     else if (mode === 'decrypt') {
        number = number - key
        }
    if (number >= letters.length) {
        number = number - letters.length
       }
    else if (number < 0) {
        number = number + letters.length
      }
      cipherMessage = cipherMessage + letters[number]
    }
  }

  return { plainMessage: plainMessage, cipherMessage: cipherMessage }

}

function hackCaeser(msg){

var cipherMessage = msg;

var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for(i = 0; i < letters.length; i++) {

var plainMessage = '';

for( j = 0; j < cipherMessage.length; j++) {

   number = letters.indexOf(ciphertext[j]);

   if (number === -1 ) {
     plainMessage = plainMessage + cipherMessage[j]
   }
   else {
     number = number - i
     if (number < 0) {
       number = number + letters.length
     }
     plainMessage = plainMessage + letters[number]
   }
 }

}

}

module.exports = caeser;
