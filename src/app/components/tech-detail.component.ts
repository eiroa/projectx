import { Component, Input, OnInit} from '@angular/core';
import { Technology } from './technology';
import {TechService} from '../services/tech.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'tech-detail',
  templateUrl: './html/tech-detail-component.html'
})

export class TechDetailComponent implements OnInit {
  @Input() tech: Technology;

  ngOnInit(): void {
    this.getTech();
  }

  constructor(
    private route: ActivatedRoute,
    private techService: TechService,
    private location: Location
  ) {}

  getTech(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.techService.getTech(id)
      .subscribe(maybeTech => this.tech = maybeTech);
  }

  goBack(): void {
    this.location.back();
  }

}
