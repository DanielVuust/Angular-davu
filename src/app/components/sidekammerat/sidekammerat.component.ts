import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-sidekammerat',
  templateUrl: './sidekammerat.component.html',
  styleUrls: ['./sidekammerat.component.css']
})
export class SidekammeratComponent {

  @Output() sizeChange = new EventEmitter<number>();
  
  descriptionText: string = "This is a description for Rasmus";
  imgSrc: string = "../assets/LeRasmus.jfif";
  imgWidth: number = 50;
  imgHeight: number = 50;


}
