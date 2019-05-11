import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss']
})
export class DatetimepickerComponent implements OnInit {

  startDate = new Date(1990, 0, 1);
  constructor() { }

  ngOnInit() {
  }

}
