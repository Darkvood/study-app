import {Component, OnInit} from '@angular/core';
import {LessonsService} from '../shared/lessons.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private lessonsService: LessonsService) {
  }

  ngOnInit() {
  }

}
