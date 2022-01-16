import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl= "https://localhost:44394/api/";
  constructor(private httpClient:HttpClient) { }

  getAllCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)

  }
  getCarById(carId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getbyid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }
}
