import { ISquare } from "../interfaces/i-square";

export class Square implements ISquare{
    height: number;
    width: number;
    constructor(height: number, width : number) {
        this.height = height;
        this.width = width;
    }
}
