import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient,private route:Router) {
   
   }

  getProduct()
  {
    return this.http.get<any>('http://localhost:3000/product');
  }
  //add to cart
  postCard(product:any)
  {
    return this.http.post<any>('http://localhost:3000/cart/',product)
  }
  getCard()
  {
    return this.http.get<any>('http://localhost:3000/cart')
  }
  remove(id:any)
  {
   return this.http.delete('http://localhost:3000/cart/'+id)
  }

 
  deleteall(i:any)
  { 
   return this.http.delete('http://localhost:3000/cart/'+i)  
    
     
  }

  // plus minus
  updateCartData(i:any)
  {
    return this.http.put(`http://localhost:3000/cart/${i.id}`,i)
  }
//search item
public searchKey=new Subject<any>()
searchItemService(event:any)
{
 return this.searchKey.next(event)
}

  
 
}
