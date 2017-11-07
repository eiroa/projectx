import { Component , OnInit} from '@angular/core';
import { Technology } from './technology';
import { TechService } from '../services/tech.service';

@Component({
  selector: 'technologies',
  templateUrl: './html/technologies.component.html',
  styleUrls: ['./css/technologies.component.css']
})

export class TechnologiesComponent implements OnInit {
  selectedTech: Technology;
  techs: Technology[];
  ngOnInit(): void {
    this.getTechs();
  }
  onSelect(tech: Technology): void {
    this.selectedTech = tech;
  }

  getTechs(): void {
    this.techService.getTechs().subscribe(maybeTechs => this.techs = maybeTechs);
  }

  constructor(private techService: TechService) {
  }
}
