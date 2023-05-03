import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhowearepageComponent } from './whowearepage.component';

describe('WhowearepageComponent', () => {
  let component: WhowearepageComponent;
  let fixture: ComponentFixture<WhowearepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhowearepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhowearepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
