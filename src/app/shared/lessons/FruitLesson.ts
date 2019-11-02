import {BaseLesson, ILesson} from '../base/BaseLesson';

export class FruitLesson extends BaseLesson implements ILesson {
  title = 'Изучение фруктов';
  shortDescription = 'В данном уроке вы выучите новые виды фруктов';
}
