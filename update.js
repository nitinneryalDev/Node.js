const DBcollection = require('./mongodb')

const updateData = async () => {
    let data =  await DBcollection();
    let result = await  data.updateMany({name:"Lava Blaze "} ,{ $set:{name:"Lava Blaze 45" , price:976 }}  )
    console.log(result)    
   
}

updateData()