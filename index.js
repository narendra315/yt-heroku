const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use('*', cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("API is up and running.")
})

app.get('/ping', (req, res) => {
    res.send({ result: "pong" });
})


app.listen(process.env.PORT || 8080, () => {
    console.log('API is up and running');
})