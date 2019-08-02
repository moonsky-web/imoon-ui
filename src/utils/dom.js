import {isArray, isPlainObject, isString, matchAny} from './predicates';

let index = 1000;

// event
export function onEvent(elem, type, callback, options = false) {
  elem.addEventListener(type, callback, options);
  return onEvent;
}

export function offEvent(elem, type, callback, options = false) {
  elem.removeEventListener(type, callback, options);
  return offEvent;
}

export function onCapture(elem, type, callback, options = true) {
  onEvent(elem, type, callback, options);
  return onCapture;
}

export function preventEvent(event) {
  event.preventDefault();
}

export function stopEvent(event) {
  event.stopPropagation();
}

export function clearEvent(event) {
  preventEvent(event);
  stopEvent(event);
}

// selector
export function select(selector, context) {
  return (context || document).querySelector(selector);
}

export function selectAll(selector, context) {
  return (context || document).querySelectorAll(selector);
}

// dom operation
export function createElement(tag) {
  return document.createElement(tag || 'div');
}

export function removeNode(node) {
  node.parentNode.removeChild(node);
}

export function appendChild(child, parent) {
  (parent || document.body).appendChild(child);
  return child;
}

export function prependChild(child, parent) {
  parent.insertBefore(child, parent.firstChild);
  return child;
}

// class
export function hasClass(elem, cls) {
  return elem && cls && elem.classList.contains(cls);
}

export function toClasses(className) {
  if (className && className.trim()) {
    let classes = className.split(/[\s+]/);
    return classes.length ? classes : false;
  }
  return false;
}

// attribute
export function getAttr(elem, name) {
  return elem.getAttribute(name);
}

export function setAttr(elem, name, value) {
  elem.setAttribute(name, value);
}

export function removeAttr(elem, name) {
  elem.removeAttribute(name);
}

export function hasAttr(elem, name) {
  return elem.hasAttribute(name);
}

// dataset
export function dataSet(elem, key, value) {
  elem.dataset[key] = value;
  return value;
}

export function dataGet(elem, key) {
  return elem.dataset[key];
}

// data
export function getData(elem, key) {
  return elem.dataset[key];
}

export function setData(elem, key, value) {
  elem.dataset[key] = value;
}

// style
export function getStyle(elem, prop, virtual) {
  return document.defaultView.getComputedStyle(elem, virtual)[prop];
}

export function getStyles(elem, ...props) {
  let ret = {};
  if (props && props.length) {
    if (props.length === 1 && Array.isArray(props[0])) {
      props = props[0];
    }
    let computed = document.defaultView.getComputedStyle(elem, null);
    for (let name of props) {
      ret[name] = computed[name];
    }
  }
  return ret;
}

export function setStyle(elem, name, value) {
  elem.style[name] = value;
}

export function setStyles(elem, obj) {
  let style = elem.style;
  for (let key in obj) {
    style[key] = obj[key];
  }
}

// z-index
export function nextZIndex() {
  return index++;
}

export function topZIndex(elem) {
  setStyle(elem, 'z-index', nextZIndex());
}

// other
const REGEXPS = ['left', 'top', 'right', 'bottom'].map(value => {
  return new RegExp(`[\\s+|;]${value}\\s*:`);
});

export function isDefinedOffset(css) {
  if (isString(css) && (css = css.trim())) {
    return matchAny(css, REGEXPS);
  } else if (isPlainObject(css)) {
    return (css.left && css.left !== 0) ||
      (css.right && css.right !== 0);
  } else if (isArray(css)) {
    for (let item of css) {
      if (isDefinedOffset(item)) {
        return true;
      }
    }
  }
  return false;
}
