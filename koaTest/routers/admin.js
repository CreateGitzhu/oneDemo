const router = require('koa-router')();
const login = require('./admin/login.js');
const user = require('./admin/user.js');
const focus = require('./admin/focus.js');
const newscate = require('./admin/newscate.js');

// 配置样式中间件
router.use(async (ctx, next) => {
    // 模板引擎配置全局变量
    ctx.state.__HOST__ = 'http://' + ctx.request.header.host;
    // 禁止从地址栏匹配路由
    if (ctx.session.userinfo) {
        await next();
    } else {
        if (ctx.url == '/admin/login' || ctx.url == '/admin/login/doLogin') {
            await next();
        } else {
            ctx.redirect('/admin/login');
        }
    }

});

router.get('/', async (ctx) => {
    await ctx.render('admin/index');
});
// 配置admin的子路由
router.use('/login', login);
router.use('/user', user);
router.use('/focus', focus);
router.use('/newscate', newscate);


module.exports = router.routes(); //在模块里暴露路由并启动