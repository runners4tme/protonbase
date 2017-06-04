var express = require("express");
var router = express.Router();

router.get("/affine",function(req, res, next){
  res.render("ciphers/affine");
})

router.get("/caeser",function(req, res, next){
  res.render("ciphers/caeser");
})

router.get("/substitution",function(req, res, next){
  res.render("ciphers/substitution");
})

router.get("/transposition",function(req, res, next){
  res.render("ciphers/transposition");
})

router.get("/vigenere",function(req, res, next){
  res.render("ciphers/vigenere");
})

module.exports = router;
