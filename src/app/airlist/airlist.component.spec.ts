import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlistComponent } from './airlist.component';

describe('AirlistComponent', () => {
  let component: AirlistComponent;
  let fixture: ComponentFixture<AirlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
