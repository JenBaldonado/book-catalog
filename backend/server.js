const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use('/api/books', require('./routes/bookRoutes'))

mongoose.connect('mongodb+srv://spotty0326:amaniilee143@cluster0.xeexqj2.mongodb.net/?retryWrites=true&w=majoritymongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server started on port ${port}')
})