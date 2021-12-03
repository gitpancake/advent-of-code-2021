import { DepthLine } from 'code/types/DepthLine';
import { FileReader } from '../helpers/fileReader';

export class SubmarineDepthDetector {
	data: Array<string> = [];

	constructor() {
		const _fileReader = new FileReader('./sources/day01.txt');

		this.data = _fileReader.ConvertFileToArray();
	}

	getDepthLines(): DepthLine[] {
		if (!this.data || !this.data.length) {
			throw new Error('No data supplied!');
		}

		let prevValue = 0;

		const messageDecider = (value: number) => {
			if (value > prevValue) {
				return '(increased)';
			} else {
				return '(decreased)';
			}
		};

		const test: DepthLine[] = this.data.map((line: string) => {
			const depth = Number(line);

			const increment = messageDecider(depth);

			prevValue = depth;

			return {
				depth,
				increment,
			};
		});

		return test;
	}

	calculateMovingIncreases() {
		let numInstances = 0;
		let prevValue = 0;

		const newData = this.data.map((_, index) => {
			if (index === 0) {
				return;
			}

			const firstWindow: number[] = this.data
				.slice(index, index + 3)
				.map((val) => Number(val));

			const reduction = firstWindow.reduce((a, b) => (a += b));

			return reduction;
		});

		newData.forEach((number) => {
			if (!number) {
				return;
			}

			if (number > prevValue) {
				numInstances++;
			}

			prevValue = number;
		});

		console.log(numInstances);
	}
}
