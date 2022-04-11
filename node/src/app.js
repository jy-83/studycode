const koa=require('koa');
const koaRouter=require('koa-router');
const cors = require('koa-cors');


const app=new koa();
app.use(cors());
const router=new koaRouter();
router.get('/test',ctx=>{
    ctx.body={
        message:'获取成功啊'
    }
})

app.use(router.routes());
app.listen(8082)