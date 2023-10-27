const express= require('express');
const { default: mongoose } = require('mongoose');

const authRouter=require('./routes/auth');

const PORT= 3000;
const DB="mongodb+srv://nikhil:nik123@cluster0.jxh0rha.mongodb.net/?retryWrites=true&w=majority";
const app=express();
app.use(express.json());
app.use(authRouter);

mongoose.connect(DB).then(()=>{
    console.log("Connection Successful")
}).catch((e) =>{
    console.log(e);
})

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`connected at port ${PORT} `);
});