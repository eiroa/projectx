import { Injectable } from '@angular/core';
import {Technology} from '../components/technology';
import { TECHS } from '../data/mock-techs';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';


@Injectable()
export class TechService {
  getTechs(): Observable<Technology[]> {
    this.messageService.add('Tech Service: fetched technologies');
    return of(TECHS);
  }

  getTech(id: number): Observable<Technology> {
    // Todo: send the message _after_ fetching the tech
    this.messageService.add(`TechService: fetched tech with id=${id}`);
    return of(TECHS.find(tech => tech.id === id));
  }

  constructor(private messageService: MessageService) {
  }
}
