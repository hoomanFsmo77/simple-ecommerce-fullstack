
export interface IProduct {
    id:number,
    name:string
    description:string,
    price:number
    available:number
    image:string
}
export interface  ICart extends IProduct{
    count:number
}