import {nameFactory, READONLY} from '../../utils';
import {ImInputClearable} from '../input';
import {typeArray, typeBoolean} from '../../utils/props';
import {filterArray} from '../../utils/array';
import {ImTransition} from '../transition';
import {inputExpandMixin} from '../../predefined/mixins';
import {clsGap, clsGapBlock} from '../../utils/class';
import {contains} from '../../utils/predicates';
import {proxyDefaultValue} from '../../utils/proxy';

const subNs = 'AutoComplete', factory = nameFactory(subNs),
  PLACEMENTS = (() => {
    const leftBottom = () => ({style: {left: '0', top: '125%'}, name: 'slideUp'}),
      leftTop = () => ({style: {left: '0', bottom: '125%'}, name: 'slideDown'}),
      rightBottom = () => ({style: {right: '0', top: '125%'}, name: 'slideUp'}),
      rightTop = () => ({style: {right: '0', bottom: '125%'}, name: 'slideDown'}),
      auto = (self, input) => {
        if ((input = self.getRefInput())) {
          const rect = input.getBoundingClientRect();
          const {innerWidth: winW, innerHeight: winH} = window;
          const first = winW - rect.right < 100 ? 'r' : 'l',
            last = winH - rect.bottom < 250 ? 't' : 'b';
          return placements[`${first}${last}`]();
        }
        return leftBottom();
      };
    const placements = {
      leftTop, leftBottom, rightTop, rightBottom, auto,
      lt: leftTop, lb: leftBottom, rt: rightTop, rb: rightBottom,
    };
    return proxyDefaultValue(placements, auto);
  })(), placementsNames = Object.keys(PLACEMENTS);
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
  clsHover = factory('hover');

function getTextWithNone(option) {
  return String(option);
}

function getTextByValueKey(option, prop) {
  return option[prop];
}

function filterAll() {
  return true;
}

function doFilter(sourceOptions, filter, limit) {
  limit = limit < 1 ? sourceOptions.length : limit;
  return filterArray(sourceOptions, filter, limit);
}

function filterByValueKey(sourceOptions, prop, value, limit) {
  const filter = value ? item => getTextByValueKey(item, prop).indexOf(value) >= 0 : filterAll;
  return doFilter(sourceOptions, filter, limit);
}

function filterWithNone(sourceOptions, prop, value, limit) {
  const filter = value ? item => getTextWithNone(item, prop).indexOf(value) >= 0 : filterAll;
  return doFilter(sourceOptions, filter, limit);
}

function isEmpty(options) {
  return !(options && options.length);
}

function toDefault(h, nowOpts) {
  return isEmpty(nowOpts) ? (<li class={[clsLi, clsNone]}>无选项</li>) : nowOpts;
}

export const ImAutoComplete = {
  install(Vue) {
    factory.install(Vue, ImAutoComplete);
  },
  name: factory.thisName(),
  mixins: [inputExpandMixin],
  props: {
    optionsClass: [String, Object, Array],

    // clear
    clearable: typeBoolean(true),

    // options
    options: typeArray(),
    prop: String,
    limit: {
      type: Number,
      default: 10,
    },
    showSerial: typeBoolean(true),
    placement: {
      type: String,
      validator(value) {
        return contains(placementsNames, value);
      },
    },
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
    limitVal() {
      const {options, limit} = this;
      return limit < 1 ? options.length : limit;
    },
    getFilter() {
      return this.prop ? filterByValueKey : filterWithNone;
    },
    getText() {
      const {prop} = this;
      return prop ? option => getTextByValueKey(option, prop) : getTextWithNone;
    },
    getOptions() {
      const {options, prop, currentValue} = this;
      return this.cacheOptions = this.getFilter(options, prop, currentValue, this.limitVal);
    },
    getMaxIndex() {
      return this.cacheOptions.length - 1;
    },
    keypressMap() {
      const self = this;
      return {
        40: () => self.incrementIdx(),
        38: () => self.decrementIdx(),
        13: () => self.onSelect(self.cacheOptions[self.currentIndex]),
        27: () => self.onBlur(),
      };
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
      <div class={[clsAuto, clsGap, {[clsGapBlock]: block}]}>
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
                    {toDefault(h, context.getOptions.map(optionMapper))}
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
      return PLACEMENTS[this.placement](this);
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
    onKeydown({keyCode}) {
      const callback = this.keypressMap[keyCode];
      if (callback) {
        callback();
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
    onDomClick({target}) {
      if (!this.$el.contains(target)) {
        this.onBlur();
      }
    },
  },
  mounted() {
    const self = this;
    document.addEventListener('click', self.onDomClick, true);
  },
  destroyed() {
    document.removeEventListener('click', self.onDomClick, true);
  },
};

export default ImAutoComplete;
