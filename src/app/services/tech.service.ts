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
  constructor(private messageService: MessageService) {
  }
}
