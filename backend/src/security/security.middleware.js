
const ensureAuthorization = (req ,res,next)=>{
    const {authorization} = req.headers;

    if(authorization === process.env.DEFAULT_API_AUTH){
        next()
    }
    else{
        return res.status(403).json({ status: 403, message: "Vous n'avez pas acces à cette ressource, fournis une clé d'authorization valide dans le headers" });
        
    }
}

export {
    ensureAuthorization
}