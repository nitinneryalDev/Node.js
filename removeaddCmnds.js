const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "crud");
const filepath = `${dirpath}/apple.txt`;

 fs.writeFileSync(filepath , 'This is a simple text file' )

 fs.readFile(filepath , "utf8"   , (err , item) =>  {
     console.log(item)
 })

 fs.appendFile(filepath , 'the append text goes here now' , (err) => {
     if(!err) console.log('File is updated sucessfully')
 } )

 fs.rename(filepath, `${dirpath}/fruit.txt`, (err) => {
   if(!err) console.log("File name is updated successfully")
 });


// fs.unlinkSync(`${dirpath}/fruit.txt`)
