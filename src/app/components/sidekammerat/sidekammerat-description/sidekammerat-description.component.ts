import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidekammerat-description',
  templateUrl: './sidekammerat-description.component.html',
  styleUrls: ['./sidekammerat-description.component.css']
})
export class SidekammeratDescriptionComponent {
  @Input() description!: string;
}
