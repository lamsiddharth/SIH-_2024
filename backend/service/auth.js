const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET;


async function create_token(user){
    const payload={
        id: user._id,
        name:user.name,
        facultyId: user.facultyid,
    }
    const cookie = jwt.sign(payload, TOKEN_SECRET,{
        expiresIn:"1d"
    });
    return cookie;
}

async function verify_TOKEN(token){
    return jwt.verify(token, TOKEN_SECRET);
}


module.exports = {
    create_token,
    verify_TOKEN
}