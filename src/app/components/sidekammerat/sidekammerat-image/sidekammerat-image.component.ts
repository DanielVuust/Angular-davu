import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidekammerat-image',
  templateUrl: './sidekammerat-image.component.html',
  styleUrls: ['./sidekammerat-image.component.css']
})
export class SidekammeratImageComponent {
 @Input() imgHeight!: number;
 @Input() imgWidth!: number;
 @Input() imgSrc!: string;

}
