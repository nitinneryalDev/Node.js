module.exports = reqFilter = ( req , res , next ) =>  {
    if(!req.query.age) {
        res.send('please provide age')
    } else if(req.query.age < 18 )  {

        res.send('you canot access this page')
        
        
    } else {
        next();
    }
    
}