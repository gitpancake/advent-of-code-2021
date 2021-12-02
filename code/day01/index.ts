const fs = require('fs');

export class SubmarineDepthDetector {
	data = [];

	constructor(dataFile: string) {
		const rawData = fs.readFileSync(dataFile, 'UTF-8');
		this.data = rawData.split(/\r?\n/);
	}

	getDepthLines() {
		if (!this.data || !this.data.length) {
			throw new Error('No data supplied!');
		}

		let prevValue = 0;

		return this.data.map((line: string) => {
			const message = Number(line) > prevValue ? '(increased)' : '(decreased)';

			prevValue = Number(line);

			const newValue = `${line} ${message}`;

			return newValue;
		});
	}
}
