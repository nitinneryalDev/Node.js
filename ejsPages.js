const express = require("express");
const path = require('path')
const app = express();
const publicPath = path.join(__dirname , 'public')



app.set('view engine' , 'ejs' )

app.get('/profile' , (_ ,  res) =>  {
    const user = {
        name:'nitin neryal', 
        email:'nitinneryal@gmail.com' , 
        city:'shimla', 
        skills:[ 'node' , 'javascript' , 'Angular' , 'React' ]
    }
    res.render(`profile` , {user})
} )


app.get('/login' , (_ ,  res) =>  {
    res.render(`login` )
} )

// app.use(express.static(publicPath))


app.get('/about' , (_ ,  res) =>  {
    res.sendFile(`${publicPath}/about.html`)
} )


app.get('/help' , (_ ,  res) =>  {
    res.sendFile(`${publicPath}/help.html`)
} )

app.get('*' , (_ ,  res) =>  {
    res.sendFile(`${publicPath}/404.html`)
} )

app.listen(5000);
