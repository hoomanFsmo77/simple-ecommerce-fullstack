
interface Props{
    id:number
}

export const useUserEdit=(props:Props)=>{
    const modalFlag=ref<boolean>(false)
    const userData=reactive({
        username:'',
        lastname:'',
        firstname:'',
    })


    const closeModal = () => {
      modalFlag.value=false
    }

    const editHandler =async () => {
        try {
            const getUserDataReq:any=await $fetch(`http://localhost:3000/api/users/${props.id}`)
            userData.firstname=getUserDataReq[0].firstname
            userData.lastname=getUserDataReq[0].lastname
            userData.username=getUserDataReq[0].username
            modalFlag.value=true
        }catch (err) {
            console.log(err)
        }


    }

    const confirm = async () => {
        try {
            const editUserRequest=await $fetch(`http://localhost:3000/api/users/${props.id}`,{
                method:'PUT',
                body:JSON.stringify(userData)
            })
            modalFlag.value=false
            refreshNuxtData('userFetchData')
        }catch (err) {
            console.log(err)
        }
    }


    return{
        editHandler,modalFlag,closeModal,confirm,userData
    }
}