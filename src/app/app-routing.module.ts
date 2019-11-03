import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {LessonPageComponent} from './lesson-page/lesson-page.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'lesson/:uid', component: LessonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
