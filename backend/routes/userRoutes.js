const {Router} = require('express');
const router = Router();


router.get('/', async(req,res)=>{
    const user = req.user;
    return res.json({...user, password:undefined})
})

router.get('/projects', async(req,res)=>{
    const user = req.user;
    const allProjects = user.projects;
    return res.json(allProjects);
})

router.get('/seminars', async(req,res)=>{
    const user = req.user;
    const allSeminars = user.seminars;
    return res.json(allSeminars);
})

router.get('/research', async(req,res)=>{
    const user = req.user;
    const allresearch = user.research;
    return res.json(allresearch);
})



module.exports = router;