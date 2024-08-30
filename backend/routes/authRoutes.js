import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../model/user';
import jwt from 'jwt';

const router = express.Router();

router.post('/login', async(req, res) => {
    try {
        const{facultyId, password} = req.body;
        const user = await User.findOne({facultyId});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password ||'')

        if(!user || isPasswordCorrect){
            return res.status(400).json({error: 'no such faculty exists'})

        }
        const token = jwt.sign({facultyId}, process.env.JWT_SECRET, {
            expiresIn: '2d',
        })

        res.cookie('jwt', token, {
            maxAge: 15*24*60*60*1000,
        })


    } catch (error) {
        res.status(400).json({error: "eroor signing in"})
    }
})