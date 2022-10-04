export class Position {
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    x: number;
    y: number;

    /**
     * 判断两个坐标是否相等
     * @param pos 要判断的坐标
     * @returns {boolean} 是否相等
     */
    isEqualTo(pos: Position): boolean {
        return this.x === pos.x && this.y === pos.y;
    }
}