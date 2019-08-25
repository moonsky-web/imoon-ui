import {nameFactory} from './index';

const gapFactory = nameFactory('itemGap'),
  clsGapBlock = gapFactory('block'),
  clsGap = gapFactory();

export function classBlock(block) {
  return {[clsGapBlock]: block, [clsGap]: true};
}

export const inputSizeFactory = nameFactory('inputSize');