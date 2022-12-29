
const ensureAuthantication = (req ,res,next)=>{
    if(req.session.authenticated){
        next()
    }
    else{
        res.redirect('/login')
    }
}

export {
    ensureAuthantication
}