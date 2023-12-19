const express = require('express');
const nodemailer = require('nodemailer');
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

app.post('/request_sample', (req, res) => {
    const formBody = req.body;

    const 
    firstName = formBody.firstname,
    lastName = formBody.lastname,
    email = formBody.email,
    phoneNumber = formBody.phno,
    jobPosition = formBody.position,
    sampleTile = formBody.sample,
    company = formBody.company,
    address = formBody.address,
    city = formBody.city,
    state = formBody.state,
    zipCode = formBody.zip,
    country = formBody.country;

    res.send('Request sent');
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})