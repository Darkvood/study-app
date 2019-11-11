import {BaseLesson, ILesson} from '../base/base-lesson';

export class FishSturgeon extends BaseLesson implements ILesson {
  uid = 'fish-sturgeon';
  title = 'Осетровые рыбы';
  img = 'fish';
  shortDescription = 'Виды, значение и образ жизни Осетровых';
  categories = ['Ихтиология'];
}
