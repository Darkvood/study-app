import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LessonsService} from '../shared/lessons.service';
import {ILesson} from '../shared/lessons/base/base-lesson';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.scss']
})
export class LessonPageComponent implements OnInit {
  lesson: ILesson;

  constructor(private route: ActivatedRoute, private router: Router, private lessonsService: LessonsService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const lesson = this.lessonsService.getByUid(params.uid);

      if (lesson) {
        import(`src/app/shared/lessons/items/${params.uid}.resource`).then(({description = '', questions = []}) => {
          lesson.description = description;
          lesson.questions = questions;

          this.lesson = lesson;
        });
      } else {
        this.router.navigate(['not-found']);
      }
    });
  }
}
