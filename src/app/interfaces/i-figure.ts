export interface IFigure {
    dimensions: { [key: string]: number };
    friendlyName: string;
    getCss(): object;
    calculateCircumference(): number;
    calculateArea(): number;
}
