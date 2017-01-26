import Canvas from "core/render/Canvas";
import Terrain from "map/Terrain";

export default class TerrainRenderer {
	private render: Canvas = new Canvas();
	private terrain: Terrain;

	public constructor (terrain: Terrain) {
		this.terrain = terrain;
	}

	public getRender (): Canvas {
		return this.render;
	}
}