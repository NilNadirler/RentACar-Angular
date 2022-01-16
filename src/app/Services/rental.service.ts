import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rentalDetailDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl= "https://localhost:44394/api/"
  constructor(private httpClient:HttpClient) { }
  
  
  getRentals():Observable<ListResponseModel<RentalDetailDto>>{
    let newPath=this.apiUrl+"rentals/getdetails"
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath)
  }
  
  add(rental:Rental):Observable<ResponseModel>{
   
    return this.httpClient.post<ResponseModel>(this.apiUrl+"rentals/add",rental)
  }
  getRentalByCarId(carId:number):Observable<ListResponseModel<RentalDetailDto>>{
    let newPath=this.apiUrl+"rentals/getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }

}
