export class Todo {
	_id: number;
    userId: number;
    title: string;
    completed: boolean;
    creationDate:string;
    description:string;

    constructor(id, userId, title, description, completed) {
        this._id = id;
        this.userId = userId;
        this.title =title;
        this.description = description;
        this.completed = completed;
    }
}