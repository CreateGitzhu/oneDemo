// 轮播图的增删改
const router = require('koa-router')();

router.get('/', async (ctx) => {
    // ctx.body = '轮播图列表首页'
    await ctx.render('admin/focus/index');
});

router.get('/add', async (ctx) => {
    // ctx.body = '轮播图添加'
    await ctx.render('admin/focus/add');
});

router.get('/edit', async (ctx) => {
    // ctx.body = '轮播图修改'
    await ctx.render('admin/focus/edit');
});

router.get('/delete', async (ctx) => {
    // ctx.body = '轮播图删除'
    await ctx.render('admin/focus/delete');
});
module.exports = router.routes();