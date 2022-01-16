import { Component, OnInit } from '@angular/core';

import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/Services/brand.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ColorService } from 'src/app/Services/color.service';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/Services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm:FormGroup;
 
  brands:Brand[]=[];
  colors:Color[]=[];

  constructor(private fromBuilder:FormBuilder,private brandService:BrandService,
    private colorService:ColorService, private activatedRoute:ActivatedRoute,private toastrService:ToastrService, private carService:CarService) { }

  ngOnInit(): void {
    this.createCarAddFrom();
    this.getBrands();
    this.getColors();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response =>{
    this.brands= response.data
   
  });
}
getColors(){
  this.colorService.getColors().subscribe(response =>{
  this.colors= response.data
 
});
}
  createCarAddFrom(){
     this.carAddForm=this.fromBuilder.group({
       brandId:["",Validators.required],
       colorId:["",Validators.required], 
       modelYear:["",Validators.required],
       dailyPrice:["",Validators.required]
     })
  }
  add(){

    if(this.carAddForm.valid){
     let carModel:Car= Object.assign({},this.carAddForm.value) 
     this.carService.add(carModel).subscribe(data=>{
      
       this.toastrService.success(data.message,"Added");
       
     }, responseError=>{
      if(responseError.error.Errors){
         responseError.error.Errors.forEach((error:any) => {
           this.toastrService.error(error.ErrorMessage,"Errors");
          });
          
      };
     })
    }
    else{
      this.toastrService.error("Something went wrong")
    }
}
}
