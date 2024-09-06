import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/Rectangle.js";
import { Circle } from "./shapes/Circle.js";
import { Square } from "./shapes/Square.js";
import {Shape} from "./shapes/Shape.js";

const rectangle: Shape = new Rectangle(2, 3);
const circle: Shape = new Circle(5);
const square: Shape = new Square(4);

const rectangleRenderer = newRenderer(rectangle);
const circleRenderer = newRenderer(circle);
const squareRenderer = newRenderer(square);

rectangleRenderer.draw();
circleRenderer.draw();
squareRenderer.draw();


