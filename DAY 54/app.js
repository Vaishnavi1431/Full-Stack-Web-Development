const express = require('express');

const app = express();
const PORT = 8900;

app.get('/', (req, res) => {
  res.send('Hello world'); 
});


app.get('/home', (req, res) => {
  res.send('Home page');
});

app.get('/filter', (req, res) => {
  res.send('filter page');
});

app.get('/details', (req, res) => {
  res.send(' Details page');
});

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
