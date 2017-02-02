$(document).ready(function(){

  var socket = io();

  $(".button-collapse").sideNav();

  $('#textarea1').trigger('autoresize');

  function createElement(tag,className,text) {
    el = document.createElement(tag);
    el.setAttribute("class",className);
    el.textContent = text;
    return el;
  };

   $('.activate').click(function(){
     if(this.id === "encryptCaeser"){
       mode = "encrypt"
     } else if(this.id === "decryptCaeser"){
       mode = "decrypt"
     }
     //This is complete!
     //var msg = $("#textarea2").val();
     //var key = $("#key2").val();
     //var payload = { key: key, mode:mode , msg: msg }
     //socket.emit('caeser', payload);
     //$("#textarea2").val('');
     //$("#key2").val('');
     //return false;
   });

   $('.activate').click(function(){
     if(this.id === "encryptSub"){
       mode = "encrypt"
     } else if(this.id === "decryptSub"){
       mode = "decrypt"
     }
     //This is working
     //var msg = $("#textarea3").val();
     //var key = $("#key3").val();
     //var payload = { key: key, mode:mode , msg: msg }
     //socket.emit('sub', payload);
     //$("#textarea3").val('');
     //$("#key3").val('');
     //return false;
   });

   $('.activate').click(function(){
     if(this.id === "encryptTrans"){
       mode = "encrypt"
     } else if(this.id === "decryptTrans"){
       mode = "decrypt"
     }
     //This is working
     var msg = $("#textarea4").val();
     var key = $("#key4").val();
     var payload = { key: key, mode:mode , msg: msg }
     socket.emit('trans', payload);
     $("#textarea4").val('');
     $("#key4").val('');
     return false;
   });

   /**process the data from the server**/
   socket.on('caeser', function(msg){
     header1 = createElement("h3","title","Plain Message:")
     para1 = createElement("p","para",msg.plaintext)
     header2 = createElement("h3","title","Cipher Message:")
     para2 = createElement("p","para",msg.ciphertext)
     $(".plain_container").typed({
        strings: ["Plain Message:" + msg.plaintext],
        typeSpeed: 50
      });
      $(".cipher_container").typed({
         strings: ["Cipher Message:" + msg.ciphertext],
         typeSpeed: 150
       })
   });

   /**process the data from the server**/
   socket.on('sub', function(msg){
     header1 = createElement("h3","title","Plain Message:")
     para1 = createElement("p","para",msg.plaintext)
     header2 = createElement("h3","title","Cipher Message:")
     para2 = createElement("p","para",msg.ciphertext)
     $(".plain_container").typed({
        strings: ["Plain Message:" + msg.plaintext],
        typeSpeed: 50
      });
      $(".cipher_container").typed({
         strings: ["Cipher Message:" + msg.ciphertext],
         typeSpeed: 150
       })
   });

   /**process the data from the server**/
   socket.on('trans', function(msg){
     header1 = createElement("h3","title","Plain Message:")
     para1 = createElement("p","para",msg.plaintext)
     header2 = createElement("h3","title","Cipher Message:")
     para2 = createElement("p","para",msg.ciphertext)
     $(".plain_container").typed({
        strings: ["Plain Message:" + msg.plaintext],
        typeSpeed: 50
      });
      $(".cipher_container").typed({
         strings: ["Cipher Message:" + msg.ciphertext],
         typeSpeed: 150
       })
   });

})
