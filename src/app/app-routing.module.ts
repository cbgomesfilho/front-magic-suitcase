import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { UpdateCustomerComponent } from './components/customers/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/customers/delete-customer/delete-customer.component';
import { CreateCustomerComponent } from './components/customers/create-customer/create-customer.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';

const routes: Routes = [
  {path: '', component: NavComponent, children: [
    {path:'home', component: HomeComponent},
      {path:'customers', component: CustomersComponent},
      {path:'customers/update/:id', component: UpdateCustomerComponent},
      {path:'customers/delete/:id', component: DeleteCustomerComponent},
      {path:'customers/create', component: CreateCustomerComponent},

      {path:'suppliers', component: SuppliersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
