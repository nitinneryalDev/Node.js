app.get("", (req, res) => {
    console.log('this is the name of the requeres ' , req.query.name )
  res.send(` Hello , This is homepage ${req.query.name }  `  );
});

app.get("/about", (req, res) => {
  res.send(`Hello , This is about  us page  <br> <a href="/">home</a>  <p> ${req.query.name}  </p>`    );
});

app.get("/help", (req, res) => {
  res.send([ { name:'nitin',email:'nitinneryal@gmail.com' } ,
  { name:'samp',email:'sam@gmail.com' }
   ]);
});
