package edu.cmu.cs.cs214.lab02.shapes;

public abstract class Parallelogram implements Shape {
    private double width;
    private double height;

    public Parallelogram(double width, double height){
        this.width = width;
        this.height = height;
    }

    public double getArea() {
        return width * height;
    }
}

