import { Parallelogram } from './Parallelogram'

// 矩形类实现 Shape 接口
class Rectangle implements Parallelogram {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    // 提供 getter 方法
    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    computeArea(): number {
        return this.width * this.height;
    }
}

export { Rectangle }


// function newRectangle(width: number, height: number): Rectangle {
//     return {
//         width,
//         height,
//
//         computeArea: function (): number {
//             return width * height
//         }
//     }
// }
