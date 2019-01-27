const Koa = require('koa');
const KoaStatic = require('koa-static');
const path = require('path');

const app = new Koa();
const staticPath = './static';

app.use(KoaStatic(path.resolve(__dirname,staticPath)));

app.listen(8000 , () => {
    console.log(`Koa Server start , Listening in 8000`);
});