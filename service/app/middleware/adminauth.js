module.exports = options =>{
    return async function adminauth(ctx,next){//ctx上下文，next下一步操作
        console.log(ctx.session.openId)//打印session
        //判断session是否验证成功
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body={data:'没有登录'}
        }
    }
}