 import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-student-detalis',
  templateUrl: './student-detalis.component.html',
  styleUrls: ['./student-detalis.component.css']
})
export class StudentDetalisComponent implements OnInit{
 
  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort)sort!: MatSort;

  total_count:number =0;
   
  displayedColumns: string[] = ['sn', 'std_name', 'std_roll', 'std_address','std_mobilr','std_action',]; 
  dataSource = new MatTableDataSource();
  constructor(
    private api :ApiService
  ){}
   ngOnInit(): void{
      this.api.get_student().subscribe(
        (res:any) =>{
          // console.log(res);
          this.dataSource.data = res.data; 
          this.total_count = res.data.length;
         }
      )
   }  

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
