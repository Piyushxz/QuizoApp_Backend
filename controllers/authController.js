const {v4: uuid} = require("uuid")
const userdata = require("../db/users")
const jwt = require("jsonwebtoken")

const authVerify = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = { userId:  decodedToken.id }
        return next();
    }catch(err){
        console.error(`error from server ${JSON.stringify(err)}`)
    }

}



const signUpHandler = (req,res) =>{
    const {username,password} = req.body;

    isUserSignedUp = userdata.users.some(user => user.username === username);
    if(isUserSignedUp){
        res.status(422).send("Already Signed Up")
    }else{
        const id = uuid();

        const newUser = {id,username,password};
        userdata.users = [...userdata.users,newUser];
        const token = jwt.sign({id:username},process.env.SECRET_TOKEN)
        res.json({message:`Created New User username ${username}, password ${password} token ${token}`});
    }
}

const loginHandler = (req,res)=>{
    const {username,password} = req.body;
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);

    if(isUserVerified){
        const token = jwt.sign({id:username},process.env.SECRET_TOKEN)

        res.json({username,token,message:"Valid User"})
    }else{
        res.status(401).send("Invalid user")
    }
}
module.exports = {loginHandler,signUpHandler,authVerify}