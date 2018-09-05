export interface Todo {
	id: number;
    userId: number;
    title: string;
    completed: boolean;
    creationDate:string;
    description:string;
}

export interface TodoState {
	todos: Array<Todo>;
}