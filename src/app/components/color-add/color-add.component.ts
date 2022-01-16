import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/Services/color.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  constructor(private fromBuilder:FormBuilder,private colorService:ColorService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }

    colorAddForm:FormGroup;
    colors:Color[]=[];

  ngOnInit(): void {
    this.createColorAddFrom()
  }
  createColorAddFrom(){
    this.colorAddForm=this.fromBuilder.group({
      colorName:["",Validators.required],
    })
 }
 add(){

  if(this.colorAddForm.valid){
   let colorModel:Color= Object.assign({},this.colorAddForm.value) 
   this.colorService.add(colorModel).subscribe(data=>{
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
