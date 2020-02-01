var express = require('express');
var cors = require('cors');
var app = express();

// adding middleware - cors

 app.use(cors());

//static files
// routes ;

app.get("/",(request,response)=>{
    response.send("Welcome gdf");
});
app.listen(3000,()=>{
    console.log("Your application is successfully started on port number:3000");
})

