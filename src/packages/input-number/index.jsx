import {nameFactory, runtimeError} from '../../utils';
import {inputExpandMixin} from '../../predefined/mixins';
import {isDef} from '../../utils/predicates';
import {ImButton} from '../button';
import {ImInput} from '../input';

const subNs = 'InputNumber';
const factory = nameFactory(subNs), name = factory.thisName();

const clsNumber = factory();
const clsBtn = factory('btn');
const clsBox = factory('box');

function otherPrecision(value, precision) {
  return value * Math.pow(10, precision) % 1 !== 0;
}

const precisions = [
  v => v % 1 !== 0,
  v => v * 10 % 1 !== 0,
  v => v * 100 % 1 !== 0,
  v => v * 1000 % 1 !== 0,
  v => v * 10000 % 1 !== 0,
  v => v * 100000 % 1 !== 0,
];

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
      return isDef(step) ? step : this.getStep(this.precision);
    },
  },
  data() {
    return {
      errorMessage: '',
    };
  },
  render(h, context = this) {
    const {color} = context;
    const inputData = inputExpandMixin.fromVm(context);
    inputData.attrs.type = 'number';
    inputData.attrs.step = context.innerStep;
    inputData.attrs.max = context.max;
    inputData.attrs.min = context.min;
    return (
      <div class={clsNumber}>
        <ImInput
          ref="input"
          {...inputData}
          on-input={context.onInput}
          on-blur={context.onBlur}
        />
        <div class={clsBox}>
          <ImButton
            onClick={context.onStepDown}
            color={color}
            text={true}>-</ImButton>
          <ImButton
            onClick={context.onStepUp}
            color={color}
            text={true}>+</ImButton>
        </div>
      </div>
    );
  },
  methods: {
    getStep(precision) {
      return 1 / (Math.pow(10, precision));
    },
    computeInitialValue(value) {
      let error = '';
      const {max, min, precision} = this;
      if (isDef(max) && value > max) {
        error += ` Value must less than the maximum (prop of max): ${max}, but got: ${value}.`;
      }
      if (isDef(min) && value < min) {
        error += ` Value must greater than the minimum (prop of min): ${min}, but got: ${value}.`;
      }
      if (precision > 0 && (precisions[precision] || otherPrecision)(value, precision)) {
        error += ` The precision: ${this.getStep(precision)}, but got: ${value}.`;
      }
      if (error) {
        runtimeError(error);
        this.errorMessage = error;
      }
      return value;
    },
    onStepUp() {
      this.$refs.input.stepUp();
    },
    onStepDown() {
      this.$refs.input.stepDown();
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
