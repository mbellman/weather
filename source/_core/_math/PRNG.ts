export default class PRNG {
  private _state: number;

  public constructor (seed: string = Date.now().toString()) {
    this._state = this._hash(seed);
  }

  public random (low: number = 0, high: number = 1): number {
    this._state = this._getNextState();

    const isDefaultRange: boolean = (low === 0 && high === 1);

    if (isDefaultRange) {
      return this._getStateRatio();
    }

    return this._getRangedRandomInteger(low, high);
  }

  private _getNextState (): number {
    return (this._state * 9999) % Number.MAX_SAFE_INTEGER;
  }

  private _getRangedRandomInteger (low: number, high: number): number {
    const seedRatio: number = this._getStateRatio();
    const range: number = high - low;

    return low + Math.floor(seedRatio * (range + 1));
  }

  private _getStateRatio (): number {
    return this._state / Number.MAX_SAFE_INTEGER;
  }

  private _hash (string: string): number {
    const length: number = string.length;
    const codes: number[] = [];
    let sum: number = 0;
    let output: string = '';

    for (let i = 0; i < length; i++) {
      const c: number = string.charCodeAt(i);

      codes[i] = c;
      sum += (c + 1);
    }

    sum *= sum;

    for (let i = 0; i < length; i++) {
      const c: number = codes[i];

      output += (((sum % c) ^ c) % c);
    }

    return Number(output) % Number.MAX_SAFE_INTEGER;
  }
}
