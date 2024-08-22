const express = require('express');
const mongoose = require('mongoose');
const Items = require('./Models/Items_sch');
const itemRoute = require('./routes/item.route');
const userRoute = require('./routes/user.route');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/api/items",itemRoute);
app.use("/api/user",userRoute)


app.get('/',(req,res,next) => {
    res.send("The Port is working");
})

mongoose.connect("mongodb+srv://magulurimanikanta123:mi9ti1vQlHmJzzpo@cluster0.9i5xr.mongodb.net/CRUD-TEST?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    app.listen(3000,() => {
        console.log("Listening on port 3000");
    });
    console.log("The database is connected");
})
.catch((error)=>{
    console.log(error.message);
})