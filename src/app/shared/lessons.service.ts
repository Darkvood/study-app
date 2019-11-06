import {Injectable} from '@angular/core';
import * as LessonList from './lessons/lesson-registry';
import {ILesson} from './lessons/base/base-lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  search = '';
  category = 'all';
  lessons: ILesson[] = [];
  lessonCategories: string[] = [];

  constructor() {
    const categories: string[] = [];

    // tslint:disable-next-line:forin
    for (const name in LessonList) {
      const lesson: ILesson = new LessonList[name]();

      categories.push(...lesson.categories);
      this.lessons.push(lesson);
    }

    this.lessonCategories = [...new Set(categories)];
  }

  getByUid(uid: string): ILesson | false {
    if (!uid) {
      return false;
    }

    const lesson = this.lessons.find(item => item.uid === uid);

    return lesson ? lesson : false;
  }
}
