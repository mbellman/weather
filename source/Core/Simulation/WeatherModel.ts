import { Autowired, Callback, EventManager, Wired } from 'trampoline-framework';

@Wired
export default class WeatherModel {
  @Autowired() private events: EventManager;

  public subscribe (subscriber: Callback<any>): void {
    this.events.on('update', subscriber);
  }
}
