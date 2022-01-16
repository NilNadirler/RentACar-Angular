import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  constructor(private fromBuilder:FormBuilder,private brandService:BrandService,
  
    private toastrService:ToastrService) { }

    brandAddForm:FormGroup;
    brands:Brand[]=[];

  ngOnInit(): void {
    this.createBrandAddFrom()
  }
  createBrandAddFrom(){
    this.brandAddForm=this.fromBuilder.group({
      brandName:["",Validators.required],
    })
 }
 add(){

  if(this.brandAddForm.valid){
   let brandModel:Brand= Object.assign({},this.brandAddForm.value) 
   this.brandService.add(brandModel).subscribe(data=>{
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
