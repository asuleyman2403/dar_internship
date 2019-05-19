import { Component, OnInit } from '@angular/core';
import {TaskList} from '../../models/models';
import {ProviderService} from '../../services/provider.service';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent implements OnInit {

  constructor(private provider: ProviderService) { }
  taskLists: TaskList[] = [];
  currentTaskList: TaskList;
  pageNumber: number;
  ngOnInit() {
    this.provider.getTaskLists().then( res => {
      console.log(res);
      this.taskLists = res.results;
      if ( res.results.length !== 0) {
        if (res.count % res.results.length === 0) {
          this.pageNumber = res.count / res.results.length;
        } else {
          this.pageNumber = (res.count / res.results.length ) + 1;
        }
      } else {
        this.pageNumber = 1;
      }
    });
  }

}
