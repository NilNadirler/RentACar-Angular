import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/Services/car.service';
import { CarImageService } from 'src/app/Services/carImage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarImageComponent implements OnInit {
  currentImage: CarImage
  images:CarImage[]=[]
  car:CarDetailDto
  
  constructor( private carService:CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute ) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if(params["carId"]){
          this.getCarImages(params["carId"]);
          this.getCarDetails(params["carId"]);
        }
      });
    }
    getCarImages(carId:number){
         this.carImageService.getAllCarImages(carId).subscribe(response=>{
           this.images=response.data
           if(this.images.length>0)
            this.currentImage=this.images[0]
           //this.getImage()
         })
    }
    getCarDetails(carId:number){
      this.carService.getCarDetailsById(carId).subscribe((response)=>{
        this.car=response.data
      });
    }
    getCurrentImageClass(image:CarImage){
      if(image==this.currentImage){
        return "carousel-item active";
      }else{
        return "carousel-item";
      }
    }
}
  

 
  

