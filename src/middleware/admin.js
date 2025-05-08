const adminMiddlware = (req,res,next)=>{
const token = "xyz";

const verifyToken = token === "xyz";

if(verifyToken){
     next();
}else{
   res.status(401).send("unauthorised token");
}

}


module.exports = {adminMiddlware}