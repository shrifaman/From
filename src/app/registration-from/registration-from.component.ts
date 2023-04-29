import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-registration-from',
  templateUrl: './registration-from.component.html',
  styleUrls: ['./registration-from.component.css']
})
export class RegistrationFromComponent implements OnInit{

  sid:number = 0
    constructor(
      private fb :FormBuilder,
      private api: ApiService,
      private router : Router,
      private url :ActivatedRoute 
    ){}

    ngOnInit(): void {
      this.sid=this.url.snapshot.params['id'];
      if (this.sid){
        this.api.get_single_student(this.sid).subscribe(
          (res:any)=>{
            console.log(res.data)
            this.add_std.patchValue(res.data)
          }
        )
      }
    }

   add_std = this.fb.group({
    std_id :[''],  
    std_name :['',Validators.required],
    std_roll :['',Validators.required],
    std_address :['',Validators.required],
    std_mobilr :['',Validators.required]
   })
    
    onSave(){
      // console.log(this.add_std.value);
      this.api.post_std(this.add_std.value).subscribe(
        (res:any)=>{
          this.add_std.reset();
          this.router.navigate(['/std_detalis']);
          console.log(res )
        }
      )
    }
    updateStd(){
      console.log(this.add_std.value)
      // this.api.put_sdt(this.add_std.value).subscribe((res:any)=>{
      //   console.log(res.data)
      // })
    }

    reset(){ 
      this.add_std.reset(); 
    }
}
