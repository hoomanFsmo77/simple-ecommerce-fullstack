import {defineStore} from "pinia";
import {ICart} from "~/utils/Types";
import {useProductStore} from "~/composables/useStore";
import Swal from "sweetalert2";

const storeData = (data:ICart[]) => {
    if(process.client){
        localStorage.setItem('x_cart_x',JSON.stringify(data))
    }
}

export const Cart=defineStore('cart',{
    state:():{cartList:ICart[],total:number}=>{
        return{
            cartList:[],
            total:0
        }
    },
    getters:{
        isProductExist:(state)=>(id:number)=>{
            return state.cartList.some(item=>item.id===id)
        },
        getCartLength(state){
            return state.cartList.length
        },
        getCartList(state){
            return state.cartList
        },
        getProductIndexById:(state)=>(id:number)=>{
            return state.cartList.findIndex(item=>item.id===id)
        },
        getTotalPrice(state){
            return state.total
        }
    },
    actions:{
        addToCart(id:number){
            const {productStore}=useProductStore()
            const target=productStore.getProductById(id)
            if(this.isProductExist(id)){
                const productIndex=this.cartList.findIndex(item=>item.id===id)
                if(this.cartList[productIndex].count===this.cartList[productIndex].available){
                    Swal.fire({
                        icon:'error',
                        title:`Max available number:${this.cartList[productIndex].available}`
                    })
                }else{
                    this.cartList[productIndex].count++
                    Swal.fire({
                        title:'Product added!'
                    })
                }

            }else{
                this.cartList.push({...target,count:1})
                Swal.fire({
                    title:'Product added to your cart!'
                })
            }
            this.calculateTotalPrice()
        },
        increase(id:number){
            const targetIndex=this.getProductIndexById(id)
            if(this.cartList[targetIndex].count!==this.cartList[targetIndex].available){
                this.cartList[targetIndex].count++
            }
            this.calculateTotalPrice()
            storeData(this.cartList)
        },
        decrease(id:number){
            const targetIndex=this.getProductIndexById(id)
            if(this.cartList[targetIndex].count>1){
                this.cartList[targetIndex].count--
            }
            this.calculateTotalPrice()
            storeData(this.cartList)

        },
        removeProduct(id:number){
            const targetIndex=this.getProductIndexById(id)
            this.cartList.splice(targetIndex,1)
            this.calculateTotalPrice()
            storeData(this.cartList)
        },
        calculateTotalPrice(){
            if(this.cartList){
                let total=0
                this.cartList.forEach(item=>{
                    total+=item.count*item.price
                })
                this.total=total

            }else{
                this.total=0
            }
            if(process.client){
                localStorage.setItem('x_total_x',JSON.stringify(this.total))
            }

        },
        clearCart(){
            this.cartList=[]
            this.calculateTotalPrice()
            storeData(this.cartList)
        }
    },
    hydrate(state) {
       if(process.client){
           const storedCartData=localStorage.getItem('x_cart_x')
           const storedTotalPriceData=localStorage.getItem('x_total_x')
           if(storedCartData && storedTotalPriceData){
               state.cartList=JSON.parse(storedCartData)
               state.total=JSON.parse(storedTotalPriceData)
           }else{
               state.cartList=[]
               state.total=0
           }
       }
    }
})