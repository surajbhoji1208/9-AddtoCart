import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  price: number = 0;
  data: any;

  constructor(private http: ServiceService,private router:Router) {
this.getdata()
  }
  getdata()
  { this.http.getCard().subscribe((res) => {
    this.data = res;

    for (let i of res) {
      this.price = this.price + i.totalPrice;
    }
    // console.table(res);
   
    console.log(this.price);
  });

  }

  ngOnInit(): void {}
  //delet from cart
  remove(id: any) {
    this.http.remove(id).subscribe((res) => {
      this.getdata()
    });
   
  }
  
  delete(i:any)
  {
    
      for(let j=0;j<i.length;j++)
      {
        this.http.deleteall(i[j].id).subscribe(res=>{
         
      this.getdata()     
       
         
        })
      
       
      }
    
  }

                // function for button add and minus
  plus(data: any) {
    data.quantity++;
    data.totalPrice = data.quantity * data.price;
    this.http.updateCartData(data).subscribe((res) => {
      this.price = this.price + data.price;
    });

   
  }
  minus(data: any) {
    if (data.quantity > 1) data.quantity--;
    data.totalPrice = data.quantity * data.price;
    this.http.updateCartData(data).subscribe((res) => {
      if (data.price>0) {
        this.price = this.price -data.price;
      }
      
   
     });

   
  }

                  //   function for button add and minus
//routing to home
goHome()
{
  this.router.navigate(['/home'])
  console.log("home");
  
}
                 
}
