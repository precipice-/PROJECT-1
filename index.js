//index.js
//http://www.bogotobogo.com/MEAN-Stack/MEAN-Stack-MongoDB-ExpressJS-AngularJS-NodeJS-ToDoList-App.php
//https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular

    var express = require('express');
    var mongoose = require('mongoose');
    var bodyParser  = require("body-parser");
    var methodOverride = require("method-override");
    var app      = express();                        // create our app w/ express

    // configuration DB ===============================================================
    mongoose.connect('mongodb://admin:tenpro62@ds113841.mlab.com:13841/memo');﻿
    var db = mongoose.connection;
    db.once("open", function(){
     console.log("DB connected");
    });
    db.on("error", function(err){
     console.log("DB ERROR : ", err);
    });

    // Other settings
    app.set("view engine", "ejs");
    app.use(express.static(__dirname+"/public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(methodOverride("_method"));

    // Routes
    app.use("/", require("./routes/home"));
    app.use("/posts", require("./routes/posts"));
    app.use("/users", require("./routes/users"));  // 1

    // listen (start app with node server.js) ======================================
    app.listen(3000,function(){
    console.log("App listening on port : 3000");
  });
