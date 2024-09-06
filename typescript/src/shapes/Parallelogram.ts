import { Shape } from './Shape';

interface Parallelogram extends Shape {
    width: number,
    height: number,
    computeArea: () => number
}

export { Parallelogram }