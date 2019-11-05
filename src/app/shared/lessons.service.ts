import {Injectable} from '@angular/core';
import * as LessonList from './lessons/lesson-registry';
import {ILesson} from './lessons/base/base-lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  search = '';
  lessons: ILesson[] = [];

  constructor() {
    // tslint:disable-next-line:forin
    for (const name in LessonList) {
      // tslint:disable-next-line:new-parens
      this.lessons.push(new LessonList[name]());
    }
  }

  getByUid(uid: string): ILesson | false {
    if (!uid) {
      return false;
    }

    const lesson = this.lessons.find(item => item.uid === uid);

    return lesson ? lesson : false;
  }
}
