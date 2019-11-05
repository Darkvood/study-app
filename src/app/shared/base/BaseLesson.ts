import {BaseLessonRunner} from './BaseLessonRunner';

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
export type ProcessLesson = IterableIterator<void>;

export interface ILesson {
  uid: string;
  title: string;
  shortDescription: string;
  description: string;
  img: string;
  done: boolean;

  questions: ILessonQuestion[];
  onStart: LessonStage;
  onFinish: LessonStage;
  run: (message: ISendMessage) => ProcessLesson;
}

export abstract class BaseLesson implements ILesson {
  abstract uid: string;
  abstract title: string;
  abstract shortDescription: string;
  abstract description: string;
  abstract questions: ILessonQuestion[];

  img = 'lesson-bg_default';
  done: boolean;

  constructor(public isDone = false) {
  }

  /**
   * The first lesson stage. Can be overwrite
   */
  * onStart(messenger: ISendMessage) {
    messenger.from(`Привет!<br />Добро пожаловать в онлайн урок "<b>${this.title}</b>". <br />Желаем удачи!`);
  }

  /**
   * The last lesson stage. Can be overwrite
   */
  * onFinish(messenger: ISendMessage) {
    messenger.from(`Поздравляем!<br /> Вы успешно завершили урок "<b>${this.title}</b>"!`);
  }

  * run(messenger: ISendMessage): ProcessLesson {
    const task = new BaseLessonRunner(this, messenger);

    yield* task.run();
  }
}
