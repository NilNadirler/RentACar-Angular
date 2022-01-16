import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/creditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl="https://localhost:44394/api/"

  constructor(private httpClient:HttpClient) { } 
  getAllCreditCards():Observable<ListResponseModel<CreditCard>>{
    let newPath=this.apiUrl+"creditcards/getall"
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath)
  }
  getCreditCardsByCustomerId(customerId:number):Observable<ListResponseModel<CreditCard>>{
    let newPath=this.apiUrl+"creditcards/getallbycustomerid?customerid"+customerId
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath)
  }
  add(creditCard:CreditCard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"creditcards/add",creditCard)
  }
}
