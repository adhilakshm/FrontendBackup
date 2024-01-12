import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class TimingComponent implements AfterViewInit {
  private apiUrl = 'http://localhost:9999/counts';
  

  constructor(private http: HttpClient) {
   
  }

  ngAfterViewInit(): void {
    this.http.get<number[]>(this.apiUrl).subscribe(counts => {
      console.log('Counts from API:', counts);
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['On Date', 'Prior', 'Delay','Not Paid'],
            datasets: [{
              label: '# of Votes',
              data: counts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            cutout: '75%',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              title: {
                display: true,
                text: 'Time of Payment'
              }
            }
            
          }
        });
      }
    });
  }
}
