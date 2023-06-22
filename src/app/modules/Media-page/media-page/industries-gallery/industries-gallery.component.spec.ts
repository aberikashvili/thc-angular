import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesGalleryComponent } from './industries-gallery.component';

describe('IndustriesGalleryComponent', () => {
  let component: IndustriesGalleryComponent;
  let fixture: ComponentFixture<IndustriesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriesGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
