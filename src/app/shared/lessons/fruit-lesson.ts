import {BaseLesson, ILesson, ISendMessage, LessonStage} from '../base/BaseLesson';

export class FruitLesson extends BaseLesson implements ILesson {
  uid = 'fruit-01';
  title = 'Фрукты';
  shortDescription = 'Из данного урока вы узнаете новые виды фруктов';
  // tslint:disable-next-line:max-line-length
  description = 'Из данного урока вы узнаете новые виды фруктов, чем они нравятся людям и места, где их можно встретить в естественной среде.';

  schema: LessonStage[] = [this.learnFruit, this.trainFruit];

  * learnFruit(messenger: ISendMessage) {
    messenger.from(`
    <p>Рассмотрим 4 вида фруктов: </p>
    <ul>
        <li>Яблоко - 🍏</li>
        <li>Лимон - 🍋</li>
        <li>Банан - 🍌</li>
        <li>Апельсин - 🍊</li>
     </ul>`);
  }

  * trainFruit(messenger: ISendMessage) {
    yield* this.waitAnswer({
      question: 'Что это за фрукт - 🍏?',
      answer: 'Яблоко',
      onDone: `
        Верно! Яблоко - сочный кислосладкий плод яблони, который употребляется в пищу в свежем виде, служит сырьём в кулинарии
        и для приготовления напитков
      `
    })(messenger);

    yield* this.waitAnswer({
      question: 'Что это за фрукт - 🍋?',
      answer: 'Лимон',
      onDone: 'Верно.. и очень кисло :):'
    })(messenger);

    yield* this.waitAnswer({
      question: 'Что это за фрукт - 🍌?',
      answer: 'Банан'
    })(messenger);

    yield* this.waitAnswer({
      question: 'Что это за фрукт - 🍊?',
      answer: 'Апельсин'
    })(messenger);
  }
}
