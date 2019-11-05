import {BaseLesson, ILesson, ILessonQuestion, ISendMessage, LessonStage} from '../base/BaseLesson';

export class FruitLesson extends BaseLesson implements ILesson {
  uid = 'fruit-01';
  title = 'Фрукты';
  shortDescription = 'Из данного урока вы узнаете новые виды фруктов';
  // tslint:disable-next-line:max-line-length
  description = `
     <p>Из данного урока вы узнаете новые виды фруктов. Мы рассмотрим 4 вида фруктов:</p>
     <ul>
       <li>Яблоко 🍏</li>
       <li>Лимон 🍋</li>
       <li>Банан 🍌</li>
       <li>Апельсин 🍊</li>
     </ul>`;

  questions: ILessonQuestion[] = [
    {
      question: 'Что это за фрукт - 🍏?',
      answer: 'Яблоко'
    },
    {
      question: 'Что это за фрукт - 🍋?',
      answer: 'Лимон',
      onDone: 'Верно.. и очень кисло :):'
    },
    {
      question: 'Что это за фрукт - 🍌?',
      answer: 'Банан'
    },
    {
      question: 'Что это за фрукт - 🍊?',
      answer: 'Апельсин'
    }
  ];
}
