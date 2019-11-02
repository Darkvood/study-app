import {Injectable} from '@angular/core';
import * as LessonList from './lessons/LessonProvider';
import {ILesson} from './base/BaseLesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  lessons: ILesson[] = [];

  constructor() {
    // tslint:disable-next-line:forin
    for (const name in LessonList) {

      // tslint:disable-next-line:new-parens
      this.lessons.push(new LessonList[name]);
    }
  }
}
