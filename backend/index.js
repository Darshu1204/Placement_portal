// npm i -D nodemon used to dowload nodemon as dev Dependencies
const connectToMongo = require("./db");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });//import the config.env
const express = require("express");
const app = express();
var cors = require('cors');
const PORT = process.env.PORT||5000;
app.use(cors())
connectToMongo();
const port = 5000;
app.use(express.json())
app.use('/admin',require('./routes/adminAuth'));
app.use('/student',require('./routes/studentAuth'));
app.get("/", (req, res) => {
    res.send("Hello World");
})
if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
}
app.listen(port, () => {
    console.log(`Placement Backend  Is Listening at Port http://localhost:${port}`);
})