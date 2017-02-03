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
     var buttonId = this.id;
     var mode = buttonId.slice(0,7);
     var cipher = buttonId.slice(7,buttonId.length);
     var msg = $("#textarea2").val();
     var payload = { mode:mode , msg: msg, cipher: cipher }
     console.log(payload)
     socket.emit("message", payload);
     $("#textarea2").val('');
     return false;
   });

   socket.on('introduction', function(message){
     para1 = createElement("p","para",message)
     $(".plain_container").append(para1)
   });

   /**process the data from the server**/
   socket.on('message', function(msg){
     para1 = createElement("p","para","Plain message:" + msg.plaintext)
     para2 = createElement("p","para","Cipher message:" + msg.ciphertext)
     $(".plain_container").append(para1)
     $(".plain_container").append(para2)
   });

})
