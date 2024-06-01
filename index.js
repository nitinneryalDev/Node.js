const express = require('express')
const app = express();


app.get('' , ( req , res ) => {
    res.send('Hello , This is homepage')
} )


app.get('/about' , ( req , res ) => {
    res.send('Hello , This is about  us page')
} )


app.get('/help' , ( req , res ) => {
    res.send('Hello , This is help  us page')
} )

app.listen(5000);