import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureDisplayerComponent } from './figure-displayer.component';

describe('FigureDisplayerComponent', () => {
  let component: FigureDisplayerComponent;
  let fixture: ComponentFixture<FigureDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigureDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
