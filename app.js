const Koa = require('koa');

const app = new Koa()
const koa = require('koa-router')();
const json = require('koa-json');
const logger = require('koa-logger'); 

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

// show excute time 
app.use(function* (next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.on('error', function(err, ctx){
  console.log('server error', err);
});

app.listen(8889,() => {
  console.log('Koa is listening in 8889');
});

module.exports = app;