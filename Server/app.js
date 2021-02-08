const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const connection = require('./DBConnection')

const app = express();

app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connection.connect();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.use('/api/bucket', require('./Routes/bucket.js'));

app.listen(5000, () => {
    console.log(`Server is listening on port: 5000`);
});