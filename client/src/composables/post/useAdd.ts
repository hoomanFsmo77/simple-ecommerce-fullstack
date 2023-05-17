

export const useAddPost=()=>{
    const newPostData=reactive({
        title:'',body:''
    })
    
    
    const addPostHandler = async () => {
      try {
          const addPostReq=await $fetch('http://localhost:3000/api/posts',{
              method:'POST',body:JSON.stringify(newPostData)
          })
          refreshNuxtData('postsFetchData')
      }catch (err) {
          console.log(err)
      }
    }
    
    
    return{
        addPostHandler,newPostData
    }
}