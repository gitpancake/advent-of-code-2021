import { SubmarineDepthDetector } from './day01';
import { SubmarineMovement } from './day02';
import { DayThree } from './day03';
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

	withDay3() {
		const _dayThree = new DayThree();

		_dayThree.Part1();
		const dayThreePart2 = _dayThree.Part2();

		console.log(dayThreePart2);
	}

	build() {
		return this.depthLines;
	}
}

const _adventOfCode = new AdventOfCode();

_adventOfCode.withDay1();
_adventOfCode.withDay2();
_adventOfCode.withDay3();

_adventOfCode.build();
