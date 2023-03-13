import { IFigure } from "../../interfaces/i-figure";

export class Rectangle implements IFigure{
    friendlyName: string = "Rectangle";
    dimensions: { [key: string]: number; } = {};
    
    constructor(height: number, width : number) {
        this.dimensions["height"] = height;
        this.dimensions["width"] = width;
    }
    getCss(): object {
        return {
            'background-color':'green',
            'width': this.dimensions["width"] +'px',
            'height': this.dimensions["height"] +'px'
          };
    }
    calculateCircumference(): number {
        return this.dimensions["height"] * 2 + this.dimensions["width"] * 2; 
    }
    calculateArea(): number {
        return this.dimensions["height"] * this.dimensions["width"];
    }
}

