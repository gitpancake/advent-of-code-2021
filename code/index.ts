import { SubmarineDepthDetector } from './day01';

class AdventOfCode {
	depthLines: {}[] = [];

	withDay1() {
		const SubmarineDepthData = new SubmarineDepthDetector();

		this.depthLines = SubmarineDepthData.getDepthLines();

		SubmarineDepthData.calculateMovingIncreases();
	}

	build() {
		return this.depthLines;
	}
}

const _adventOfCode = new AdventOfCode();

_adventOfCode.withDay1();

_adventOfCode.build();
