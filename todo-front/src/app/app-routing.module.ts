import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {TaskListsComponent} from './components/task-lists/task-lists.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'taskLists',
    component: TaskListsComponent
  },
  {
    path: 'main',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
