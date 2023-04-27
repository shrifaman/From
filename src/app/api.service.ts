import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseUrl ='http://localhost/api/';

  constructor(
    private http:HttpClient
  ) { }
  get_student(){
    return this.http.get(this.baseUrl+'new_view.php ');
  }
  post_std(data:any){
    return this.http.post(this.baseUrl+ 'new_insert.php',data);
  }
}
 