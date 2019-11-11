import {BaseLesson, ILesson} from '../base/base-lesson';

export class FishSalmonidae extends BaseLesson implements ILesson {
  uid = 'fish-salmonidae';
  title = 'Лососевые рыбы';
  img = 'fish';
  shortDescription = 'Основные представители, краткое описание видов и промысловое значение лососевых.';
  categories = ['Ихтиология'];
}
