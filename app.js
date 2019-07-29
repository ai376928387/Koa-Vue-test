const Koa = require('koa');

const app = new Koa()
const koa = require('koa-router')();
const json = require('koa-json');
const logger = require('koa-logger'); 

const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');

initDB();
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

// show excute time 
// app.use(function* (next){
//   let start = new Date;
//   yield next;
//   let ms = new Date - start;
//   console.log('%s %s - %s', this.method, this.url, ms);
// });

app.on('error', function(err, ctx){
  console.log('server error', err);
});

app.listen(8889,() => {
  console.log('Koa is listening in 8889');
});

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

app.on('error', err => {
  log.error('server error', err)
});

const Gadget = require('./models/gadgets');
const newGadget = new Gadget({
  name: 'abc',
  release_date: '07/06/2000',
  by_company: 'Apple',
  price: 79
})
newGadget
  .save()
  .then(item => console.log(item))
  .catch(err => console.log(err));