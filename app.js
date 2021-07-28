const express = require('express');

const app = express();

app.use(express.static('src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/views/home.html')
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/src/views/home.html')
})

app.listen(3003, ( ) => console.log("Servidor foi iniciado") )