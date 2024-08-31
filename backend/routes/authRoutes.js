import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../model/user';
import {  create_token } from '../service/auth';

const router = express.Router();

router.post('/login', async(req, res) => {
    try {
        const{facultyId, password} = req.body;
        const user = await User.findOne({facultyId});
        if(!user){
            return res.status(400).json({error: 'no such faculty exists'})

        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({error: 'wrong password'})
        }

        const token = create_token(user);

        res.cookie('token', token, {
            maxAge: 15*24*60*60*1000,
        })


    } catch (error) {
        res.status(500).json({error: "error signing in"})
    }
})



module.exports = router