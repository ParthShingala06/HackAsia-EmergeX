import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcertComponent } from './medcert.component';

describe('MedcertComponent', () => {
  let component: MedcertComponent;
  let fixture: ComponentFixture<MedcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
