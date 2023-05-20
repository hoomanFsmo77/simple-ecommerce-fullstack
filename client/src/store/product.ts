import {defineStore} from "pinia";
import {IProduct} from "~/utils/Types";

export const Product=defineStore('product',{
    state:():{productList:IProduct[],fetchFlag:boolean}=>{
        return{
            productList:[],
            fetchFlag:false
        }
    },
    getters:{
        getProductList(state){
            return state.productList
        },
        getFetchFlag(state){
            return state.fetchFlag
        },
        getProductById:(state)=>(id:number)=>{
            return state.productList.filter(item=>item.id===id)[0]
        }
    },
    actions:{
       async setProductList(){
           this.fetchFlag=false
            try {
                const getProductRequest:IProduct[]=await $fetch('http://localhost:3000/api/products')
                this.productList=getProductRequest
            }catch (err) {
                console.log(err)
            }finally {
                this.fetchFlag=true
            }
        }
    }
})