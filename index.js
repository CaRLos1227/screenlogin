const app = require('express')();
const http = require('http');
const { readFileSync, writeFileSync } = require('fs');
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const db = JSON.parse(readFileSync('./db/users.json'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/register', ({ query: { name, password } }, res) => {
  db[name] = { password };
  writeFileSync('./db/users.json', JSON.stringify(db, null, '\t'));
  res.json({status: 200});
});

app.get('/js/main.js', (req, res) => {
  res.sendFile(__dirname + '/js/main.js');
});

app.get('/css/style.css', (req, res) => {
  res.sendFile(__dirname + '/css/style.css');
});

app.get('/gif/back.gif', (req, res) => {
  res.sendFile(__dirname + '/gif/back.gif');
});

server.listen(port, () => {
  console.log('server runnig');
});