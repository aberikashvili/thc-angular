import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionCentreComponent } from './distribution-centre.component';

describe('DistributionCentreComponent', () => {
  let component: DistributionCentreComponent;
  let fixture: ComponentFixture<DistributionCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributionCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
