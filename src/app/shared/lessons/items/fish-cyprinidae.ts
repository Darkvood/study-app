import {BaseLesson, ILesson} from '../base/base-lesson';

export class FishCyprinidae extends BaseLesson implements ILesson {
  uid = 'fish-cyprinidae';
  title = 'Карповые рыбы';
  img = 'fish';
  shortDescription = 'Общая характеристика и основные представители карповых.';
  categories = ['Ихтиология'];
}
