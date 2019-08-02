import {eachObject, nameFactory} from '../../utils';
import {transitionHooks} from '../../default';
import {camelcase, camelcaseToHyphen} from '../../utils/str';
import {typeBoolean} from '../../utils/props';

const transition = 'transition', anim = 'anim', defaultName = 'fade';
const namesCached = {}, eventsHook = {},
  creator = nameFactory(transition),
  animCreator = nameFactory(anim);

[defaultName, 'slideDown', 'slideUp'].forEach(name => {
  const className = animCreator(name = camelcaseToHyphen(name));
  namesCached[camelcase(name)] = className;
  namesCached[name] = className;
});

eachObject(transitionHooks, (optionalName, vueKey) => {
  if (Array.isArray(optionalName)) {
    optionalName.forEach(name => {
      eventsHook[name] = vueKey;
    });
  } else {
    eventsHook[optionalName] = vueKey;
  }
});

export const ImTransition = {
  install(Vue) {
    creator.install(Vue, ImTransition);
  },
  name: creator.thisName(),
  functional: true,
  props: {
    name: {
      type: String,
      validator(value) {
        return !!namesCached[value];
      },
      default: defaultName,
    },
    appear: typeBoolean(true),
  },
  render(h, {children, props, data, listeners}) {
    const {name, appear} = props, on = {};
    eachObject(listeners, (fn, key) => {
      on[eventsHook[key]] = fn;
    });
    return h(transition, {
      ...data, on,
      props: {
        appear, name: namesCached[name],
      },
    }, children);
  },
};
