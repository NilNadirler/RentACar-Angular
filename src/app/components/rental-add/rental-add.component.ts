import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/Services/rental.service';
import { FormGroup,FormBuilder,FormControl,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  rentalAddForm:FormGroup;

    constructor(private rentalService:RentalService, private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute, private toastrService:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.createRentalAddForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.rentalAddForm.get("carId")?.patchValue(params["carId"]);
      }
    });

  }
   createRentalAddForm(){

      this.rentalAddForm=this.formBuilder.group({
      returnDate:["",Validators.required],
      rentDate:["",Validators.required],
      carId:["",Validators.required]

      })
   }
  add(){

       if(this.rentalAddForm.valid){
        let rentalModel:Rental= Object.assign({},this.rentalAddForm.value) 
        this.rentalService.add(rentalModel).subscribe(data=>{
          this.toastrService.success(data.message,"Added");
          this.router.navigate(['/creditcards']);
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
