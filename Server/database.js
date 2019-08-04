const mongoose = require('mongoose');

const initDB = () => {
  mongoose.set('debug', true)
  
  mongoose.connect(
    'mongodb+srv://wickydb:Qwer1234@cluster0-nasy2.mongodb.net/koa-graphql',
    { useNewUrlParser: true }
  );

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.dbPath)
  })
  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;
