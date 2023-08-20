//main aim: users can access and use the features without creating an account or providing any personal information.
var express = require('express');
// import express from 'express';
var e = express();
const db=require('./database');
const port=7000;
// console.log(db);
db();

//database connection.
/* (async function dbConnection(){
    const csuccess=await db();
})(); */

/* testing
e.get('/api',(req,res)=>{
    res.send("hy from ");
}) */

/* e.get('/rishi',(req,res)=>{
    res.send("i am active and i am good");
})

e.get('/rishi/Ecommerece/addtocart',(req,res)=>{
    res.send("item added to cart");
})

e.post('/rishi/Ecommerece/remove',(req,res)=>{
    res.send("item  remove from cart");
}) */

e.use(express.json());

e.use('/myapp',require('./Routes/membershipRoute'));


e.listen(port,()=>{
    console.log("server is listening on http://127.0.0.1:7000");
});
