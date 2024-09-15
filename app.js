require('dotenv').config();

const express = require('express');
const exLayout = require('express-ejs-layouts');

const app = express();
const PORT = 3000 || process.env.PORT;


app.use(express.static('public'));

// Setting Template Engine
app.use(exLayout);
app.set('layout', './layouts/main');
app.set('view enginge', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`Server Listening On Port: ${PORT}`)
})