

export const useDeletePost=()=>{

    const deleteHandler =async (id:number) => {
       try {
           const deleteReq=await $fetch(`http://localhost:3000/api/posts/${id}`,{method:'DELETE'})
            refreshNuxtData('postsFetchData')
       }catch (err) {
           console.log(err)
       }
    }

    return{
        deleteHandler
    }
}