$(document).ready(function(){

  var socket = io();

  $(".button-collapse").sideNav();

  $('#textarea1').trigger('autoresize');

  $(".element").typed({
    strings: ["First sentence.", "Second sentence."],
    typeSpeed: 0
  });

  function createElement(tag,className,text) {
    el = document.createElement(tag);
    el.setAttribute("class",className);
    el.textContent = text;
    return el
  };

   $('#encryptCeaser').click(function(){
     /**send data to the server**/
     value = $("#textarea1").val()
     socket.emit('reverse', value);
     $("#textarea1").val('');
     return false;
   });

   $('#decryptCeaser').click(function(){
     /**send data to the server**/
     value = $("#textarea1").val()
     socket.emit('reverse', value);
     $("#textarea1").val('');
     return false;
   });

   /**process the data from the server**/
   socket.on('ceaser', function(msg){
     div1 = createElement("div","text_container")
     row = createElement("div","row textBox")
     div2 = createElement("div","col s6 plainBox")
     div3 = createElement("div","col s6 cipherBox")
     h1 = createElement("h5","plainTitle","Plain Message")
     h2 = createElement("h5","cipherTitle","Cipher Message")
     para1 = createElement("p","para",msg.plainMessage)
     para2 = createElement("p","para",msg.cipherMessage)
     $(".text_holder").append(div1)
     $(".text_container").last().append(row)
     $(".textBox").last().append(div2)
     $(".textBox").last().append(div3)
     $(".plainBox").last().append(h1)
     $(".cipherBox").last().append(h2)
     $(".plainBox").last().append(para1)
     $(".cipherBox").last().append(para2)
   });

})
