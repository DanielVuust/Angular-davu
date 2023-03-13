import { IFigure } from '../../interfaces/i-figure';
export class Parallelogram implements IFigure{
    dimensions: { [key: string]: number; } = {};
    friendlyName: string = "Parallelogram";
    error: boolean = false;

    constructor(height : number, baseline: number, sideLength : number ) {
        this.dimensions["height"] = height;
        this.dimensions["baseline"] = baseline;
        this.dimensions["sideLength"] = sideLength;
        this.calculateAngle();
    }
    getCss(): object {
        let i =  {
            'background-color':'orange',
            'width': this.dimensions["baseline"] +'px',
            'height': this.dimensions["height"] +'px',
            'transform': `skewX(${this.calculateAngle() - 90}deg)`
          };
            //TODO change to something more intuitively.
          if(this.error){
            i['background-color'] = 'red';
          }
          return i;
    }
    calculateCircumference(): number {
        return this.dimensions["baseline"] * 2 + this.dimensions["sideLength"] * 2;
    }
    calculateArea(): number {
        return this.dimensions["height"] * this.dimensions["baseline"];
    }
    calculateAngle():number{
        let angle: number = Math.asin(this.dimensions["height"]/this.dimensions["sideLength"]) * (180 / Math.PI);

        //In case its not possible to create a parallelogram with the specified values, then angle is set to 90.
        if (Number.isNaN(angle)){
            //TODO change to something more intuitively.
            this.error = true;
            return 90;
        }
        this.error = false;
        return angle;
    }
}
