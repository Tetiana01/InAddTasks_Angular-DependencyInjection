import { Component, computed, inject, signal } from '@angular/core';

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
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksServise
          .allTasks()
          .filter(task => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksServise
          .allTasks()
          .filter(task => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksServise
          .allTasks()
          .filter(task => task.status === 'DONE');
      default:
        return this.tasksServise.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
