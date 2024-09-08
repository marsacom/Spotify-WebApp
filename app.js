require('dotenv').config();

const express = require('express');
const exLayout = require('express-ejs-layouts');

const app = express();
const PORT = 3000 || process.env.PORT;


// Setting Template Engine
app.use(exLayout);
app.set('layout', './layouts/main');
app.set('view enginge', 'ejs');


app.get('', (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Server Listening On Port: ${PORT}`)
})