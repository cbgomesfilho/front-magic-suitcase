import { AddressRequest } from './../../../models/customers/address_request';
import { CustomerRequest } from './../../../models/customers/customer_request';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customers/customers';
import { CustomerService } from 'src/app/service/customer_service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {



  customer: CustomerRequest = {
    name:'',
    email:'',
    document:'',
    phone:'',
    address: {
      city: '',
      complement:'',
      neighborhood:'',
      number: '',
      public_place:'',
      state:'',
      zip_code:'',
    }
  }

  customerForm: FormGroup;
  hide = true;

  name: FormControl = new FormControl(null, Validators.minLength(5));
  email: FormControl = new FormControl(null, Validators.email);
  document: FormControl = new FormControl(null, Validators.minLength(11));
  phone: FormControl = new FormControl(null, Validators.minLength(11));
  city: FormControl = new FormControl(null, Validators.minLength(50));
  complement:FormControl = new FormControl(null, Validators.minLength(150));
  neighborhood: FormControl = new FormControl(null, Validators.minLength(150));
  number: FormControl = new FormControl(null, Validators.minLength(5));
  public_place: FormControl = new FormControl(null, Validators.minLength(150)); 
  state: FormControl = new FormControl(null, Validators.minLength(2));
  zip_code: FormControl = new FormControl(null, Validators.minLength(20));


  constructor(private _service: CustomerService,
              //private _toast: ToastrService,
              private _router: Router){}


  validateFormClient(): boolean {
    return this.name.valid &&
           this.email.valid && this.document.valid
          this.phone.valid && this.customer.address.city &&
          this.complement &&
          this.neighborhood &&
          this.number &&
          this.public_place &&
           this.state.valid
          this.zip_code
  }

  createClient(): void{
    this._service.create(this.customer).subscribe(() => {
      //this._toast.success('Client created with success', 'Created')
      this._router.navigate(["customers"])
    },ex => {
      //this._toast.error(ex.error.details.message);
    })
    
  }

  ngOnInit(): void {
    
   }
}
