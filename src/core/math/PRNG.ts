export default class PRNG {
	private seed: number = Date.now();

	public setSeed (string: string): void {
		this.seed = this.stringToSeed(string);
	}

	public random (low: number = 0, high: number = 1): number {
		this.seed = this.getNextSeed();

		const isDefaultRange: boolean = (low === 0 && high === 1);

		if (isDefaultRange) {
			return this.getSeedRatio();
		}

		return this.getRangedRandomInteger(low, high);
	}

	private getRangedRandomInteger (low: number, high: number): number {
		const seedRatio: number = this.getSeedRatio();
		const range: number = high - low;

		return low + Math.floor(seedRatio * (range + 1));
	}

	private getNextSeed (): number {
		return (this.seed * 9999) % Number.MAX_SAFE_INTEGER;
	}

	private getSeedRatio (): number {
		return this.seed / Number.MAX_SAFE_INTEGER;
	}

	private stringToSeed (string: string): number {
		const length: number = string.length;
		let codes: Array<number> = [];
		let sum: number = 0;
		let output: string = '';

		for (let i = 0; i < length; i++) {
			let c: number = string.charCodeAt(i);
			codes[i] = c;
			sum += (c + 1);
		}

		sum *= sum;

		for (let i = 0; i < length; i++) {
			let c: number = codes[i];
			output += (((sum % c) ^ c) % c);
		}

		return Number(output) % Number.MAX_SAFE_INTEGER;
	}
}