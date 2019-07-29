const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect(
    'mongodb+srv://wickydb:Qwer1234@cluster0-nasy2.mongodb.net/koa-graphql',
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;
