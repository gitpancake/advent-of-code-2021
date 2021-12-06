import { FileReader } from '../helpers/fileReader';

/**
down X increases your aim by X units.
up X decreases your aim by X units.
forward X does two things:
It increases your horizontal position by X units.
It increases your depth by your aim multiplied by X.
 */

type Direction = 'down' | 'forward' | 'up';

export class SubmarineMovement {
	data: Array<string> = [];

	constructor() {
		const _fileReader = new FileReader('./sources/day02.txt');

		this.data = _fileReader.ConvertFileToArray();
	}

	MovementStrategy() {
		const position = {
			depth: 0,
			horizontal: 0,
			aim: 0,
		};

		this.data.forEach((value: string) => {
			const rawPlot = value.split(' ');

			const movementType: Direction = rawPlot[0] as Direction;
			const movementValue: number = Number(rawPlot[1]);

			switch (movementType) {
				case 'down':
					position.aim += movementValue;
					return;
				case 'up':
					position.aim -= movementValue;
					return;
				case 'forward':
					position.horizontal += movementValue;
					position.depth += position.aim * movementValue;
					return;
				default:
					throw new Error('Uh oh! Not a valid movementType');
			}
		});

		return position.horizontal * position.depth;
	}
}
