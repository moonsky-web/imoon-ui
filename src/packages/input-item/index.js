import {nameFactory, runtimeError} from '../../utils';
import {ImInput} from '../input';
import {contains} from '../../utils/predicates';

const subNs = 'input-item';
const creator = nameFactory(subNs), clsInputItem = creator();

const types = [
  'text', 'number', 'submit', 'reset',
  'password', 'checkbox', 'radio', 'file', 'hidden', 'image',
  'date', 'time', 'datetime',
  'datepicker', 'timepicker', 'datetimepicker'];

export const ImInputItem = {
  install(Vue) {
    creator.install(Vue, ImInputItem);
  },
  name: creator.thisName(),
  props: {
    type: {
      type: String,
      validator(value) {
        return contains(types, value);
      },
      default: 'text',
    },
  },
  render(h, context) {
    runtimeError('未完成任务......');
    const {data, children} = context;
    console.log(context);
    console.log(children);
    return h('div', {
      class: clsInputItem,
    }, [
      h(ImInput),
    ]);
  },
};
