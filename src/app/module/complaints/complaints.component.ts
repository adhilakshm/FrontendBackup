import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  customers: any[] = [];
  dtoptions: DataTables.Settings = {};

  constructor(private http: HttpClient) { 
    
  }
  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      lengthChange: false,
      language: {
        searchPlaceholder: 'Search Here',
      },
    };

    this.OnSubmit(); // Call the onSubmit method during initialization
  }

  OnSubmit(): void {
    this.http.get<any[]>('http://localhost:9999/comp').subscribe(
      (response) => {
        this.customers = response;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching customer data: ', error);
      }
    );
  }
}
