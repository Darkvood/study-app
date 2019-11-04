export interface ISendMessage {
  to: (message: string) => void;
  from: (message: string) => void;
}

export interface ILessonQuestion {
  question: string;
  answer: string | string[];
  onDone?: string;
  onError?: string;
}

export type LessonStage = (messenger: ISendMessage) => IterableIterator<void>;
export type LessonRunner = IterableIterator<void>;

export interface ILesson {
  uid: string;
  title: string;
  shortDescription: string;
  description: string;
  img: string;
  done: boolean;

  schema: LessonStage[];
  welcome: LessonStage;
  success: LessonStage;
  run: (message: ISendMessage) => LessonRunner;
}

export abstract class BaseLesson implements ILesson {
  abstract uid: string;
  abstract title: string;
  abstract shortDescription: string;
  abstract description: string;
  abstract schema: LessonStage[];
  img = 'lesson-bg_default';
  done: boolean;
  maxTryCount = 5;

  constructor(public isDone = false) {
  }

  * welcome(messenger: ISendMessage) {
    messenger.from(`Привет!<br />Добро пожаловать в онлайн урок "<b>${this.title}</b>". <br />Желаем удачи!`);
  }

  * success(messenger: ISendMessage) {
    messenger.from(`Поздравляем!<br /> Вы успешно завершили урок "<b>${this.title}</b>"!`);
  }

  waitAnswer(question: ILessonQuestion, params?: {}): LessonStage {
    const maxTryCount = this.maxTryCount;

    const stage = function* (messenger: ISendMessage) {
      messenger.from(question.question);

      for (let tryNo = 1; tryNo <= maxTryCount; tryNo++) {
        const answer = yield;

        if (answer === '!помощь') {
          messenger.from(this.getHelp(question.answer, tryNo--, maxTryCount));
        } else if (this.validateAnswer(question.answer, answer, params)) {
          messenger.from(question.onDone || 'Отлично!');
          return;
        } else {
          messenger.from(this.formatError(question.onError, tryNo, maxTryCount));
        }
      }
    };

    return stage.bind(this);
  }

  // TODO: Add props to params (case sensitive and etc.)
  private validateAnswer(currentAnswer: string | string[], actualAnswer: string, params: {}) {
    const reducer = (text: string) => text.trim().toLowerCase();
    actualAnswer = reducer(actualAnswer);

    return typeof currentAnswer !== 'string'
      ? currentAnswer.find(answer => reducer(answer) === actualAnswer)
      : reducer(currentAnswer) === actualAnswer;
  }

  private formatError(onError, tryNo, maxTryCount) {
    let errorText = onError || 'Ответ не верный :(';

    if (tryNo === maxTryCount) {
      errorText += `<br/>Вы не смогли ответить на вопрос, повторите
                пройденный материал и повторите попытку. Наверняка у вас все получится!`;
    } else if (tryNo >= 3) {
      errorText += '<br/><small>Воспользуйтесь кнопой помощи, если у вас возникла проблема.</small>';
    }

    return errorText;
  }

  private getHelp(answer: string | string[], tryNo, maxTryCount) {
    // take first answer from array
    if (typeof answer !== 'string') {
      answer = answer[0];
    }

    const countVisibleChar = Math.ceil((answer.length * tryNo) / maxTryCount);

    return answer.slice(0, countVisibleChar) + '*'.repeat(answer.length - countVisibleChar);
  }

  * run(messenger: ISendMessage): LessonRunner {
    const schema = [this.welcome, ...this.schema, this.success];

    for (const stage of schema) {
      yield* stage.call(this, messenger);
    }
  }
}
