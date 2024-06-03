const DBcollection = require('./mongodb')


const  insert = async () => {
    const db = await DBcollection();
    const result = await db.insertMany(
         [ {
            name:'note 5',
            brand:'Vivo', 
            price:677, 
            category:'mobile'
        } , {
            name:'max 1',
            brand:'Micromax', 
            price:677, 
            category:'mobile'
        } , {
            name:'Micromax 3',
            brand:'micromax 2', 
            price:677, 
            category:'mobile'
        }
    ,{
        name:'max 5',
        brand:'Micromax', 
        price:677, 
        category:'mobile'
    } ,{
        name:'max 6',
        brand:'Micromax', 
        price:677, 
        category:'mobile'
    }  ]
    )

if(result.acknowledged) {
    console.log('data inserted')
}

   
}

insert()