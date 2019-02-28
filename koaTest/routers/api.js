const router = require('koa-router')();
router.get('/newslist', async (ctx) => {
    ctx.body = {
        "title": "这是一个新闻的接口"
    }
});
router.get('/foucs', async (ctx) => {
    ctx.body = {
        "title": "这是一个轮播图的接口"
    }
});


module.exports = router.routes();