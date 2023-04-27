import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-from',
  templateUrl: './registration-from.component.html',
  styleUrls: ['./registration-from.component.css']
})
export class RegistrationFromComponent {
    constructor(
      private fb :FormBuilder,
      private api: ApiService,
      private router : Router
    ){}

   add_std = this.fb.group({
    std_name :['',Validators.required],
    std_roll :['',Validators.required],
    std_address :['',Validators.required],
    std_mobilr :['',Validators.required]
   })

  

    onSave(){
      console.log(this.add_std.value);
      this.api.post_std(this.add_std.value).subscribe(
        (res:any)=>{
          this.add_std.reset();
          this.router.navigate(['/std_detalis']);
          console.log(res )
        }
      )
    }

    reset(){
      this.add_std.reset(); 
    }
}
