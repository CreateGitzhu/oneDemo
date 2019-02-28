// 用户的增删改查
const router = require('koa-router')();

router.get('/', async (ctx) => {
    // ctx.body = '首页'
    await ctx.render('admin/user/list');
});
router.get('/add', async (ctx) => {
    // ctx.body = '用户添加'
    await ctx.render('admin/user/add');
});
router.get('/edit', async (ctx) => {
    // ctx.body = '用户修改'
    await ctx.render('admin/user/edit');
});
router.get('/delete', async (ctx) => {
    // ctx.body = '用户删除'
    await ctx.render('admin/user/delete');
});
module.exports = router.routes();