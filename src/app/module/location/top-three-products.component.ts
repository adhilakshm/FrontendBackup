import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { myHttpService } from 'src/app/service.service';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent implements OnInit, AfterViewInit {
  public chart: any;
  private labels: string[] = [];
  private counts: number[] = [];

  constructor(private yourService: myHttpService) { }

  ngOnInit(): void {
    // Fetch chart data on component initialization
    this.yourService.getChartData().subscribe(
      data => {
        this.labels = data.map(item => item[0]);
        this.counts = data.map(item => item[1]);
        this.createChart();
      },
      error => {
        console.error('Error fetching chart data:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    if (!this.labels.length || !this.counts.length) {
      console.error('No chart data available.');
      return;
    }

    const canvas = document.getElementById('MyChart') as HTMLCanvasElement;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Adjust the background colors to add a little darkness
        const backgroundColors = [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ]
        const borderColor=[
            
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ]
              
        

        this.chart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: this.labels,
            datasets: [{
              label: 'Location Based Plan',
              data: this.counts,
              backgroundColor: backgroundColors,
              borderColor:borderColor,
              borderWidth:1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Location Based Plan'
              },
            },
          }
        });
      } else {
        console.error('Could not retrieve 2D context for the canvas.');
      }
    } else {
      console.error('Could not find canvas element with ID "MyChart"');
    }
  }
}
