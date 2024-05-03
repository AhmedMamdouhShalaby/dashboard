import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [3, 4, 10, 8, 9, 1, 7]
      } as any
    ]
  })

  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        }
      }
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'programming',
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'frontEnd', y: 1, color: '#eeeeee' },
          { name: 'backEnd', y: 2, color: '#393e46' },
          { name: 'fullstack', y: 3, color: '#00adb5' },
          { name: 'flutter', y: 4, color: '#eeeeee' },
          { name: 'androied', y: 5, color: '#506ef9' },
        ]
      }
    ]
  })
}
