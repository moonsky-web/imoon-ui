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
  watch: {
    value(val) {
      this.cacheValue = val;
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
    props: {
      color, size, viewonly, block: true,
      ghost, dashed, radius, autofocus,
      placeholder, value: vm.currentValue,
    },
    attrs: {},
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
