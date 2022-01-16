import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brandId: number = 0;
  brands:Brand[]=[];
  currentBrand:Brand;
  constructor(private brandServices:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }
   
  getBrands(){
     this.brandServices.getBrands().subscribe(response=>{
       this.brands=response.data
     })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;

  }
  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      this.brandId=brand.brandId;
      return "list-group-item list-group-item-action list-group-item-light active"
    }
    else return "list-group-item list-group-item-action list-group-item-light"
  }
  getAllBrandClass(){
    if(!this.currentBrand){
       return  "list-group-item list-group-item-action list-group-item-light active"
    }
    else{
      return "list-group-item list-group-item-action list-group-item-light"
    }
  }
 
}
