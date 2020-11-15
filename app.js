require('dotenv').config();

const express = require("express"); //$ --> dependancy
//$ require('./file-pathway-name) --> file

const db = require("./db");

const app = express();

app.use(require('./middleware/headers'));

// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index'));
//$ Import controllers as a bundle
const controllers = require("./controllers")

const validateSession = require('./middleware/validateSession');

//# Parse the body of all requests as JSON
app.use(express.json());

//$ Setting up "/pies" as an enpoint into my pie controller
app.use("/user", controllers.usercontroller);

app.use("/pies", validateSession, controllers.piecontroller);



db.authenticate()
.then(() => db.sync()) //# => {force: true} <-- This drops all tables
.then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server: ] App is listening on Port ${process.env.PORT}`));
})
.catch((err) => {
    console.log("[Server: ] Server Crashed");
    console.error(err);
})