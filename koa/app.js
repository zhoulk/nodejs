const Koa = require('koa');

const controller = require('./controller');

const templating = require('./templating');

// const router = require('koa-router')();

var app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

app.use(async(ctx, next) => {
	console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);

	await next();
    // ctx.response.type = 'text/html';
    // ctx.response.body = '<h1>Hello, koa2!</h1>';
});
//
// // add url-route:
// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });
//
// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>Index</h1>';
// });
//
// // add router middleware:
// app.use(router.routes());


app.use(templating('views', {
	noCache: !isProduction,
	watch: !isProduction
}));

app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
