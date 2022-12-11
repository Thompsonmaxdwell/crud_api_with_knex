const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes');

const app = express();
app.use(bodyParser.json())
app.use(route)


app.listen(8080, ()=>{
    console.log("Server running on port  8080")
})




