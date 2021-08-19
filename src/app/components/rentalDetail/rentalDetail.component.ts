import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalDetailService } from 'src/app/Services/rentalDetail.service';

@Component({
  selector: 'app-rentalDetail',
  templateUrl: './rentalDetail.component.html',
  styleUrls: ['./rentalDetail.component.css']
})
export class RantalDetailComponent implements OnInit {
  
  rentalDetailDto:RentalDetailDto[]=[];
  constructor(private rentalDetailService:RentalDetailService) { }

  ngOnInit(): void {
    this.getRentalDetails()
  }
   
  getRentalDetails(){
    this.rentalDetailService.getRentalDetails().subscribe(response=>{
     this.rentalDetailDto=response.data
    })
  }
}
