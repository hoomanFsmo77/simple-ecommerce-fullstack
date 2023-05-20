import {Product} from "~/store/product";
import {Cart} from "~/store/cart";
import {IProduct} from "~/utils/Types";

export const useProductStore=()=>{
    const productStore=Product()
    const productList=computed<IProduct[]>(()=>productStore.getProductList)
    const productFetchFlag=computed<boolean>(()=>productStore.getFetchFlag)


    return{
        productList,productStore,productFetchFlag
    }
}

export const useCartStore=()=>{
    const cartStore=Cart()




    return{
        cartStore
    }
}