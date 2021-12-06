import { FileReader } from '../helpers/fileReader';

/**
 Solution from : https://github.com/adrbin/aoc-typescript/blob/main/2021/3/puzzle.ts
 https://www.reddit.com/r/adventofcode/comments/r7r0ff/comment/hnd5gy6/?utm_source=share&utm_medium=web2x&context=3
 */

export class DayThree {
	data: Array<string> = [];

	constructor() {
		const _fileReader = new FileReader('./sources/day03.txt');

		this.data = _fileReader.ConvertFileToArray();
	}

	Part1() {
		let gammaBits: number[] = [];
		let epsilonBits: number[] = [];
		for (let i = 0; i < this.data[0].length; i++) {
			let count0 = 0;
			let count1 = 0;
			for (let j = 0; j < this.data.length; j++) {
				if (this.data[j][i] === '0') {
					count0++;
				} else {
					count1++;
				}
			}

			gammaBits[i] = count0 > count1 ? 0 : 1;
			epsilonBits[i] = count0 > count1 ? 1 : 0;
		}

		const gamma = parseInt(gammaBits.join(''), 2);
		const epsilon = parseInt(epsilonBits.join(''), 2);
		return gamma * epsilon;
	}

	calculateRating(input: string[], isOxygenGeneratorRating: boolean) {
		for (let i = 0; i < input[0].length && input.length > 1; i++) {
			let count0 = 0;
			let count1 = 0;

			for (let j = 0; j < input.length; j++) {
				if (input[j][i] === '0') {
					count0++;
				} else {
					count1++;
				}
			}

			let criteria: number;
			if (isOxygenGeneratorRating) {
				criteria = count0 > count1 ? 0 : 1;
			} else {
				criteria = count0 > count1 ? 1 : 0;
			}

			input = input.filter((x) => x[i] === criteria.toString());
		}

		return parseInt(input[0], 2);
	}

	Part2() {
		const oxygenGeneratorRating = this.calculateRating(this.data, true);
		const co2ScrubberRating = this.calculateRating(this.data, false);
		return oxygenGeneratorRating * co2ScrubberRating;
	}
}
