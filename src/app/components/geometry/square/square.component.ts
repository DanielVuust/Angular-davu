import { Component, Input } from '@angular/core';
import { Square } from 'src/app/classes/square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {    
  @Input() square!: Square;
  squareCss = {};

  ngOnInit() {
    this.square = this.square;
    this.squareCss ={
      'background-color':'red',
      'width': this.square.width +'px',
      'height': this.square.height +'px'
    }
  }
    
}
