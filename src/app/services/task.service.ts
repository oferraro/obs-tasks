import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../models/interfaces";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private API_URL = "http://amimusa.xen.prgmr.com:3000/tasks/"; // TODO: check best place to place this

    constructor(
        private httpClient: HttpClient,
    ) {
    }

    getTasks(owner: number): Observable<Task[]> {
        return this.httpClient
            .get<Task[]>(this.API_URL + owner);
    }

    addTask(owner: number, task: Task): Observable<any> {
        return this.httpClient.post(this.API_URL + owner, task);
    }

    editTask(owner: number, task: Task): Observable<any> {
        return this.httpClient.patch(this.API_URL + task._id, {
            description: task.description,
            completed: task.completed
        });
    }

    deleteTask(task: Task): Observable<any> {
        return this.httpClient.delete(this.API_URL + task._id, {});
    }
}
