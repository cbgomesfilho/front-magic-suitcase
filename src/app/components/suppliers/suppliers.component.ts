import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customers/customers';
import { Supplier } from 'src/app/models/suppliers/supplier';
import { SupplierService } from 'src/app/service/supplier_service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  idSupplier: any

  displayedColumns: string[] = ['id', 'name', 'email', 'phone','document','created_at','idAddress','actions'];
  
  ELEMENT_DATA: Supplier[] = []

  dataSource = new MatTableDataSource<Supplier>(this.ELEMENT_DATA);


  constructor( private _service: SupplierService,
    //private _dialog: MatDialog,
    //private _toast: ToastrService,
   // private _router: Router,
    private _route: ActivatedRoute) {
}

  
  ngOnInit(): void {
    this.getCustomers()
    this.idSupplier = this._route.snapshot.paramMap.get("id");
  }
 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  getCustomers() {
    return this._service.getSupplier().subscribe({
        next: (response) => {
          this.ELEMENT_DATA = response
          this.dataSource = new MatTableDataSource<Supplier>(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}
