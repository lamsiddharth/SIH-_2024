
import User from "../model/user.js";
import { verify_TOKEN } from '../service/auth.js';

async function AuthUser(req, res, next) {
    try {
        const token = res.cookies.token;

        if(!token){
            return res.status(401).json({ success: false,error: "Unauthorized - No Token Provided" });
        }

        const decoded = verify_TOKEN(token);

        if(!decoded){
            return res.status(401).json({ success:false, error: "Unauthorized - Invalid Token" });
        }

        const user = await User.findOne(decoded.facultyId);

        if (!user) {
			return res.status(404).json({success:false, error: "User not found" });
		}

		req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    AuthUser,
}
