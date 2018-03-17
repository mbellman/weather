export default interface IRadarWeatherService {
  fetchRadarData (x: number, y: number, xRange: number, yRange: number): Promise<any>;
}
