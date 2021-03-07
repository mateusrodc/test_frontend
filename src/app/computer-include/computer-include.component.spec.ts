import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerIncludeComponent } from './computer-include.component';

describe('ComputerIncludeComponent', () => {
  let component: ComputerIncludeComponent;
  let fixture: ComponentFixture<ComputerIncludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerIncludeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
