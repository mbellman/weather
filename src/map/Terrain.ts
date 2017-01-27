import PRNG from "core/math/PRNG";
import { Point, IntArray2D } from "core/math/Geometry";

interface Configuration {
	recursion?: number;
	minimum?: number;
	maximum?: number;
	seed?: string;
}

export default class Terrain {
	private configuration: Configuration;
	private prng: PRNG = new PRNG();
	private map: IntArray2D = [];

	public constructor (configuration?: Configuration) {
		this.configuration = configuration;

		this.prng.setSeed(this.configuration.seed);
	}

	public generate (): void {
		const cycles: number = this.configuration.recursion;

		this.initializeMap();
		this.setCornerElevations();

		for (let i = 1; i <= cycles; i++) {
			this.runGenerationCycle(i);
		}
	}

	private getMapSize (): number {
		const r: number = this.configuration.recursion;

		return Math.pow(2, r) + 1;
	}

	private getRadiusInCycle (cycle: number): number {
		const mapSize: number = this.getMapSize();

		return (mapSize - 1) / Math.pow(2, cycle);
	}

	private getMovesInCycle (cycle: number): number {
		return Math.pow(4, cycle - 1);
	}

	private setTile (i: number, j: number, elevation: number): void {
		this.map[i][j] = elevation;
	}

	private initializeMap (): void {
		const mapSize: number = this.getMapSize();

		for (let i = 0; i < mapSize; i++) {
			this.map[i] = [];

			for (let j = 0; j < mapSize; j++) {
				this.setTile(i, j, 0);
			}
		}
	}

	private setCornerElevations (): void {
		const min: number = this.configuration.minimum;
		const max: number = this.configuration.maximum;
		const N: number = this.getMapSize() - 1;

		this.setTile(0, 0, this.prng.random(min, max));
		this.setTile(0, N, this.prng.random(min, max));
		this.setTile(N, 0, this.prng.random(min, max));
		this.setTile(N, N, this.prng.random(min, max));
	}

	private runGenerationCycle (cycle: number): void {
		const radius: number = this.getRadiusInCycle(cycle);
		const moves: number = this.getMovesInCycle(cycle);
		const rows: number = Math.sqrt(moves);

		for (let i = 0; i < moves; i++) {
			const tile: Point = {
				x: 0,
				y: 0	
			};

			this.generateSquare(tile, radius);
			this.generateDiamond(tile, radius);
		}
	}

	private generateSquare (center: Point, radius: number): void {

	}

	private generateDiamond (center: Point, radius: number): void {

	}
}