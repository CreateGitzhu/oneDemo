// 新闻的增删改查
const router = require('koa-router')();

router.get('/', async (ctx) => {
    // ctx.body = '新闻列表首页'
    await ctx.render('admin/newscate/index');
});
router.get('/add', async (ctx) => {
    // ctx.body = '新闻添加'
    await ctx.render('admin/newscate/add');
});
router.get('/edit', async (ctx) => {
    // ctx.body = '新闻修改'
    await ctx.render('admin/newscate/edit');
});
router.get('/delete', async (ctx) => {
    // ctx.body = '新闻删除'
    await ctx.render('admin/newscate/detele');
});
module.exports = router.routes();