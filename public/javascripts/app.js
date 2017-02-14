$(document).ready(function(){

/**
var svg = d3.select(".home")
  .append("svg")
  .attr("width", 500)
  .attr("height", 250);

var t = textures.paths().d("nylon").lighter().thicker().shapeRendering("crispEdges");

svg.call(t);

svg.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", "100%")
  .attr("height", "100%")
  .style("fill", t.url());
  **/

  var socket = io();

  $(".button-collapse").sideNav();

  $('#textarea1').trigger('autoresize');

  $('.slider').slider();

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
     var textarea = "#textarea" + cipher
     var msg = $(textarea).val();
     var payload = { mode:mode , msg: msg, cipher: cipher }
     socket.emit("message", payload);
     $(textarea).val('');
     return false;
   });

   socket.on('introduction', function(message){
     para1 = createElement("p","para",message)
     $(".plain_container").append(para1)
   });

   socket.on('message', function(msg){
     para1 = createElement("p","para","Plain message:" + msg.plaintext)
     para2 = createElement("p","para","Cipher message:" + msg.ciphertext)
     $(".text_container").append(para1)
     $(".text_container").append(para2)
   });

})
