// 圆形类实现 Shape 接口
import {Shape} from './Shape';

class Circle implements Shape {
    constructor(private radius: number) {}

    computeArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

export { Circle }


// function circle(radius: number): Shape {
//     return {
//         computeArea: function (): number {
//             return Math.PI * radius * radius
//         }
//     }
// }


