const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const route = require('./routes/index.js');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

dotenv.config();

//Middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
  );
  
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  
  app.use(morgan('combined'));
  app.use(methodOverride('_method'))
  
  mongoose
    .connect(process.env.MONGO_URI, {
      writeConcern: { w: 'majority' },
    })
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
      console.log(err);
    });
  
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});