const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname , 'files');

for( i = 0 ; i < 5 ; i++ ) {
    fs.writeFileSync(`${dirpath}/hello${i}.txt` , 'A simple text file is made here' )
}


fs.readdir(dirpath , (err , files) => {
         files.forEach((item) => {
         console.log( `Name of the files are here ` ,  item)
         } ) 

}   ) 