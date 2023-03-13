import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidekammeratDescriptionComponent } from './sidekammerat-description.component';

describe('SidekammeratDescriptionComponent', () => {
  let component: SidekammeratDescriptionComponent;
  let fixture: ComponentFixture<SidekammeratDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidekammeratDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidekammeratDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
