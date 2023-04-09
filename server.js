const express = require("express");
const bodyParser= require("body-parser");
const date = require(__dirname + "/date.js");

const items=["Cook","Eat","Code"];
const workItems=[];

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/" , function(req,res){
    const day = date.getDay();
    res.render("lists",{formTitle : day, listItems: items,pageTitle:"Primary List"});
});

app.post("/",function(req,res){
    if(req.body.list === "Work"){
        const item = req.body.task1;              // We can access the contents of body by using body-parser
        workItems.push(item);
        res.redirect("/work");
    }else{
        const item= req.body.task1;               // We can access the contents of body by using body-parser
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){    
    res.render("lists",{formTitle:"Work",listItems: workItems,formTitle:"Work List",pageTitle:"Saturday"});
});

app.get("/about",function(req,res){
    const day = date.getDay();
    res.render("about",{dateToday:date.getDay(),pageTitle: "Friday"});
});

app.listen(8080 , function(){
    console.log("Server started at port 8080");
});