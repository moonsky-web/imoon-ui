import {nameFactory} from '../../utils';
import {ImInput} from '../input';
import {autoColorValid, autoSizeValid} from '../../utils/validator';
import {typeArray, typeBoolean} from '../../utils/props';
import {filterArray} from '../../utils/array';
import {ImTransition} from '../transition';

const subNs = 'AutoComplete', factory = nameFactory(subNs);
const clsAuto = factory(),
  clsShow = factory('show'),
  clsOuter = factory('outer'),
  clsInner = factory('inner'),
  clsUl = factory('ul'),
  clsLi = factory('li'),
  clsNone = factory('none'),
  clsSerial = factory('serial'),
  clsContent = factory('content'),
  clsOption = factory('option'),
  clsHover = factory('hover'),
  name = factory.thisName();

function getTextWithNone(option) {
  return String(option);
}

function getTextByValueKey(option, valueKey) {
  return option[valueKey];
}

function filterAll() {
  return true;
}

function doFilter(sourceOptions, filter, limit) {
  limit = limit < 1 ? sourceOptions.length : limit;
  return filterArray(sourceOptions, filter, limit);
}

function filterByValueKey(sourceOptions, valueKey, value, limit) {
  const filter = value ? item => getTextByValueKey(item, valueKey).indexOf(value) >= 0 : filterAll;
  return doFilter(sourceOptions, filter, limit);
}

function filterWithNone(sourceOptions, valueKey, value, limit) {
  const filter = value ? item => getTextWithNone(item, valueKey).indexOf(value) >= 0 : filterAll;
  return doFilter(sourceOptions, filter, limit);
}

function isEmpty(options) {
  return !(options && options.length);
}

export const ImAutoComplete = {
  install(Vue) {
    factory.install(Vue, ImAutoComplete);
  },
  name,
  props: {
    value: String,
    // input props
    placeholder: String,
    color: {
      type: String,
      validator: autoColorValid,
    },
    size: {
      type: String,
      validator: autoSizeValid,
    },
    viewonly: typeBoolean(),
    block: typeBoolean(),
    ghost: typeBoolean(),
    dashed: typeBoolean(),
    radius: typeBoolean(),
    autofocus: typeBoolean(),// 未实现
    readonly: typeBoolean(),
    disabled: typeBoolean(),
    inputClass: [String, Object, Array],

    optionsClass: [String, Object, Array],

    // clear
    clearable: typeBoolean(),

    // options
    options: typeArray(),
    valueKey: String,
    limit: {
      type: Number,
      default: 15,
    },
    hideSerial: typeBoolean(),
  },
  data() {
    return {
      visible: false,
      currentIndex: 0,
      cacheOptions: [],
      cacheValue: null,
    };
  },
  computed: {
    currentValue: {
      get() {
        return this.cacheValue;
      },
      set(value) {
        this.cacheValue = value;
        this.$emit('input', value);
      },
    },
    visibility() {
      return this.visible;
    },
    editable() {
      const {viewonly, readonly, disabled} = this;
      return !(viewonly || readonly || disabled);
    },
    getLimit() {
      const {options, limit} = this;
      return limit < 1 ? options.length : limit;
    },
    getFilter() {
      return this.valueKey ? filterByValueKey : filterWithNone;
    },
    getText() {
      const {valueKey} = this;
      return valueKey ? option => getTextByValueKey(option, valueKey) : getTextWithNone;
    },
    getOptions() {
      const {options, valueKey, currentValue, getLimit} = this;
      return this.cacheOptions = this.getFilter(options, valueKey, currentValue, getLimit);
    },
    getMaxIndex() {
      return this.cacheOptions.length - 1;
    },
  },
  render(h, context = this) {
    const {
      placeholder, color, size, radius,
      viewonly, readonly, disabled, ghost, dashed,
      autofocus, inputClass, optionsClass,
    } = context;

    const inputDef = {
      attrs: {placeholder}, props: {
        color, size, viewonly, block: true,
        ghost, dashed, radius, autofocus,
      },
      domProps: {value: context.currentValue},
    };
    if (inputClass) {
      inputDef.class = inputClass;
    }
    if (readonly) {
      inputDef.attrs.readonly = 'readonly';
    }
    if (disabled) {
      inputDef.attrs.disabled = 'disabled';
    }

    function optionMapper(option, index) {
      return (
        <li
          class={[clsLi, clsOption,
            {[clsHover]: context.currentIndex === index}]}
          onClick={() => context.onSelect(option)}>
          {context.hideSerial ? '' : (<span class={clsSerial}>{index + 1}. </span>)}
          <span class={clsContent}>{context.getText(option)}</span>
        </li>
      );
    }

    function toDefault(nowOpts) {
      return isEmpty(nowOpts) ? (<li class={[clsLi, clsNone]}>无选项</li>) : nowOpts;
    }

    const optionsMeta = context.getOptionsMeta();
    return (
      <div class={clsAuto}>
        <ImInput
          ref="input"
          {...inputDef}
          on-input={context.onInput}
          on-focus={context.onFocus}
          on-keydown={context.onKeydown}/>
        <ImTransition name={optionsMeta.name}>
          {
            context.visibility ? (
              <div
                style={optionsMeta.style}
                class={[clsOuter, optionsClass,
                  {[clsShow]: context.visibility}]}>
                <div class={clsInner}>
                  <ul class={clsUl}>
                    {toDefault(context.getOptions.map(optionMapper))}
                  </ul>
                </div>
              </div>
            ) : null
          }
        </ImTransition>
      </div>
    );
  },
  methods: {
    getOptionsMeta() {
      const {$refs: {input}} = this;
      if (input) {
        const rect = input.getBoundingClientRect();
        const {innerWidth: winW, innerHeight: winH} = window, style = {};
        const isBottom = winH - rect.bottom < 200;
        style[isBottom ? 'bottom' : 'top'] = '125%';
        style[winW - rect.right < 100 ? 'right' : 'left'] = '0';
        return {style, name: isBottom ? 'slideDown' : 'slideUp'};
      } else {
        return {style: {top: '125%', left: '0'}, name: 'slideUp'};
      }
    },
    resetIndex(value = 0) {
      this.currentIndex = value;
    },
    onFocus() {
      if (this.editable) {
        this.visible = true;
      }
    },
    onBlur() {
      if (this.editable) {
        this.visible = false;
        this.resetIndex();
      }
    },
    incrementIdx() {
      const {currentIndex, getMaxIndex} = this;
      if (currentIndex < getMaxIndex) {
        this.currentIndex++;
      } else {
        this.resetIndex();
      }
    },
    decrementIdx() {
      const {currentIndex} = this;
      if (currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.resetIndex(this.getMaxIndex);
      }
    },
    onKeydown(e) {
      const self = this, {keyCode} = e;
      switch (keyCode) {
        case 40:
          self.incrementIdx();
          break;
        case 38:
          self.decrementIdx();
          break;
        case 13:
          self.onSelect(self.cacheOptions[self.currentIndex]);
          break;
        default:
          break;
      }
    },
    onSelect(option) {
      this.currentValue = this.getText(option);
      this.$emit('onSelect', option);
      this.$refs.input.focus();
      this.onBlur();
    },
    onInput(value) {
      if (!this.visible) {
        this.visible = true;
      }
      this.currentValue = value;
    },
  },
  mounted() {
    document.addEventListener('click', ({target}) => {
      if (!this.$el.contains(target)) {
        this.onBlur();
      }
    }, true);
  },
};

export default ImAutoComplete;
