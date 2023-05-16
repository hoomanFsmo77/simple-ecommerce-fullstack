
export default defineNuxtPlugin(async nuxtApp=>{
    const isLogin=useState('isLogin',()=>false)
    const userData:any=useState('userData',()=>null)
    try {
        const isUserExist=await $fetch('/api/me')
        userData.value=isUserExist
        isLogin.value=true
    }catch (err) {
        userData.value=null
        isLogin.value=false
    }
})