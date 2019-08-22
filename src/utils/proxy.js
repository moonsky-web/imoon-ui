/**
 * 给对象定义默认值
 * @param target
 * @param defaultVal
 * @returns {*}
 */
export function proxyDefaultValue(target, defaultVal) {
  return new Proxy(target, {
    get(obj, key) {
      return obj[key] || defaultVal;
    },
    set(obj, key, value) {
      obj[key] = value;
    },
  });
}