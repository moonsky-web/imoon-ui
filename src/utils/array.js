const PROTO = Array.prototype;

const INDEX_OF = PROTO.indexOf;

const PUSH = PROTO.push;

const JOIN = PROTO.join;

const SLICE = PROTO.slice;

const SPLICE = PROTO.splice;

export function indexOf(arr, item) {
  return INDEX_OF.call(arr, item);
}

export function arrPush(arr, item) {
  return PUSH.call(arr, item);
}

export function arrJoin(arr, sep) {
  return JOIN.call(arr, sep || '');
}

export function arrSlice(arr, st, end) {
  return SLICE.call(arr, st, end);
}

export function arrSplice(arr, st, cnt) {
  return SPLICE.call(arr, st, cnt);
}

export function removeIndexOf(arr, index) {
  return SPLICE.call(arr, index, 1);
}

export function removeArrItem(arr, item) {
  let index = indexOf(arr, item);
  return index < 0 ? '' : removeIndexOf(arr, index);
}

export function filterArray(array, filter, limit = array.length) {
  const length = array.length;
  if (limit >= length) {
    return array.filter(filter);
  } else {
    const filtered = [];
    for (let i = 0; i < length; i++) {
      if (filter(array[i])) {
        if (filtered.push(array[i]) >= limit) {
          return filtered;
        }
      }
    }
    return filtered;
  }
}
