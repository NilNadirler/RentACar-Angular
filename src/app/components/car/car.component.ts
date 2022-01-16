import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/Services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  dataLoaded:boolean=false
  loadData:boolean=false
  carDetailDto:CarDetailDto[]=[]
  filterText:""
  brandFilter:""
  colorFilter:""
  brandId: number = 0;
  colorId: number = 0;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,
  ) { }
    
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params.brandId||params.colorId){
        this.loadData=true;
        this.getCarDetailsByFilter(params);
      }
    });
    if(!this.loadData)
     this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarDetailsByColor(params["colorId"])
      }
       else{
         this.getCarDetails();
       }
     })
  }
  
  getCarDetails(){
    this.carService.getCarDetails().subscribe((response)=>{
      this.carDetailDto=response.data
      this.dataLoaded=response.success;
    });
  }
  getCarDetailsByFilter(filter:any){
    this.carService.getCarDetailsByFilter(filter).subscribe((response)=>{
      this.carDetailDto=response.data
      this.dataLoaded=response.success;
    });
  }
   getCarDetailsByBrand(brandId:number){
    this.carService.getCarDetailsByBrand(brandId).subscribe((response)=>{
      this.carDetailDto=response.data
      this.dataLoaded=response.success;
    });
  }
  getCarDetailsByColor(ColorId:number){
    this.carService.getCarDetailsByColor(ColorId).subscribe((response)=>{
      this.carDetailDto=response.data
      this.dataLoaded=response.success;
    });
  }
  getDistinctByBrandName(){    
    return [...new Map(this.carDetailDto.map((item:CarDetailDto) =>
        [item.brandName, item])).values()];
  }
  getDistinctByColorName(){    
    return [...new Map(this.carDetailDto.map((item:CarDetailDto) =>
        [item.colorName, item])).values()];
  }
  
}


