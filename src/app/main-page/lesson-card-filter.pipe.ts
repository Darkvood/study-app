import {Pipe, PipeTransform} from '@angular/core';
import {ILesson} from '../shared/lessons/base/base-lesson';

@Pipe({
  name: 'lessonCardFilter'
})
export class LessonCardFilterPipe implements PipeTransform {
  transform(value: ILesson[], search: string, category: string): ILesson[] {
    if (category === 'all') {
      category = null;
    }

    value = value.filter(lesson => {
      return category ? lesson.categories.indexOf(category) !== -1 : true;
    });


    if (!search.trim()) {
      return value;
    }

    return value.filter(lesson => {
      return `${lesson.title}__${lesson.shortDescription}`.toLowerCase().includes(search.toLowerCase());
    });
  }

}
