import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {NotificationComponent} from "./notification/notification.component";


const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
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
