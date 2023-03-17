const express = require('express');
const path = require('path');
const api = require('./routes/notes');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

//static file
app.use(express.static('public'));


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// If no matching route is found default to home page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// GET Route for homepage
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname + '/public/index.html'))
// );

// // app.get('/', (req, res) =>
// //   res.sendFile(path.join(__dirname + '/public/index.html'))
// // );

// //GET Route for note page
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
