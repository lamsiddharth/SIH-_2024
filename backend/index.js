const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.send('/', (req,res)=>{
    return res.send("Hi");
})

app.listen(process.env.PORT, ()=>{
    console.log("Server is running");
})