
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class myHttpService {
  
  //   return this.http.get<number>(`${this.baseUrl}/getDeletedColumnsCount`);
  // }
  getNew() {
    throw new Error('Method not implemented.');
  }
 
  // }
  getCustomerCounts() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:9999';


  constructor(private http: HttpClient) {
   
   }

  login(credentials: any): Observable<any> {
    return this.http.post('${this.baseUrl}login', credentials);
  }
  updatePassword(userId: number, newPasswordObj: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatePassword/${userId}`, newPasswordObj);
  }
  getTotalSubscribers(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/getTotalSubscribers`);
  }
  // getDeletedColumnsCount(): Observable<number> {
  //   return this.http.get<number>(`${this.baseUrl}/getDeletedColumnsCount`);
  // }
  getTotalRevenue(): Observable<number> {
    const url = `${this.baseUrl}/getTotalRevenue`;
    return this.http.get<number>(url);
  }
  getAverageRevenue(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/calculateAverageBill`);
  }
  getActiveCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/getActiveCount`);
  }

  getInactiveCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/getInactiveCount`);
  }
  getChartData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getProductLocations`);
  }
  getchartData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getChartData`);
  }
  getCustomerCountsByMonth(): Observable<any> {
    return this.http.get(`${this.baseUrl}/countsByMonth`);
  }
  getData(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/getBillOccurrencesByMonth `); // Modify this to fetch your data from the API
  }
  getCustomerCountByYear(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/analytics`);
  }
  getPlantData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/plans`);
}

}
