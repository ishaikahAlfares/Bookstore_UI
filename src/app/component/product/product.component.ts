import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import{CartService} from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  book1 = 'https://images.thenile.io/r1000/9781783190614.jpg'
  book2='https://www.bookstation.ie/wp-content/uploads/2021/06/Better-Off-Dead.jpeg'
  book3='https://images-na.ssl-images-amazon.com/images/I/91eloBmxd0L.jpg'
  book4="https://cdn11.bigcommerce.com/s-5b0svc/images/stencil/1280x1280/products/3256/3491/invisible-man-gordon-parks-and-ralph-ellison-in-harlem-at-art-institute-of-chicago-1__73595.1478587218.jpg?c=2"
  price=60;
public productList: any;
  constructor(private api: ApiService, private cartService: CartService ) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList =res;
     
      this.productList.forEach((a : any ) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addToCart(item:any){
    this.cartService.addToCart(item);
  }

}
function a(a: any, any: any) {
  throw new Error('Function not implemented.');
}

