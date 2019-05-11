import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTextfieldComponent } from './single-textfield.component';

describe('SingleTextfieldComponent', () => {
  let component: SingleTextfieldComponent;
  let fixture: ComponentFixture<SingleTextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTextfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
