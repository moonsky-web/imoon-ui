import {nameFactory, READONLY} from '../../utils';
import {ImInputClearable} from '../input';
import {typeArray, typeBoolean} from '../../utils/props';
import {filterArray} from '../../utils/array';
import {ImTransition} from '../transition';
import {inputExpandMixin} from '../../predefined/mixins';

const subNs = 'AutoComplete',
  factory = nameFactory(subNs);
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

function toDefault(nowOpts) {
  return isEmpty(nowOpts) ? (<li class={[clsLi, clsNone]}>无选项</li>) : nowOpts;
}

export const ImAutoComplete = {
  install(Vue) {
    factory.install(Vue, ImAutoComplete);
  },
  name,
  mixins: [inputExpandMixin],
  props: {
    optionsClass: [String, Object, Array],

    // clear
    clearable: typeBoolean(true),

    // options
    options: typeArray(),
    valueKey: String,
    limit: {
      type: Number,
      default: 10,
    },
    showSerial: typeBoolean(true),
  },
  data() {
    return {
      visible: false,
      currentIndex: 0,
      cacheOptions: [],
    };
  },
  computed: {
    visibility(vm) {
      return vm.visible;
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
    let {block} = context;

    function optionMapper(option, index) {
      return (
        <li
          class={[clsLi, clsOption,
            {[clsHover]: context.currentIndex === index}]}
          onClick={() => context.onSelect(option)}>
          {context.showSerial ? (<span class={clsSerial}>{index + 1}. </span>) : ''}
          <span class={clsContent}>{context.getText(option)}</span>
        </li>
      );
    }

    const data = inputExpandMixin.fromVm(context);
    const optionsMeta = context.getOptionsMeta();
    data.props.clearable = context.clearable;
    return (
      <div class={[clsAuto, {'display-block': block}]}>
        <ImInputClearable
          ref="input" {...data}
          on-input={context.onInput}
          on-focus={context.onFocus}
          on-keydown={context.onKeydown}/>
        <ImTransition name={optionsMeta.name}>
          {
            context.visibility ? (
              <div
                style={optionsMeta.style}
                class={[clsOuter, context.optionsClass,
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
    getRefInput() {
      const {$refs: {input: {$el} = READONLY} = READONLY} = this;
      return $el;
    },
    getOptionsMeta() {
      const input = this.getRefInput();
      if (input) {
        const rect = input.getBoundingClientRect();
        const {innerWidth: winW, innerHeight: winH} = window, style = {};
        const isBottom = winH - rect.bottom < 250;
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
      if (this.isEditable) {
        this.visible = true;
      }
    },
    onBlur() {
      if (this.isEditable) {
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
      this.getRefInput().focus();
      this.onBlur();
    },
    onInput(value) {
      this.visible = true;
      this.currentValue = value;
    },
  },
  mounted() {
    const self = this;
    document.addEventListener('click', function ({target}) {
      if (!self.$el.contains(target)) {
        self.onBlur();
      }
    }, true);
  },
};

export default ImAutoComplete;
