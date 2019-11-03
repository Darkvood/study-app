import {Component} from '@angular/core';
import {LessonsService} from '../../shared/lessons.service';

@Component({
  selector: 'app-lesson-filters',
  templateUrl: './lesson-filters.component.html',
  styleUrls: ['./lesson-filters.component.scss']
})
export class LessonFiltersComponent {
  constructor(public lessonsService: LessonsService) {
  }

}
