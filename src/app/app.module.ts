import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LessonFiltersComponent} from './main-page/lesson-filters/lesson-filters.component';
import {LessonComponent} from './main-page/lesson/lesson.component';
import {LessonListComponent} from './main-page/lesson-list/lesson-list.component';
import {MainPageComponent} from './main-page/main-page.component';
import {CoursePageComponent} from './course-page/course-page.component';
import { CourseComponent } from './course-page/course/course.component';
import { MessengerComponent } from './course-page/messenger/messenger.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonFiltersComponent,
    LessonComponent,
    LessonListComponent,
    MainPageComponent,
    CoursePageComponent,
    CourseComponent,
    MessengerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
