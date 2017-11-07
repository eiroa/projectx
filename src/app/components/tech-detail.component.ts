import { Component, Input} from '@angular/core';
import { Technology } from './technology';
import {TechService} from '../services/tech.service';

@Component({
  selector: 'tech-detail',
  templateUrl: './html/tech-detail-component.html'
})

export class TechDetailComponent  {
  @Input() tech: Technology;
}
