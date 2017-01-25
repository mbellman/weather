export const enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

export interface Point {
    x: number;
    y: number;
}

export interface Area {
    width: number;
    height: number;
}

export interface Rectangle extends Point, Area {}