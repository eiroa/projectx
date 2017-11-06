import { Component } from '@angular/core';
import {Technology} from './components/technology';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Project X';
  selectedTech: Technology;
  techs = TECHS;
  onSelect(tech: Technology): void {
    this.selectedTech = tech;
  }
}

const TECHS: Technology[] = [
  { id: 11, name: 'DynamoDB', creator: 'Amazon' },
  { id: 12, name: 'Java', creator: 'Oracle' },
  { id: 13, name: 'Kotlin', creator: 'JetBrains' },
  { id: 14, name: 'Unity', creator: 'Unity' },
  { id: 15, name: 'Docker', creator: 'Docker' },
  { id: 16, name: 'DockerSwarm', creator: 'Docker' },
  { id: 17, name: 'IntelliJ', creator: 'JetBrains' },
  { id: 18, name: 'MongoDB', creator: 'Mongo' },
  { id: 19, name: 'MySQL', creator: 'Oracle' },
  { id: 20, name: 'HysteriX', creator: 'Netflix' }
];
