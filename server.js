const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/static')));

app.get('/', (req, res) => {
    res.send('hi runs');
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})