import { Customer } from '../models/customers/customers';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerRequest } from '../models/customers/customer_request';


@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }
  

  updateCustomer(customer: Customer, id:any): Observable<void> {
    return this._http.put<void>(`${API_CONFIG.baseURL}api/v1/customers/${id}`, customer)
  }

  getCustomers(): Observable<Customer[]> {
     return this._http.get<Customer[]>(`${API_CONFIG.baseURL}api/v1/customers`);
  }

  create(customers: CustomerRequest): Observable<Customer> {
    return this._http.post<Customer>(`${API_CONFIG.baseURL}api/v1/customers`, customers);
  }
  
  findById(id: any): Observable<Customer> {
    return this._http.get<Customer>(`${API_CONFIG.baseURL}api/v1/customers/${id}`)
  }

  deleteCustomer(id: any): Observable<void> {
    return this._http.delete<void>(`${API_CONFIG.baseURL}api/v1/customers/${id}`)
  }
}