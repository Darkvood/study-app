import {AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ILesson, ISendMessage, ProcessLesson} from '../../shared/lessons/base/base-lesson';
import {Router} from '@angular/router';

export interface ILessonMessage {
  type: 'to' | 'from';
  message: string;
}

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit, AfterViewChecked {
  @Input() lesson: ILesson;
  @ViewChild('messageList', {static: true}) messageList: ElementRef;

  input = '';
  done: boolean;
  messages: ILessonMessage[] = [];
  lessonRunner: ProcessLesson;

  constructor(private router: Router) {
  }

  sendRequest(message: string) {
    if (!message) {
      return;
    }

    this.sendMessage({type: 'to', message});
    this.input = '';
    this.done = this.lessonRunner.next(message).done;
  }

  sendMessage(message: ILessonMessage) {
    this.messages.push(message);
  }

  resolve() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    const sendMessage: ISendMessage = {
      to: message => this.sendMessage({type: 'to', message}),
      from: message => this.sendMessage({type: 'from', message})
    };


    this.lessonRunner = this.lesson.run(sendMessage);
    this.lessonRunner.next();
  }

  ngAfterViewChecked() {
    this.messageList.nativeElement.scrollTop = this.messageList.nativeElement.scrollHeight;
  }
}
