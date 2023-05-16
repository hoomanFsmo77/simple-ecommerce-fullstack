import {readBody, setCookie} from "h3";

export default defineEventHandler(async ev=>{
    const {apiBase}=useRuntimeConfig()
    const body=await readBody(ev)
    console.log(body)
    try {
        const {username,firstname,lastname,token}:any=await $fetch(apiBase+'/api/login',{
            method:'POST',
            body:JSON.stringify({
                username:body.username,
                password:body.password
            })
        })
        setCookie(ev,'x_token_x',token,{
            secure:true,
            httpOnly:true,
            maxAge:60*60*24
        })
        return {
            username,firstname,lastname
        }
    }catch (err) {
        return err
    }
})