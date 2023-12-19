const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');


require("dotenv").config();
const SRCEMAIL = process.env.EMAIL;
const SRCEMAILPWD = process.env.PWD;


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

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: SRCEMAIL,
          pass: SRCEMAILPWD,
        },
    });
    
    const mailOptions = {
        from: SRCEMAIL,
        to: email,
        subject: 'Test for Punarapi',
        text: `Just a test!`,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.error(error);
        }
        console.log('Email sent:', info.response);
        res.send('Form submitted successfully!');
    });

    res.send('Form not sent!');
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})