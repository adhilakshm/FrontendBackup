import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { myHttpService } from 'src/app/service.service';
@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.scss']
})
export class LastFewTransactionsComponent implements OnInit, AfterViewInit {
  @ViewChild('lineChartCanvas', { static: true }) private lineChartCanvas!: ElementRef;
  lineChartLabels: string[] = [];
  lineChartData: number[] = [];
  data:any;

  constructor(private service: myHttpService) {
    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
    // Fetch the data from your service
    this.service.getData().subscribe((data: number[]) => {
      // Update lineChartData with the data from the service
      this.lineChartData = data;
      // Call createChart after updating data
      this.createChart();
    });
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // Moved createChart to the constructor to ensure data is available
  }

  createChart() {
    const ctx = this.lineChartCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.lineChartLabels,
        datasets: [
          {
            label: 'Monthly Data',
            data: this.lineChartData,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
            tension: 0.6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Based Customers',
          },
        },
      },
    });
  }
}
