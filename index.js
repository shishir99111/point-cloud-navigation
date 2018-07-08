const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '/.env') });

const PORT = process.env.PORT;
const INDEX_PATH = './viewer.html';

app.use(cors());

app.use((req, res, next) => {
  console.log(`--> ${req.method} ${req.path}`);
  next();
});

app.use(express.static('./'));

app.get(['/'], (req, res) => {
  res.sendFile(path.join(__dirname, INDEX_PATH));
  //   res.sendFile('viewer.html');
});

http.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}, ${process.env.NODE_ENV} ENVIRONMENT.`);
});