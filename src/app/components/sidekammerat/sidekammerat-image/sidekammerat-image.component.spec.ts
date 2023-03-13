import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidekammeratImageComponent } from './sidekammerat-image.component';

describe('SidekammeratImageComponent', () => {
  let component: SidekammeratImageComponent;
  let fixture: ComponentFixture<SidekammeratImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidekammeratImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidekammeratImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
