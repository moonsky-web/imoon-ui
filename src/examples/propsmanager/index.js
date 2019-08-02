import {nameFactory} from '../../utils';

const creator = nameFactory(false);
export const ImPropsManager = {
  name: creator.componentName('PropsManager'),
};

export default ImPropsManager;
