export interface ISendMessage {
  to: (message: string) => void;
  from: (message: string) => void;
};

export interface ILessonQuestion {
  question: string;
  answer: string;
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
  img = '';
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

  // TODO: Add props to params (case sensitive and etc.)
  waitAnswer(question: ILessonQuestion, params?: {}): LessonStage {
    const maxTryCount = this.maxTryCount;

    const formatAnswer = (text: string) => text.trim().toLocaleLowerCase();
    const formatError = this.formatError;
    const getHelp = this.getHelp;

    const stage = function* (messenger: ISendMessage) {
      messenger.from(question.question);

      for (let tryNo = 1; tryNo <= maxTryCount; tryNo++) {
        const answer = yield;

        if (answer === '!помощь') {
          messenger.from(getHelp(question.answer, tryNo, maxTryCount));
          tryNo--;
          continue;
        } else if (formatAnswer(question.answer) === formatAnswer(answer)) {
          messenger.from(question.onDone || 'Отлично!');
          return;
        }

        messenger.from(formatError(question.onError, tryNo, maxTryCount));
      }
    };

    return stage;
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

  private getHelp(answer, tryNo, maxTryCount) {
    const countVisibleChar = Math.ceil(answer.length * tryNo / maxTryCount);

    return answer.slice(0, countVisibleChar) + '*'.repeat(answer.length - countVisibleChar);
  }

  * run(messenger: ISendMessage): LessonRunner {
    const schema = [this.welcome, ...this.schema, this.success];

    for (const stage of schema) {
      yield* stage.call(this, messenger);
    }
  }
}
