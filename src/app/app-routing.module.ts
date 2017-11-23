import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ScrollspyComponent} from './pages/scrollspy/scrollspy.component';

const routes: Routes = [
  {
    path: 'scrollspy', component: ScrollspyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
