// Modules ===================

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const PORT = process.env.PORT || 3000;

app.set('view engine', 'html');
app.set('views', __dirname + '/../public');

app.use(bodyParser.json());
app.use(bodyParser.json( {type: 'application/vnd.api+json' } ));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/../public'));


// All the routes ==========
require('../app/app')(app);


app.listen(PORT, () => {
    console.log('Server is running in port: ' + PORT);
});
