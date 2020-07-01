import {Component, OnInit} from '@angular/core';
import {AddTaskResponse, emptyTask, Task, taskTypes} from "src/app/models/interfaces";
import {TaskService} from "src/app/services/task.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title: string = 'OBS';
    tasks: Task[] = [];
    filteredTasks: Task[] = [];
    owner: number = 111; // TODO: check if use and interceptor to manage this and if it should be in localStorage or somewhere else
    newTask: Task = undefined;
    tasksFilter: taskTypes = taskTypes.all;
    loading: boolean = false;
    taskTypesList = [];
    error: string = '';

    constructor(
        private taskService: TaskService,
    ) {
    }

    ngOnInit() {
        this.taskTypesList = Object.values(taskTypes).sort((a: string, b: string) => {
            return a < b ? -1 : 1;
        });
        this.fetchTasks();
    }

    filterBy() {
        this.filteredTasks = this.tasks;
        if (this.tasksFilter !== taskTypes.all) {
            this.filteredTasks = this.tasks.filter((task: Task) => {
                return (task.completed && this.tasksFilter == taskTypes.completed)
                    || (!task.completed && this.tasksFilter == taskTypes.pending);
            });
        }
    }

    fetchTasks() {
        this.loading = true;
        this.taskService.getTasks(this.owner).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
            this.filteredTasks = tasks;
            this.loading = false;
        });
    }

    addEditTask() {
        if (this.newTask.description.trim() !== '') {
            if (this.newTask._id) {
                this.editTask();
            } else {
                this.addTask();
            }
        } else {
            this.error = 'Please, complete task description before continue';
        }
    }

    addTask() {
        this.taskService.addTask(this.owner, this.newTask).subscribe((response: AddTaskResponse) => {
            this.fetchTasks(); // using push the new task can be manually added but for been completely sure, could be better fetch them again
        });
    }

    editTask() {
        this.taskService.editTask(this.owner, this.newTask).subscribe((response: AddTaskResponse) => {
            this.fetchTasks(); // using push the new task can be manually added but for been completely sure, could be better fetch them again
        })
    }

    deleteTask(task: Task) {

    }

    setCreatingTask() {
        this.newTask = emptyTask;
    }

    setEditingTask(task: Task) {
        this.newTask = task;
    }
}
