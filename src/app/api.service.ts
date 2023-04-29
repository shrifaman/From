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
  get_single_student( sid:any){
      return this.http.get(this.baseUrl+'new_view.php?std_id='+ sid) 
  }
  post_std(data:any){
    return this.http.post(this.baseUrl+ 'new_insert.php',data);
  }
  put_sdt(data:any){
    return this.http.put(this.baseUrl+'update.php',data)
  }
}
 