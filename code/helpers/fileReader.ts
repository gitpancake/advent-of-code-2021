const fs = require('fs');

export class FileReader {
	file: string = '';

	constructor(dataSource: string) {
		this.file = fs.readFileSync(dataSource, 'UTF-8');
	}

	ConvertFileToArray(): string[] {
		if (!this.file) {
			return [];
		}

		return this.file.split(/\r?\n/);
	}
}
