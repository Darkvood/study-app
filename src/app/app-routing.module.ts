import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {CoursePageComponent} from './course-page/course-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'course', component: CoursePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
