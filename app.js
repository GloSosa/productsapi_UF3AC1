const express = require('express')
const products_routes = require('./routes/products.js')

//Server instantiation
const app = express()
const slugify = require('slugify');
const message = "Hello from my API!";
console.log(slugify(message, { replacement: '*' }));
//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

//Midleware
app.use(express.json())
app.use('/', products_routes)

//Server startup
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


app.use(express.json());
