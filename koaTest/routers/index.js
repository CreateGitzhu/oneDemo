const router = require('koa-router')();
router.get('/', async (ctx) => {
    // ctx.body = "首页"
    await ctx.render('admin/index');
});
router.get('case', async (ctx) => {
    // ctx.body ="案列"
    await ctx.render('admin/case');
});
router.get('about', async (ctx) => {
    // ctx.body = "关于我们"
    await ctx.render('admin/about');
});


module.exports = router.routes();