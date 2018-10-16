import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxColorSpinnerComponent } from './ngx-color-spinner.component';

describe('NgxColorSpinnerComponent', () => {
  let component: NgxColorSpinnerComponent;
  let fixture: ComponentFixture<NgxColorSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxColorSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxColorSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
