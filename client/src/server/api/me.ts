import {getCookie, setResponseStatus} from "h3";

export default defineEventHandler(async ev=>{
    const {apiBase}=useRuntimeConfig()
    const token:string|undefined=getCookie(ev,'x_token_x')
    if(token){
        try{
            const isUserExist=await $fetch(apiBase+'/api/me',{
                headers:{
                    Authorization:token,
                    'Content-Type':'application/json'
                },
                method:'POST'
            })
            return isUserExist
        }catch (err) {
            setResponseStatus(ev,401,'user does not exist!')
        }
    }else{
        setResponseStatus(ev,401,'Token is not provided!')
    }

})