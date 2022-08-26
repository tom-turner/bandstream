const express = require('express');
const session = require('express-session');
const app = express();
const http = require('http').Server(app);
const PORT = process.env.PORT || 8004;
const path = require("path");
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.set('layout', 'application');
app.set('view engine', 'ejs');
app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
	console.log('home')
	res.render('index.ejs', { title : 'Do It LAB - A Do It LAB is a space for you to prototype physical products.'});
});

app.get('/*', (req, res) => {
 	res.render('404.ejs', {title : '404 Page'})
});

	
const server = http.listen(process.env.PORT || PORT, function() {
  console.log('listening on *:',PORT);
});