import {BaseLesson, ILesson} from '../base/base-lesson';

export class CzechIntroduction extends BaseLesson implements ILesson {
  uid = 'czech-introduction';
  title = 'Чешский язык. Введение';
  img = 'flag_czech';
  shortDescription = 'Общая информация, особенности и основные отличия от русского языка';
  categories = ['Чешский язык'];
}
