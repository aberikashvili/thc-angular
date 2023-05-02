import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributioncenterComponent } from './distributioncenter.component';

describe('DistributioncenterComponent', () => {
  let component: DistributioncenterComponent;
  let fixture: ComponentFixture<DistributioncenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributioncenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributioncenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
