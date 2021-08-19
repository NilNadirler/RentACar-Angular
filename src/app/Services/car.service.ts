import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44394/api/cars/getall"
  constructor(private HttpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
    return this.HttpClient.get<ListResponseModel<Car>>(this.apiUrl)
    
    }
}