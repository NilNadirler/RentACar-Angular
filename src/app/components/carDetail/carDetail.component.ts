import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDetailService } from 'src/app/Services/carDetail.service';


@Component({
  selector: 'app-carDetail',
  templateUrl: './carDetail.component.html',
  styleUrls: ['./carDetail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetailDto:CarDetailDto[]=[]
  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails()
  }
  
   getCarDetails(){
     this.carDetailService.getCarDetails().subscribe((response)=>{
       this.carDetailDto=response.data
     });
   }
}
