import { FileReader } from '../helpers/fileReader';

/**
down X increases your aim by X units.
up X decreases your aim by X units.
forward X does two things:
It increases your horizontal position by X units.
It increases your depth by your aim multiplied by X.
 */

export class DayThree {
	data: Array<string> = [];

	constructor() {
		const _fileReader = new FileReader('./sources/day03.txt');

		this.data = _fileReader.ConvertFileToArray();
	}

	Part1() {
		// go through each element in the array
		//
		let numZeroes = 0;
		let numOnes = 0;

		let result = '';

		this.data[0].split('').forEach((_, primaryIndex) => {
			numZeroes = 0;
			numOnes = 0;

			this.data.forEach((secondaryInput) => {
				const splitInput = secondaryInput.split('');

				if (splitInput[primaryIndex] === '1') {
					numOnes++;
				} else {
					numZeroes++;
				}
			});

			if (numZeroes > numOnes) {
				result += '0';
			} else {
				result += '1';
			}
		});

		return result;
	}
}
