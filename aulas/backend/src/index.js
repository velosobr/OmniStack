const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://dbAdmin:KHWjdk2QuhKGuyXJ@cluster0-ftmsm.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,

});
app.use(require('./routes'));


app.listen(3333);