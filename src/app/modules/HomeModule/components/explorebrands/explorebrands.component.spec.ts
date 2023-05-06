import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorebrandsComponent } from './explorebrands.component';

describe('ExplorebrandsComponent', () => {
  let component: ExplorebrandsComponent;
  let fixture: ComponentFixture<ExplorebrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorebrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorebrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
