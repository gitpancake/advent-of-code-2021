import { SubmarineDepthDetector } from './day01';
import { SubmarineMovement } from './day02';

class AdventOfCode {
	depthLines: {}[] = [];

	withDay1() {
		const SubmarineDepthData = new SubmarineDepthDetector();

		this.depthLines = SubmarineDepthData.getDepthLines();

		SubmarineDepthData.calculateMovingIncreases();
	}

	withDay2() {
		const SubmarineMover = new SubmarineMovement();

		SubmarineMover.MovementStrategy();
	}

	build() {
		return this.depthLines;
	}
}

const _adventOfCode = new AdventOfCode();

_adventOfCode.withDay1();
_adventOfCode.withDay2();
_adventOfCode.build();
