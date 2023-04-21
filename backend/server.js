const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://spotty0326:amaniilee143@cluster0.xeexqj2.mongodb.net/?retryWrites=true&w=majoritymongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err))

const port = 5000;

app.listen(port, () => {
    console.log('Server started on port ${port}')
})