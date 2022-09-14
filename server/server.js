const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

//handles request for body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handles requet for static files
// app.use(express.static(path.resolve(__dirname)));

//define the route handler
app.use('/api', apiRouter);

// app.get('../src/App.scss', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../src/App.scss'));
// });

app.use('*', (err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
