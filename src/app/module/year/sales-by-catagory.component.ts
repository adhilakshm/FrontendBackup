import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sales-by-catagory',
  templateUrl: './sales-by-catagory.component.html',
  styleUrls: ['./sales-by-catagory.component.scss']
})
export class SalesByCatagoryComponent implements OnInit {
  chartOptions: any;

  constructor(private http: HttpClient) {
   
  }

  ngOnInit(): void {
    this.fetchChartData();
  }

  fetchChartData() {
    this.http.get<any>('http://localhost:9999/analytics').subscribe(
      data => {
        const transformedData = Object.keys(data).map(year => ({ x: new Date(+year, 0), y: data[year] }));

        this.chartOptions = {
          backgroundColor: 'rgba(42, 42, 82, 0.2)',
          title: {
            text: 'Year Based Customers',
            fontColor: '#545353',
            fontSize: 11,
            fontStyle: 'Arial'
          },
          axisY: {
            title: 'Customers',
            fontColor: '#545353',
            labelFontColor: '#545353',
            lineColor: 'rgba(0,0,0,0.1)', // Set y-axis line color to black
            gridColor: 'rgba(0,0,0,0.1)' // Set grid color for y-axis to black
          },
          axisX: {
            title: 'Year',
            fontColor: '#545353',
            labelFontColor: '#545353',
            lineColor: 'black', // Set x-axis line color to black
            gridColor: 'black' // Set grid color for x-axis to black
          },
          data: [
            {
              type: 'splineArea',
              color: 'rgba(62, 136, 91, 0.5)',
               // Set the line color inside the area graph to black
              xValueFormatString: 'YYYY',
              dataPoints: transformedData
            }
          ]
        };
      },
      error => {
        console.error('Error fetching chart data:', error);
      }
    );
  }
}
