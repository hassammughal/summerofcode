var contents;
var DATA = [];
var fs = require("fs");

function getMsgs(req, res){
  contents =  fs.readFileSync("simple.txt", "utf8").toString().split('\n'); 
        DATA = contents;
        res.send(DATA);
   
}

function setMsgs(req,res){
   console.log(req.body);
   DATA = req.body;
}


module.exports = {"getMsgs":getMsgs,"setMsgs":setMsgs}