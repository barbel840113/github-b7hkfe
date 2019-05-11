import { Component, OnInit } from '@angular/core';
import { FormService } from '../../applicationcore/services/form.service';
import { Form } from '../../applicationcore/interfaces/Form';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  forms: Form[];
  
  constructor(private formService : FormService) { }

  ngOnInit() {
    this.getForms();
  }

  getForms() :void{
    this.formService.getForms().subscribe(forms => {
      this.forms = forms;    
    });
  }

}
