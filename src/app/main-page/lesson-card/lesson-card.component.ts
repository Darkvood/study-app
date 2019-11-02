import {Component, Input} from '@angular/core';
import {ILesson} from '../../shared/base/BaseLesson';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
})
export class LessonCardComponent {
  @Input() lesson: ILesson;
}
