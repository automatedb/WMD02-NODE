const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const IndexCtrl = require('./controllers/IndexCtrl');

const config = {
    name: "Bibi"
};

const port = 3000;
const app = express();

// app.set('views', 'my-views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send(`Hello World inconnu!`));

// Sans vue
// app.get('/:name?', (req, res) => {
//     // if(req.params.name !== undefined) {
//     //     const name = req.params.name;
//     // } else {
//     //     const name = 'inconnu';
//     // }
//
//     console.log(req.query);
//
//     const name = req.params.name || 'inconnu';
//
//     res.send(`Hello World ${name}!`);
// });

const indexCtrl = new IndexCtrl(config);

// Avec une vue
app.get('/:name?', indexCtrl.index.bind(indexCtrl));

app.post('/auth', indexCtrl.auth.bind(indexCtrl));

app.listen(port, () => console.log(`Connection ready on : ${port}`));