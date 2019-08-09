import {inputBaseProps as props} from './props';
import {defineValueOf} from '../utils/core';

export const inputExpandMixin = {
  props,
  data() {
    return {
      cacheValue: this.computeInitialValue(this.value),
    };
  },
  computed: {
    currentValue: {
      get(vm) {
        return vm.cacheValue;
      },
      set(value) {
        value = this.computeOriginalValue(value);
        this.cacheValue = value;
        this.$emit('input', value);
      },
    },
  },
  methods: {
    computeInitialValue: v => v,
    computeOriginalValue: v => v,
  },
};

defineValueOf(inputExpandMixin, 'fromVm', function (vm) {
  const {
    placeholder, color, size, radius,
    viewonly, readonly, disabled, ghost, dashed,
    autofocus, inputClass,
  } = vm, data = {
    attrs: {placeholder}, props: {
      color, size, viewonly, block: true,
      ghost, dashed, radius, autofocus,
    },
    domProps: {value: vm.currentValue},
  };
  if (inputClass) {
    data.class = inputClass;
  }
  if (readonly) {
    data.attrs.readonly = 'readonly';
  }
  if (disabled) {
    data.attrs.disabled = 'disabled';
  }
  return data;
}, false);
