const fs = require(fs)


fs.writeFile('demo.js', "Are you ther")

const http = require('http');
const { text } = require('stream/consumers');


 function  serverResponse(req , res) {
  
        res.write('<h1>Hello this is Nitin Neryal</h1>')
        res.end()
        
 
 }

// fs.writeFileSync('hello.js' , "This should be the text inside")

http.createServer(serverResponse).listen(4500);


