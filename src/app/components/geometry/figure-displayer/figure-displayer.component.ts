import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trapeze } from 'src/app/classes/figures/trapeze';
import { IFigure } from 'src/app/interfaces/i-figure';
import { Rectangle } from '../../../classes/figures/rectangle';

@Component({
  selector: 'app-figure-displayer',
  templateUrl: './figure-displayer.component.html',
  styleUrls: ['./figure-displayer.component.css']
})
export class FigureDisplayerComponent {
  @Input() figure!: IFigure;
  @Output() figureChange = new EventEmitter<IFigure>();

  //Is used to keep the focus on the selected input when updating page.
  trackFocusOnInput(index: number) {
    return index;  
  }

  clickMe(){
    alert(this.figure.friendlyName + " says hi");
  }
}
