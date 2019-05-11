import { Component, OnInit } from '@angular/core';
import { tabs} from '../../../configuration/tab-configuration';

@Component({
  selector: 'app-layout-form',
  templateUrl: './layout-form.component.html',
  styleUrls: ['./layout-form.component.scss']
})
export class LayoutFormComponent implements OnInit {
 tabs = [];
  constructor() {
      this.tabs = tabs["tabs"];
   }

 
  ngOnInit() {
  }

}
