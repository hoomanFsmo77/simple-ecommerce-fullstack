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
    const cartLength=computed(()=>cartStore.getCartLength)
    const cartList=computed(()=>cartStore.getCartList)
    const totalPrice=computed(()=>cartStore.getTotalPrice)

    return{
        cartStore,cartLength,cartList,totalPrice
    }
}