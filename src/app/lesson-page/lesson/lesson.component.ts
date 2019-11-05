import {Component, Input} from '@angular/core';
import {ILesson} from '../../shared/lessons/base/base-lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {
  @Input() lesson: ILesson;

  constructor() {
  }
}
