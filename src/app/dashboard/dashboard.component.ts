import { Component, OnInit } from '@angular/core';
import {Technology} from '../components/technology';
import {TechService} from '../services/tech.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  techs: Technology[] = [];

  constructor(private techService: TechService) { }

  ngOnInit() {
    this.getTechs();
  }

  getTechs(): void {
    this.techService.getTechs()
      .subscribe(maybeTechs => this.techs = maybeTechs.slice(1, 5));
  }

}
