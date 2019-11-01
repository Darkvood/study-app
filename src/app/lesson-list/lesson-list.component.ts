import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {

  visibleList = new Array(8).fill(42);

  constructor() {
  }

  ngOnInit() {
  }

}
