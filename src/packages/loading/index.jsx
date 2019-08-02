import {nameFactory} from '../../utils';
import {typeBoolean, typeString} from '../../utils/props';

const loading = 'loading',
  visible = 'visible',
  updateVisible = `update:${visible}`;
const factory = nameFactory(loading);
const clsLoad = factory(),
  clsLoadMain = factory('main'),
  clsLoadFix = factory('fixed'),
  clsLoadIcon = factory('icon');

export const ImLoading = {
  install(Vue) {
    factory.install(Vue, ImLoading);
  },
  name: factory.thisName(),
  functional: true,
  model: {
    prop: visible,
    event: updateVisible,
  },
  props: {
    [visible]: typeBoolean(),
    fixed: typeBoolean(),
    loadingText: typeString(`${loading}...`),
  },
  render(h, {props: {[visible]: show, fixed, loadingText}, children, data = {}}) {
    if (show) {
      const {class: cls = null} = data;
      return (
        <div {...{...data, class: [cls, clsLoad, {[clsLoadFix]: fixed}]}}>
          <div class={clsLoadMain}>
            {
              children && children.length ? children
                : (<div {...{class: clsLoadIcon}}/>)
            }
            <div>{loadingText}</div>
          </div>
        </div>
      );
    }
  },
};

export default ImLoading;
