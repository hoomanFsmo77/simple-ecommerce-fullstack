import {defineStore} from "pinia";
import {ICart} from "~/utils/Types";
import {useProductStore} from "~/composables/useStore";
import Swal from "sweetalert2";

export const Cart=defineStore('cart',{
    state:():{cartList:ICart[]}=>{
        return{
            cartList:[]
        }
    },
    getters:{
        isProductExist:(state)=>(id:number)=>{
            return state.cartList.some(item=>item.id===id)
        }
    },
    actions:{
        addToCart(id:number){
            const {productStore}=useProductStore()
            const target=productStore.getProductById(id)
            if(this.isProductExist(id)){
                const productIndex=this.cartList.findIndex(item=>item.id===id)
                this.cartList[productIndex].count++
                Swal.fire({
                    title:'Product added!'
                })
            }else{
                this.cartList.push({...target,count:1})
                Swal.fire({
                    title:'Product added to your cart!'
                })
            }
        }
    }
})