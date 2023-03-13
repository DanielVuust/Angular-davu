import { Component } from '@angular/core';
import { Rectangle } from 'src/app/classes/figures/rectangle';
import { Trapeze } from '../../classes/figures/trapeze';
import { IFigure } from '../../interfaces/i-figure';
import { Parallelogram } from '../../classes/figures/parallelogram';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css']
})
export class GeometryComponent {
  rectangle: IFigure = new Rectangle(200, 200);
  trapeze: IFigure = new Trapeze(100, 200, 100);
  parallelogram: IFigure = new Parallelogram(100, 200, 110);

}
