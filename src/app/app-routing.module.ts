import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFromComponent } from './registration-from/registration-from.component';
import { StudentDetalisComponent } from './student-detalis/student-detalis.component';

const routes: Routes = [
  {path:'',redirectTo:'std_detalis',pathMatch:"full"},
  {path:'std_detalis',component:StudentDetalisComponent},
  {path:'registration_from',component:RegistrationFromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
