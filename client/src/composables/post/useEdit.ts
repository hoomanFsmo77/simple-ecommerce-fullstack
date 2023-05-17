

export const useEditPost=()=>{
    const modalFlag=ref<boolean>(false)
    const postData=reactive({
        title:'',
        body:''
    })
    const closeModal = () => {
      modalFlag.value=false
    }

    const editHandler = async (id:number) => {
        try {
            const getPostReq:any=await $fetch(`http://localhost:3000/api/posts/${id}`)
            postData.body=getPostReq[0].body
            postData.title=getPostReq[0].title
            modalFlag.value=true
        }catch (err) {
            console.log(err)
        }
    }

    const confirm =async (id:number) => {
        if(postData.title.length>1 && postData.body.length>1){
            try {
                const editReq=await $fetch(`http://localhost:3000/api/posts/${id}`,{
                    method:'PUT',
                    body:JSON.stringify(postData)
                })
                modalFlag.value=false
                refreshNuxtData('postsFetchData')
            }catch (err) {
                console.log(err)
            }
        }

    }



    return{
        editHandler,modalFlag,closeModal,postData,confirm
    }
}