import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFromComponent } from './registration-from/registration-from.component';

const routes: Routes = [
  {path:'registration_from',component:RegistrationFromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
