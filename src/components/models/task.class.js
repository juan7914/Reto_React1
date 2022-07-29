import { LEVELS } from "./levels.enum";

 class Task {
    name = "";
    descrption = "";
    completed = false;
    level = LEVELS.NORMAL;

    constructor({name , description, completed , level}){
        this.name = name;
        this.descrption = description;
        this.completed = completed;
        this.level = level
    }
}
export default Task ;