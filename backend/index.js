const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const cookieparser = require('cookie-parser')
const AuthRoutes = require('./routes/authRoutes')
const UserRoutes = require('./routes/userRoutes')
const {AuthUser} = require('./middlewares/usermiddleware')

app.use(cookieparser);
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/auth',AuthRoutes);      //FOR LOGIN SEND post request to the endpoint /api/auth/login
app.use('/api/user', AuthUser,UserRoutes);       
app.use('/api/admin', adminRouter);

app.listen(process.env.PORT, ()=>{
    connectToMongoDB();
    console.log("Server is running");
})