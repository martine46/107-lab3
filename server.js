var http=require("http");
var express=require("express");

var app=express();
app.get("/",function(req,res){
    res.send("<h1 style='color:darkblue;'>Hello from my server</h1>");
});

/* CONFIGURATION*/

 app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var bodyParser=require("body-parser");
app.use(bodyParser.json());

/* WEB SERVER*/

app.get("/contact",function(req,res){
    res.send("My contact info is: 9513248675, martin.e46bmw");
});

app.get("/about",function(req,res){
    res.send("My Name is Martin");
});

app.listen(8080, function(){
    console.log("Server running at http://localhost:8080");

});

/* API */

 var items=[];
 var count=0;

 app.get('/api/products',function(req,res){
     console.log("User wants the catalog");
     res.json(items);
 });

 app.post('/api/products',function(req,res){
    console.log("User wants to save item");

    var item=req.body;
    console.log(item);

    item.id=count;
    count++;

    items.push(item);
    res.send(item);
});