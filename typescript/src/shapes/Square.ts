import {Parallelogram} from "./Parallelogram";

class Square implements Parallelogram {
    private sideLen: number;

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    get width(): number {
        return this.sideLen;
    }

    get height(): number {
        return this.sideLen;
    }

    computeArea(): number {
        return this.width * this.height;
    }
}

export { Square }