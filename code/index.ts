import { SubmarineDepthDetector } from './day01';

const SubmarineDepthData = new SubmarineDepthDetector('./sources/day01.txt');

const depthData = SubmarineDepthData.getDepthLines();

console.log(depthData);
