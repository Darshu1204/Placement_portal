const jwt = require('jsonwebtoken');
const JWT_SECRET = "Welcome Guys";


const fetchuser = (req, res, next) => {
    //get the user rom the jwt token and add id to req object

    const token = req.header('auth-token');
    if (!token) {
    const token = req.header('auth-token');
        res.status(401).send({ error: "Please Authenticate using a valid token1" });
    }
    try {
        console.log("h1",token)
        const data = jwt.verify(token, JWT_SECRET);
        console.log("h2",data)
        req.student = data.student;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate using a valid token2" });
    }
}
module.exports = fetchuser;