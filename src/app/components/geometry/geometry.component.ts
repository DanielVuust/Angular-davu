import { Component } from '@angular/core';
import { Square } from 'src/app/classes/square';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css']
})
export class GeometryComponent {
square: Square = new Square(200, 200);
constructor() {
  console.log(this.square);
}
}
