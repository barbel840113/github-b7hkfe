import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-textfield',
  templateUrl: './single-textfield.component.html',
  styleUrls: ['./single-textfield.component.scss']
})
export class SingleTextfieldComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  
  constructor() { }

  ngOnInit() {
  }

}
