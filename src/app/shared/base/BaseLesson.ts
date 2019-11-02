export interface ILesson {
  title: string;
  shortDescription: string;
  img: string;
  done: boolean;
}

export abstract class BaseLesson implements ILesson {
  abstract title: string;
  abstract shortDescription: string;
  img = '';
  done: boolean;

  constructor(public isDone = false) {
  }
}
