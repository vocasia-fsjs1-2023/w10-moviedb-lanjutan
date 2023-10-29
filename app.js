const express = require('express');
const bodyParser = require('body-parser');
const errorHandling = require('./middleware/errorHandling');
const routes = require('./routes/index');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(errorHandling);
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});