const NONE = {}, EMPTY = [];

export function filterNamedSlots(children, name) {
  return (children || []).filter(({data: {slot} = NONE} = NONE) => slot === name);
}

export function findNamedSlot(children, name) {
  const nodes = (children || EMPTY);
  for (let node of nodes) {
    let {data: {slot} = NONE} = node;
    if (slot === name) {
      return node;
    }
  }
  return null;
}

export function childrenGroupBy(children, grouper) {
  const nodes = (children || EMPTY), grouped = {};
  nodes.forEach((node, index) => {
    let key = grouper.call(node, node, index);
    let list = grouped[key];
    if (!list) {
      grouped[key] = (list = []);
    }
    list.push(node);
  });
  return grouped;
}
