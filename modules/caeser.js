function caeser(obj){

var plaintext = obj.msg;
var key = 10;
var mode = obj.mode;
var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var ciphertext = '';
var plaintext = plaintext.toUpperCase();

for (i = 0; i < plaintext.length; i++) {

   number = letters.indexOf(plaintext[i])

   if (number === -1 ) {
     ciphertext = ciphertext + plaintext[i]
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
      ciphertext = ciphertext + letters[number]
    }
  }

  return { plaintext: plaintext, ciphertext: ciphertext }

}

module.exports = caeser;
