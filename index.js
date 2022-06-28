const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const formationRoutes = require('./routes/formations');


mongoose.connect('mongodb://localhost:27017/formation', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use(methodOverride('_method'))
app.use('/', formationRoutes);




app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


