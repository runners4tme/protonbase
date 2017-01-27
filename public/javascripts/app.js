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

   $('#encryptCaeser').click(function(){
     /**send data to the server**/
     value = $("#textarea1").val();
     socket.emit('caeser', value);
     $("#textarea2").val('');
     return false;
   });

   $('#decryptCaeser').click(function(){
     /**send data to the server**/
     value = $("#textarea1").val()
     socket.emit('caeser', value);
     $("#textarea2").val('');
     return false;
   });

   /**process the data from the server**/
   socket.on('caeser', function(msg){
     header1 = createElement("h3","title","Plain Message:")
     para1 = createElement("p","para",msg.plainMessage)
     header2 = createElement("h3","title","Cipher Message:")
     para2 = createElement("p","para",msg.cipherMessage)
     $(".cipher_container").typed({
        strings: ["Plain Message:" + msg.plainMessage + "Cipher Message:" + msg.cipherMessage],
        typeSpeed: 0
      });
   });
})
