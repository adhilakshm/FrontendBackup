import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',

})
export class CustomerdetailsComponent implements OnInit {
  customers: any[] = [];
  dtoptions: DataTables.Settings = {};

  constructor(private http: HttpClient) {
    setTimeout(()=>{

      location.reload();

    },10000);
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

    this.onSubmit(); // Call the onSubmit method during initialization
  }

  onSubmit() {
    this.http.get<any[]>('http://localhost:9999/getCustomers').subscribe(
      (response) => {
        this.customers = response;
      },
      (error) => {
        console.error('Error fetching customer data: ', error);
      }
    );
  }
}
