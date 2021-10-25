import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItem: any=[]
  public productList =  new BehaviorSubject<any>([]);
  constructor() { }
    getProudcts(){
return  this.productList.asObservable();

    }
    setProudcts(product: any){
      this.cartItem.push(...product);
    this.productList.next(product);
    }
addToCart(product:any){
  this.cartItem.push(product);
  this.productList.next(this.cartItem);
  this.getTotalPrice();
  console.log(this.cartItem);
  
}
getTotalPrice(){
let grandTotal=0;
this.cartItem.map((a:any)=>{
grandTotal+=a.total;
})
}
removeCardItem(product:any){
  this.cartItem.map((a:any, index:any)=>{
    if(product.id===a.id){
      this.cartItem.splice(index,1);
    }
  })
}
removeAllCart(){
  this.cartItem=[]
  this.productList.next(this.cartItem);
}
}
