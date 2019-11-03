import {Pipe, PipeTransform} from '@angular/core';
import {ILesson} from '../shared/base/BaseLesson';

@Pipe({
  name: 'lessonCardFilter'
})
export class LessonCardFilterPipe implements PipeTransform {

  transform(value: ILesson[], search: string): ILesson[] {
    if (!search.trim()) {
      return value;
    }

    return value.filter(lesson => {
      return `${lesson.title}__${lesson.shortDescription}`.includes(search);
    });
  }

}
