import {Component} from '@angular/core';
import {LessonsService} from '../shared/lessons.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(public lessonsService: LessonsService) {
  }
}
