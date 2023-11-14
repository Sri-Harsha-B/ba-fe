import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  displayedColumns: string[] = ['year', 'emissions'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
export interface Data {
  year: number;
  emissions: number;
}
const ELEMENT_DATA: Data[] = [
  { year: 2020, emissions: 34.81 },
  { year: 2019, emissions: 36.7 },
  { year: 2018, emissions: 36.65 },
  { year: 2017, emissions: 35.93 },
  { year: 2016, emissions: 34.81 },
];
