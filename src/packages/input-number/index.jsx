import {nameFactory, runtimeError} from '../../utils';
import {inputExpandMixin} from '../../predefined/mixins';
import {isDef} from '../../utils/predicates';
import {ImInputClearable} from '../input';
import {proxyDefaultValue} from '../../utils/proxy';

const subNs = 'InputNumber';
const factory = nameFactory(subNs), name = factory.thisName();

const clsNumber = factory();
const clsBtn = factory('button'),
  clsPlus = factory('plus'),
  clsMinus = factory('minus');

function getPrecisionStep(precision) {
  return 1 / (Math.pow(10, precision));
}

const precisions = proxyDefaultValue([
  v => v % 1 !== 0,
  v => v * 10 % 1 !== 0,
  v => v * 100 % 1 !== 0,
  v => v * 1000 % 1 !== 0,
  v => v * 10000 % 1 !== 0,
  v => v * 100000 % 1 !== 0,
], (value, precision) => value * Math.pow(10, precision) % 1 !== 0);

export const ImInputNumber = {
  install(Vue) {
    factory.install(Vue, ImInputNumber);
  },
  name,
  mixins: [inputExpandMixin],
  props: {
    max: Number,
    min: Number,
    step: Number,
    precision: {
      type: Number,
      validator: value => value >= 0,
      default: 0,
    },
  },
  computed: {
    innerStep() {
      const {step} = this;
      return isDef(step) ? step : getPrecisionStep(this.precision);
    },
  },
  data() {
    return {
      errorMessage: '',
    };
  },
  render(h, context = this) {
    const {color, onInput, onBlur, onStepUp, onStepDown} = context;
    const inputData = inputExpandMixin.fromVm(context);
    inputData.attrs.type = 'number';
    inputData.attrs.step = context.innerStep;
    inputData.attrs.max = context.max;
    inputData.attrs.min = context.min;
    return (
      <div class={clsNumber}>
        <ImInputClearable
          ref="input"
          {...inputData}
          on-input={onInput}
          on-blur={onBlur}/>
        <div
          class={[clsBtn, clsPlus]}
          onClick={onStepUp}/>
        <div
          class={[clsBtn, clsMinus]}
          onClick={onStepDown}/>
      </div>
    );
  },
  methods: {
    transformValue(value) {
      let error = '';
      const {max, min, precision} = this;
      if (isDef(max) && value > max) {
        error += ` Value must less than the maximum (prop of max): ${max}, but got: ${value}.`;
      }
      if (isDef(min) && value < min) {
        error += ` Value must greater than the minimum (prop of min): ${min}, but got: ${value}.`;
      }
      if (precision > 0 && precisions[precision](value, precision)) {
        error += ` The precision: ${getPrecisionStep(precision)}, but got: ${value}.`;
      }
      if (error) {
        runtimeError(error);
        this.errorMessage = error;
      }
      return value;
    },
    getRefInput() {
      return this.$refs.input.getRefInput();
    },
    onStepUp() {
      let input = this.getRefInput();
      input.stepUp();
      this.onInput(input.value);
    },
    onStepDown() {
      let input = this.getRefInput();
      input.stepDown();
      this.onInput(input.value);
    },
    onBlur() {
      const {min, max, currentValue: val} = this;
      if (val > max) {
        this.currentValue = max;
      } else if (val < min) {
        this.currentValue = min;
      }
    },
    onInput(value) {
      this.currentValue = value;
    },
  },
};

export default ImInputNumber;
