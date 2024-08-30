const express = require('express');
import authRoutes from ''

const app = express();
const cors = require('cors')
require('dotenv').config();
const router = express.Router();
app.use(cookieParser());

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRouter);

app.listen(process.env.PORT, ()=>{
    connectToMongoDB();
    console.log("Server is running");
})