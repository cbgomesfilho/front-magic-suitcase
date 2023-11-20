import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../models/suppliers/supplier';
import { SupplierRequest } from '../models/suppliers/supplier_request';


@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private _http: HttpClient) { }
  

  updateSupplier(supplier: Supplier, id:any): Observable<void> {
    return this._http.put<void>(`${API_CONFIG.baseURL}api/v1/suppliers/${id}`, supplier)
  }

  getSupplier(): Observable<Supplier[]> {
     return this._http.get<Supplier[]>(`${API_CONFIG.baseURL}api/v1/suppliers`);
  }

  createSupplier(suppliers: SupplierRequest): Observable<Supplier> {
    return this._http.post<Supplier>(`${API_CONFIG.baseURL}api/v1/suppliers`, suppliers);
  }
  
  findById(id: any): Observable<Supplier> {
    return this._http.get<Supplier>(`${API_CONFIG.baseURL}api/v1/suppliers/${id}`)
  }

  deleteSupplier(id: any): Observable<void> {
    return this._http.delete<void>(`${API_CONFIG.baseURL}api/v1/suppliers/${id}`)
  }
}