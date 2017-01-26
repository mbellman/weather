import PRNG from "core/math/PRNG";
import { Point, IntArray2D } from "core/math/Geometry";

interface Configuration {
    recursion?: number;
    minimum?: number;
    maximum?: number;
}

export default class Terrain {
    private configuration: Configuration;
    private map: IntArray2D = [];

    public constructor (configuration?: Configuration) {
        this.configuration = configuration;
    }

    public seed (string: string): void {

    }

    public generate (): void {
        const cycles: number = this.configuration.recursion;

        for (let i = 0; i < cycles; i++) {
            this.generateCycle(i);
        }
    }

    private generateCycle (cycle: number): void {

    }

    private generateSquare (center: Point, radius: number): void {

    }

    private generateDiamond (center: Point, radius: number): void {

    }
}