import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// mat header data
matData:any=[
  {name:'Grocery',src:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" }
]


  data:any;
  constructor(private http:ServiceService,private rout:Router,) {
    this.http.getProduct().subscribe(res => {     //to get data from the db.json to table
      this.data=res;
     console.log(this.data);
     
     
         })
         
         
   }
 
   serchKey=''
   matcounter:number=0
  ngOnInit(): void {
    this.http.getCard().subscribe((res) => {
      
      this.matcounter=res.length

    })

    this.http.searchKey.subscribe(res=>{
      this.serchKey=res
      console.log(this.serchKey);
      
    })
  }
  //add to cart
  
  product:any
  senttoJson(product:any)
  {
    this.http.postCard(product).subscribe(res=>{})
    this.matcounter++
    
  }
  //search method
  searchItem(event:any)
  {
    this.http.searchItemService(event.target.value)
    
  }
}
