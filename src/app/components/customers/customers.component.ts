import { CustomerService } from './../../service/customer_service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/customers/customers';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  idCustomer: any

  displayedColumns: string[] = ['id', 'name', 'email', 'phone','document','created_at','idAddress','actions'];
  
  ELEMENT_DATA: Customer[] = []

  dataSource = new MatTableDataSource<Customer>(this.ELEMENT_DATA);


  constructor( private _service: CustomerService,
    //private _dialog: MatDialog,
    //private _toast: ToastrService,
   // private _router: Router,
    private _route: ActivatedRoute) {
}

  
  ngOnInit(): void {
    this.getCustomers()
    this.idCustomer = this._route.snapshot.paramMap.get("id");
  }
 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  getCustomers() {
    return this._service.getCustomers().subscribe({
        next: (response) => {
          this.ELEMENT_DATA = response
          this.dataSource = new MatTableDataSource<Customer>(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}


