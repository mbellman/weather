import Terrain from "map/Terrain";
import TerrainRenderer from "map/TerrainRenderer";

import { Point } from "core/math/Geometry";

export default class Weather {
    public static main (): void {
        console.log('Weather!');

        const terrain: Terrain = new Terrain();
    }
}