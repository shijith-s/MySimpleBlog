const express = require ('express');
const path = require ('path');
const app = express ();
const mongoose = require ('mongoose');
require ('dotenv/config');
const cors = require ('cors');
const blogRouter = require ('./routes/blogs');

// const static_file_folder = './client/build';

app.use (cors ());
// app.use (express.static (path.resolve (__dirname, static_file_folder)));
app.use (express.static (path.join (__dirname, 'uploads')));

//midlleware
app.use (express.json ());
app.use (
  express.urlencoded ({
    extended: true,
  })
);

app.use ('/blogs', blogRouter);

// app.get ('/*', (req, res) => {
//   res.sendFile (path.resolve (__dirname, static_file_folder, 'index.html'));
// });

//connecting to database
mongoose.connect (
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log ('connected to DB');
  }
);
const con = mongoose.connection;

//listen to the server
const port = process.env.PORT || 9000;
app.listen (port, () => {
  console.log (
    `*****************   server started at ${port}  *********************************`
  );
});
