import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundametotTsComponent } from './fundametot-ts.component';

describe('FundametotTsComponent', () => {
  let component: FundametotTsComponent;
  let fixture: ComponentFixture<FundametotTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundametotTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundametotTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
