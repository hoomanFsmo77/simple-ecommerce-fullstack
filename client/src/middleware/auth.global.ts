

export default defineNuxtRouteMiddleware(async (to,from)=>{
    if(process.server)return;
    if(process.client){
        const isLogin=useState('isLogin')
        if(to.name!=='LOGIN'){
            if(!isLogin.value ){
                return navigateTo({name:'LOGIN'})
            }
        }
    }


})