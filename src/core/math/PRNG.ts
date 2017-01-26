export default class PRNG {
	private seed: number = Date.now();

	public setSeed (string: string): void {
		this.seed = this.stringToSeed(string);
	}

	public random (low?: number, high?: number): number {
		this.seed = this.getNextSeed();

		return this.getSeedRatio();
	}

	private getNextSeed (): number {
		return (this.seed * 9999) % Number.MAX_SAFE_INTEGER;
	}

	private getSeedRatio (): number {
		return this.seed / Number.MAX_SAFE_INTEGER;
	}

	private stringToSeed (string: string): number {
		const len: number = string.length;
		let codes: Array<number> = [];
		let sum: number = 0;
		let output: string = '';

		for (let i = 0; i < len; i++) {
			let v = string.charCodeAt(i);
			codes[i] = v;
			sum += (v + 1);
		}

		sum *= sum;

		for (let i = 0; i < len; i++) {
			let v = codes[i];
			output += (((sum % v) ^ v) % v);
		}

		return Number(output) % Number.MAX_SAFE_INTEGER;
	}
}