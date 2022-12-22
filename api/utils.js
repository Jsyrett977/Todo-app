const requireUser = (req, res, next) => {
    if(!req.user){
        res.status(401).send({
            name: "MissingUserError",
            message: "You must be logged in to continue"
        })
    }
    next()
}
module.exports = { requireUser }