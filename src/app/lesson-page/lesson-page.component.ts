import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {LessonsService} from '../shared/lessons.service';
import {ILesson} from '../shared/base/BaseLesson';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.scss']
})
export class LessonPageComponent implements OnInit {
  lesson: ILesson;

  constructor(private route: ActivatedRoute, private lessonsService: LessonsService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const lesson = this.lessonsService.getByUid(params.uid);

      if (lesson) {
        this.lesson = lesson;
      } else {
        // TODO: Redirect to 404
      }

    });
  }

}
