import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart  from 'chart.js/auto';
import { myHttpService } from 'src/app/service.service';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent implements OnInit, AfterViewInit {
  chartData: any;
  totalSubscribers!: number;
  totalRevenue!: number;
  averageRevenue: any;
  activeCount!: number;
  inactiveCount: any;

  constructor(private subscriberService: myHttpService) { 
   
  }

  ngOnInit(): void {
    this.subscriberService.getCustomerCountsByMonth().subscribe(
      (data) => {
        this.chartData = this.generateChartData(data);
        this.createBarChart();
      },
      (error) => {
        console.error('Error fetching customer counts: ', error);
      }
    );

    this.getSubscribersCount();
    this.getTotalRevenue();
    this.getAverageRevenue();

    this.subscriberService.getActiveCount().subscribe(count => {
      this.activeCount = count;
    });

    this.subscriberService.getInactiveCount().subscribe(count => {
      this.inactiveCount = count;
    });
  }

  ngAfterViewInit(): void {
    // Not needed for this example
  }

  getSubscribersCount() {
    this.subscriberService.getTotalSubscribers().subscribe(
      data => {
        this.totalSubscribers = data;
      },
      error => {
        console.error('Error fetching subscriber count:', error);
      }
    );
  }

  getAverageRevenue(): void {
    this.subscriberService.getAverageRevenue()
      .subscribe(data => this.averageRevenue = data);
  }

  getTotalRevenue() {
    this.subscriberService.getTotalRevenue()
      .subscribe(
        data => {
          this.totalRevenue = data;
        },
        error => {
          console.error('Error fetching total revenue: ', error);
        });
  }

  generateChartData(customerCounts: any) {
    const labels = Object.keys(customerCounts);
    // const labels =['jan','feb','mar','apr','may',]
    const activeData = labels.map(label => customerCounts[label].active);
    const inactiveData = labels.map(label => customerCounts[label].inactive);

    return {
      labels: labels,
      datasets: [
        {
          label: 'Active Customers',
          data: activeData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Inactive Customers',
          data: inactiveData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    };
  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    if (!ctx) {
      console.error('Canvas element not found.');
      return;
    }

    new Chart(ctx, {
      type: 'bar',
      data: this.chartData,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Active and Inactive Customers by Month'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
