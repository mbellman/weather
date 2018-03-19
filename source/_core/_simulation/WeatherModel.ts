import { Automated, Autowired, Callback, EventManager, Poll, Wired } from 'trampoline-framework';
import { Geography } from '@core/Simulation/Geography';

@Wired
@Automated
export class WeatherModel {
  public static readonly CYCLE_FREQUENCY: number = 1000;
  public static readonly CYCLE_TIME: number = 1000;
  public temperature: number = 50;

  @Autowired()
  private events: EventManager;

  private time: number = 0;

  public subscribe (subscriber: Callback<any>): void {
    this.events.on('update', subscriber);
  }

  @Poll(WeatherModel.CYCLE_FREQUENCY)
  private update (): void {
    this.events.trigger('update');

    this.time = (this.time + WeatherModel.CYCLE_TIME) % 24000;
    this.temperature = 40 + Math.round(Math.random() * 20);
  }
}
