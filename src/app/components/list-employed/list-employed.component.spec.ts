import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployedComponent } from './list-employed.component';

describe('ListEmployedComponent', () => {
  let component: ListEmployedComponent;
  let fixture: ComponentFixture<ListEmployedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
