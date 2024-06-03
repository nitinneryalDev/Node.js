const DBcollection = require('./mongodb')



DBcollection().then((resp) => {
  resp
    .find({ name: "nord" })
    .toArray()
    .then((data) => {
      console.log(data);
    });
});


const main = async () => {
  let  data = await DBcollection();
  data = await  data.find().toArray();
  console.log(data)
}

main()
