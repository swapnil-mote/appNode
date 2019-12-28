express = require("express");
bodyParser = require("body-parser");
fs = require("fs");

app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",function(res,resp){
    resp.send("<h1>Hello There, This is a node application running on VM Instance in AWS...</h1>");
    console.log("")
});

app.listen(3030,function(){
    console.log("Server running on 3030 port...");
});