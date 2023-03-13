import { IFigure } from "src/app/interfaces/i-figure";

export class Trapeze implements IFigure{
    friendlyName: string = "Trapeze";
    dimensions: { [key: string]: number; } = {};

    constructor(height : number, width1 : number, width2 : number) {
        this.dimensions["height"] = height;
        this.dimensions["width1"] = width1;
        this.dimensions["width2"] = width2;

    }

    getCss(): object {
        let maxWidth = Math.max(this.dimensions["width1"], this.dimensions["width2"]);
        let widthDifference = Math.max(this.dimensions["width1"], this.dimensions["width2"]) - Math.min(this.dimensions["width1"], this.dimensions["width2"]);
        return {
            'width': maxWidth +'px',
            'height': this.dimensions["height"] +'px',
            'border-bottom': this.dimensions["height"] + 'px solid blue',
            'border-left': (widthDifference) / 2 +'px solid transparent',
            'border-right': (widthDifference) / 2 + 'px solid transparent'
          };
    }
    

    calculateCircumference(): number {
        let widthDifference = Math.max(this.dimensions["width1"], this.dimensions["width2"]) - Math.min(this.dimensions["width1"], this.dimensions["width2"]);
        let hypotenuse = Math.sqrt(Math.pow(widthDifference, 2) +  Math.pow(this.dimensions["height"], 2));
        return Math.round(this.dimensions["width1"] + this.dimensions["width2"] + hypotenuse * 2);
        
    }
   
    calculateArea(): number {
        return 0.5 * this.dimensions["height"] * (this.dimensions["width1"] + this.dimensions["width2"]);
    }
}