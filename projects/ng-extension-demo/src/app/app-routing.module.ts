import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {NotificationComponent} from "./component/notification/notification.component";
import {ComponentComponent} from "./component/component.component";
import {ListComponent} from "./component/list/notification.component";


const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'component',
    component: ComponentComponent
  },
  {
    path: 'component/notification',
    component: NotificationComponent
  },
  {
    path: 'component/list',
    component: ListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
