const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');

app.use(express.static(path.join(__dirname, 'src/public')));


// HTTP logger
app.use(morgan('dev'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'src/resources/views'));


app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})