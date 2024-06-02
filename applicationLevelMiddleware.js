const express = require("express");
const path = require('path')
const app = express();
const publicPath = path.join(__dirname , 'public')


const reqFilter = ( req , res , next ) =>  {

    if(!req.query.age) {
        res.send('please provide age')
    } else if(req.query.age < 18 )  {

        res.send('you canot access this page')
        
        
    } else {
        next();
    }
    
}
app.use(reqFilter)

app.get('/'  , (req , res) => {
    res.send('Welcome to Home page')
} )


app.listen(5000);
