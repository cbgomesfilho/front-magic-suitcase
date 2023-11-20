import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customers/customers';
import { CustomerService } from 'src/app/service/customer_service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  idCustomer: any 

  customer: Customer = {
    id:'',
    name:'',
    email:'',
    document:'',
    phone:'',
    created_at:'',
    idAddress: ''
  }

  clientForm: FormGroup;
  hide = true;

  name: FormControl = new FormControl(null, Validators.minLength(5));
  email: FormControl = new FormControl(null, Validators.email);
  document: FormControl = new FormControl(null, Validators.minLength(11));
  phone: FormControl = new FormControl(null, Validators.minLength(11));

  constructor(private _service: CustomerService,
              //private _toast: ToastrService,
              private _router: Router,
              private _route: ActivatedRoute){}
  ngOnInit(): void {
    this.idCustomer = this._route.snapshot.paramMap.get("id");
    this.getCustomerById();
  }

  validateFormClient(): boolean {
    return this.name.valid &&
           this.email.valid && this.document.valid &&
          this.phone.valid;
  }

  getCustomerById(): void {
    this._service.findById(this.idCustomer).subscribe(response => {
      this.customer = response;
      console.log(response)
    })
  }

  updateClient(): void{
    this._service.updateCustomer(this.customer, this.idCustomer).subscribe(() => {
      //this._toast.success('Client updated with success', 'Update')
      this._router.navigate(["customers"])
    },ex => {
      //this._toast.error(ex.error.details.message);
    })
    
  }

}
