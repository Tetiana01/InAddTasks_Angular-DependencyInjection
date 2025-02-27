import { Component, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksServise = inject(TasksService); //create an instance of the TasksService, DepInj alternative way
  selectedFilter = signal<string>('all');
  tasks = this.tasksServise.allTasks;



  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
