const Koa = require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path = require('path'),
    static = require('koa-static'),
    session = require('koa-session'),
    bodyParser = require('koa-bodyparser');


const app = new Koa();
// 配置post提交方式
app.use(bodyParser());

// 配置模板
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});
// 配置静态资源
app.use(static(__dirname + '/static'));
// 配置session
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,//每次重新请求都重新设置session
    renew: false,//
 };

app.use(session(CONFIG, app));
// 引入子路由
const admin = require('./routers/admin.js');
const api = require('./routers/api.js');
const index = require('./routers/index.js');

router.use('/', index); // 配置路由
router.use('/admin', admin); // 配置层级路由（子路由）
router.use('/api', api); // 匹配 Api的路由
// 启动路由
app.use(router.routes()).use(router.allowedMethods());



app.listen(8000);