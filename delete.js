const DBcollection = require('./mongodb')

const deleteData = async ( ) => {

 let data = await DBcollection()
 let result = await data.deleteMany({name:"Lava Blaze 45"})
 console.log(result)


}

deleteData()