const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

const mongoConnect = require('./database').mongoConnect

const destinationRoutes = require('./routes/destinationRoute')

app.use(express.json());
app.use('/', destinationRoutes)
app.use(express.static("./"));

const port = process.env.PORT || 10000;

mongoConnect(() => {
    app.listen(port)
    console.log('Server started at http://localhost:' + port);
})
