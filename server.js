const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('punarapi');
})

app.get('/products', (req, res) => {
    res.render('product-page');
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})