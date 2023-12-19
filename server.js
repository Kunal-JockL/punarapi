const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');


require("dotenv").config();
const SRCEMAIL = process.env.EMAIL;
const SRCEMAILPWD = process.env.PWD;
const DESTEMAILS = process.env.DEST.split(' ');


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
    colors = formBody.colors,
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

    // SEND MAIL TO CUSTOMER
    const customerMailOptions = {
        from: SRCEMAIL,
        to: email,
        subject: `Punarapi - Your sample request for ${sampleTile} tiles has been received!`,
        text: `Hello ${firstName + ' ' + lastName},\n\nThank you for requesting a sample for ${sampleTile} tiles. We shall contact you shortly for any further details.`,
    };
    
    transporter.sendMail(customerMailOptions, (error, info) => {
        if (error) {
          return console.error(error);
        }
        console.log('Email sent:', info.response);
    });

    // SEND MAIL TO OWNERS

    for(let i = 0; i < DESTEMAILS.length; i++) {
        const mailOptions = {
            from: SRCEMAIL,
            to: DESTEMAILS[i],
            subject: `Punarapi - A sample request for ${sampleTile} tiles has been arrived!`,
            text: `Form Details:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nE-Mail:\n ${email}\nPhone No: ${phoneNumber}\nPosition: ${jobPosition}\nRequested Sample: ${sampleTile} Tiles\nColors: ${colors}\nAddress: ${address}\nCity: ${city}\nState: ${state}\nZIP Code: ${zipCode}\nCountry: ${country}\n\nContact the client through email as soon as possible.`,
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.error(error);
            }
            console.log('Email sent:', info.response);
        });
    }
    
    res.send('Form submitted successfully!');
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})