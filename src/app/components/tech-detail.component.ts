import { Component, Input } from '@angular/core';
import { Technology } from './technology';

@Component({
  selector: 'tech-detail',
  templateUrl: './tech-detail-component.html'
})

export class TechDetailComponent {
  @Input() tech: Technology;
}
