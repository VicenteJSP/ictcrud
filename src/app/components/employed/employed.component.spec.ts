import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedComponent } from './employed.component';

describe('EmployedComponent', () => {
  let component: EmployedComponent;
  let fixture: ComponentFixture<EmployedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
