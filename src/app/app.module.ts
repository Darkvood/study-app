import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LessonFiltersComponent} from './main-page/lesson-filters/lesson-filters.component';
import {LessonCardComponent} from './main-page/lesson-card/lesson-card.component';
import {MainPageComponent} from './main-page/main-page.component';
import {LessonPageComponent} from './lesson-page/lesson-page.component';
import {LessonComponent} from './lesson-page/lesson/lesson.component';
import {MessengerComponent} from './lesson-page/messenger/messenger.component';
import {FormsModule} from '@angular/forms';
import {LessonCardFilterPipe} from './main-page/lesson-card-filter.pipe';
import {AboutPageComponent} from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonFiltersComponent,
    LessonCardComponent,
    MainPageComponent,
    LessonPageComponent,
    LessonComponent,
    MessengerComponent,
    LessonCardFilterPipe,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
