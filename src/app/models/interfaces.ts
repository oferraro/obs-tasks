export interface Task {
    description: string;
    completed: boolean;
}

export const emptyTask: Task = {
    description: '',
    completed: false,
}

export enum taskTypes {
    pending = 'pending',
    completed = 'completed',
    all = 'all',
}

export interface AddTaskResponse {
    completed: boolean;
    createdAt: string;
    description: string;
    owner: number;
    updatedAt: string;
    __v: number;
    _id: string;
}
