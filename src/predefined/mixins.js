import {inputBaseProps as props} from './props';
import {defineValueOf} from '../utils/core';

export const inputExpandMixin = {
  props,
  data() {
    return {
      cacheValue: null,
    };
  },
  computed: {
    currentValue: {
      get(vm) {
        return vm.cacheValue;
      },
      set(value) {
        value = this.transformValue(value);
        this.cacheValue = value;
        this.$emit('input', value);
      },
    },
    isEditable() {
      const {viewonly, readonly, disabled} = this;
      return !(viewonly || readonly || disabled);
    },
  },
  watch: {
    value: {
      handler(val) {
        if (this.cacheValue !== val) {
          this.cacheValue = this.transformValue(val);
        }
      },
      immediate: true,
    },
  },
  methods: {
    transformValue: v => v,
  },
};

defineValueOf(inputExpandMixin, 'fromVm', function (vm) {
  const {
    placeholder, color, size, radius,
    viewonly, readonly, disabled, ghost,
    autofocus, inputClass,
  } = vm, data = {
    props: {
      color, size, viewonly, block: true,
      ghost, radius, autofocus,
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
