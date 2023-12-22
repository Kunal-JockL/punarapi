const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();
const SRCEMAIL = process.env.EMAIL;
const SRCEMAILPWD = process.env.PWD;
const DESTEMAILS = process.env.DEST.split(" ");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.render("punarapi");
});

app.get("/products", (req, res) => {
    res.render("product-page");
});

app.get("/contact", (req, res) => {
    res.render("contact", { form: true });
});

app.post("/contact", (req, res) => {
    const formBody = req.body;

    const firstName = formBody.firstname,
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

    res.render("contact", { form: false, result: 'Thank You For Contacting Us', resultSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, alias.' });
});

app.post("/request_sample", (req, res) => {
    const formBody = req.body;

    const firstName = formBody.firstname,
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
        service: "gmail",
        auth: {
            user: SRCEMAIL,
            pass: SRCEMAILPWD,
        },
    });

    const mailOptions = {
        from: SRCEMAIL,
        to: DESTEMAILS,
        subject: `Punarapi - A sample request for ${sampleTile} tiles has been arrived!`,
        text: `A sample has been requested by:\n\nName: ${firstName} ${lastName}\nE-Mail: ${email}\nPhone No: ${phoneNumber}\nPosition: ${jobPosition}\n\nTile Requested: ${sampleTile} Tiles\nColors: ${colors}\n\nAddress: ${address}, ${city}, ${state}, ${zipCode}, ${country}\n\nContact the client through email as soon as possible.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.render("request", {
                result: "Your Sample Request Was Not Sent!",
                resultSubtitle:
                    "Due to some unknown error your sample request was not sent. Our developers were notified and we are working on this issue. Please try submitting the form again. If the issue persists, please contact us directly at example@email.com directly with your sample request.",
            });
            return console.error(error);
        }

        console.log("Email sent:", info.response);

        const customerMailOptions = {
            from: SRCEMAIL,
            to: email,
            subject: `Punarapi - Your sample request for ${sampleTile} tiles has been received!`,
            text: `Hello ${
                firstName + " " + lastName
            },\n\nThank you for requesting a sample for ${sampleTile} tiles. We shall contact you shortly for any further details.`,
        };

        transporter.sendMail(customerMailOptions, (error, info) => {
            if (error) {
                console.error(error);
            }
        });

        res.render("request", {
            result: "Thank You For Considering Us",
            resultSubtitle:
                "Your sample request has been received and you will receieve an email containing the confirmation. We shall get in contact with you as soon as possible. Thank you.",
        });
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
