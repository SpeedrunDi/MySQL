const express = require('express');
const cors = require('cors');
const mysqlDb = require("./mysqlDb");
const news = require('./app/news');
const messages = require('./app/messages');

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use('/news', news);
app.use('/messages', messages);

mysqlDb.connect();
app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});