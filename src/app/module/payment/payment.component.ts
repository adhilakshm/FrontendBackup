import { Component, OnDestroy } from '@angular/core';
import { Chart, ChartData } from 'chart.js';
import { myHttpService } from 'src/app/service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnDestroy {
  chart!: Chart;
  chartData: ChartData = {
    labels: [],
    datasets: [{
      label: 'Occurrence',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  private subscription!: Subscription;

  constructor(private myHttpService: myHttpService) {  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createChart() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas context is null.');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: this.chartData,
      options: {
        backgroundColor: 'rgba(42, 42, 82, 0.2)',
        plugins: {
          title: {
            display: true,
            text: 'Mode of Payment',
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Payment Method'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Occurrence'
            }
          }
        }
      }
    });
  }

  ngAfterViewInit() {
    this.subscription = this.myHttpService.getPlantData().subscribe((data: any[]) => {
      this.chartData.labels = data.map(item => item[0]);  // Plan type
      this.chartData.datasets[0].data = data.map(item => item[1]);  // Occurrence count

      // Update the chart
      if (this.chart) {
        this.chart.destroy();  // Destroy the previous chart before creating a new one
      }

      this.createChart();
    });
  }
}
