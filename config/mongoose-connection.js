const mongoose = require('mongoose');
const debg = require('debug')("development:mongoose");
const config = require('config');

mongoose
  .connect(`${config.get("MONGO_URL")}/scatch`)
  .then(function() {
    console.log("connected");
  })
  .catch(function(err) {
    console.log(err);
  });

module.exports = mongoose.connection;
