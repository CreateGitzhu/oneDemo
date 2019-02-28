const router = require('koa-router')(),
    tools = require('../../moudle/tools.js');
router.get('/', async (ctx) => {
    // ctx.body = '登录'
    await ctx.render('admin/login');
});
router.post('/doLogin', async (ctx) => {
    ctx.body = ctx.request.body;
    // let password = ctx.body.user.password;
    // 1、验证用户名 密码 验证码 是否格式正确
    // 2、连接数据库

});
module.exports = router.routes();