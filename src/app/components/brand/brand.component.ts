import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { BrandService } from 'src/app/Services/brand.service';
import { RentalService } from 'src/app/Services/rental.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
   
  brands:Brand[]=[]
  constructor(private brandServices:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }
   
  getBrands(){
     this.brandServices.getBrands().subscribe(response=>{
       this.brands=response.data
     })
  }
}
