const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.render('index', { title: 'Qui prend quoi?' });
});

app.post('/party', function(req, res) {
    axios
        .post(`${process.env.API_URL}/party`, req.body)
        .then(({ data }) => {
            console.log(data);
            res.redirect(`/party/${data._id}`)
        })
        .catch((err) => {
            //console.log(err);
            res.send(err)
        });
    //console.log(req.body);
    //res.send('Post ok !');
});

app.get('/party/:id', function(req, res) {
    axios
        .get(`${process.env.API_URL}/party/${req.params.id}`)
        .then(({ data }) =>
            res.render('party', {
                party: data,
                title: data.name,
                url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
            }),
        )
        .catch((err) => console.log(err));
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));

app.set('view engine', 'pug');
