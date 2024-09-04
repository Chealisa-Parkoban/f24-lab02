package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Circle;
import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Square;

public class Main {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(2, 3);
        Square square = new Square(4);
        Circle circle = new Circle(5);

        Renderer rectangleRenderer = new Renderer(rectangle);
        Renderer squareRenderer = new Renderer(square);
        Renderer circleRenderer = new Renderer(circle);

        rectangleRenderer.draw();
        squareRenderer.draw();
        circleRenderer.draw();
    }
}
