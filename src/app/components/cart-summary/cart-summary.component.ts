import { ToastrService } from 'ngx-toastr';
import { Product } from './../../models/product';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  
  constructor(private cartService:CartService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list()
  }

  removeFromCart(prodcut:Product){
    this.cartService.removeFromCart(prodcut);
    this.toastrService.error("Sepetten Silindi." ,prodcut.productName)
  }

}
