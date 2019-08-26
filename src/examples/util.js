import {valueOf} from '../utils/color';

export function getRandomColor() {
  const r = parseInt(String(Math.random() * 10000 % 255));
  const g = parseInt(String(Math.random() * 10000 % 255));
  const b = parseInt(String(Math.random() * 10000 % 255));
  return valueOf(`rgb(${r},${g},${b})`);
}