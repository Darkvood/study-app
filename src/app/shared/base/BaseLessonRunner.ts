import {ILesson, ILessonQuestion, ISendMessage, LessonStage} from './BaseLesson';

export class BaseLessonRunner {
  maxTryCount = 5;

  constructor(private lesson: ILesson, private messenger: ISendMessage) {
  }

  /**
   * Process lesson
   */
  * run() {
    const schema: LessonStage[] = [
      this.lesson.onStart.bind(this.lesson, this.messenger),
      this.processQuestionGroup.bind(this, this.lesson.questions),
      this.lesson.onFinish.bind(this.lesson, this.messenger)
    ];

    for (const stage of schema) {
      yield* stage.call(this, this.messenger);
    }
  }

  /**
   * Run questions group
   */
  * processQuestionGroup(questions: ILessonQuestion[]) {
    for (const question of questions) {
      yield* this.processQuestion(question);
    }
  }


  /**
   * Process one question
   */
  * processQuestion(question: ILessonQuestion, params?: {}) {
    this.messenger.from(question.question);

    for (let tryNo = 1; tryNo <= this.maxTryCount; tryNo++) {
      const answer = yield;

      if (answer === '!помощь') {
        this.getHint(question.answer, tryNo--, this.maxTryCount);
      } else if (this.validateAnswer(question.answer, answer, params)) {
        this.messenger.from(question.onDone || 'Отлично!');
        return;
      } else {
        this.formatError(question.onError, tryNo, this.maxTryCount);
      }
    }
  }

  /**
   * Check answer
   * TODO: Add props to params (case sensitive and etc.)
   */
  private validateAnswer(currentAnswer: string | string[], actualAnswer: string, params: {}) {
    const reducer = (text: string) => text.trim().toLowerCase();
    actualAnswer = reducer(actualAnswer);

    return typeof currentAnswer !== 'string'
      ? currentAnswer.find(answer => reducer(answer) === actualAnswer)
      : reducer(currentAnswer) === actualAnswer;
  }

  /**
   * Get a partial answer to a question
   */
  private formatError(onError, tryNo, maxTryCount) {
    let errorText = onError || 'Ответ не верный :(';

    if (tryNo === maxTryCount) {
      errorText += `<br/>Вы не смогли ответить на вопрос, повторите
                пройденный материал и повторите попытку. Наверняка у вас все получится!`;
    } else if (tryNo >= 3) {
      errorText += '<br/>Воспользуйтесь кнопой помощи, если у вас возникла проблема.';
    }

    this.messenger.from(errorText);
  }

  /**
   * Get a partial answer to a question
   */
  private getHint(answer: string | string[], tryNo, maxTryCount) {
    // take first answer from array
    if (typeof answer !== 'string') {
      answer = answer[0];
    }

    const countVisibleChar = Math.ceil((answer.length * tryNo) / maxTryCount);

    this.messenger.from(answer.slice(0, countVisibleChar) + '*'.repeat(answer.length - countVisibleChar));
  }


}
