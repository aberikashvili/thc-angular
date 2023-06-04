import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionwhoweareComponent } from './sectionwhoweare.component';

describe('SectionwhoweareComponent', () => {
  let component: SectionwhoweareComponent;
  let fixture: ComponentFixture<SectionwhoweareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionwhoweareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionwhoweareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
