import {toHexColor} from '../utils/color';

export function getRandomColor() {
  const r = parseInt(String(Math.random() * 10000 % 255));
  const g = parseInt(String(Math.random() * 10000 % 255));
  const b = parseInt(String(Math.random() * 10000 % 255));
  return toHexColor(`rgb(${r},${g},${b})`);
}
