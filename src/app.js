const Koa = require('koa');
const KoaLogger = require('koa-logger');
const koaBody = require('koa-body').default || require('koa-body');
const router = require('./Router.js');
const orm = require('./models');
const cors = require('@koa/cors');

// instancia de koa
const app = new Koa();

// Cors para poder acceder desde el frontend
app.use(cors());


app.context.orm = orm;

// middlewares
app.use(KoaLogger());
app.use(koaBody());

// router de koa 
app.use(router.routes());

// respuesta generica 
app.use((ctx, next) => {
  ctx.body = 'Minesweeper API';
});

module.exports = app;
