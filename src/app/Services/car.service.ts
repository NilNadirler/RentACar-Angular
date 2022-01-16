import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Observable } from 'rxjs';

import { CarDetailDto } from '../models/carDetailDto';
import { Params } from '@angular/router';
import { ResponseModel } from '../models/responseModel';
import { Car } from '../models/car';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
 
  apiUrl= "https://localhost:44394/api/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getdetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }

  getCarDetailsByFilter(filter:any):Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getdetails"
    
    var params=new HttpParams();
    Object.keys(filter).forEach((key:string)=>{
      if(filter[key]){
        params = params.append(key, filter[key]);
      }
    })
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath,{params:params})
  }
  
  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }
  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }
  getCarDetailsById(carId:number):Observable<SingleResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getbyid?id="+carId
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath)
  }
  add(car:Car):Observable<ResponseModel>{
   
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }
}
