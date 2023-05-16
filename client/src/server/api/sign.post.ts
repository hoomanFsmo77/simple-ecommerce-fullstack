import {readBody, setCookie} from "h3";

export default defineEventHandler(async ev=>{
    const body=await readBody(ev)
    const {apiBase}=useRuntimeConfig()
    try {
        const signIn:any=await $fetch(apiBase+'/api/users',{
            method:'POST',
            body:JSON.stringify(body)
        })
        setCookie(ev,'x_token_x',signIn.token,{
            secure:true,
            httpOnly:true,
            maxAge:60*60*24
        })
        return 'user created'
    }catch (err) {
        return err
    }
})