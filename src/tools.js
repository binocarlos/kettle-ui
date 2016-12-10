export const mergeStyles = (basestyles = {}, overrides = {}) => {
  var ret = {}
  Object.keys(basestyles).forEach(function(key){
    ret[key] = Object.assign({}, basestyles[key], overrides[key])
  })
  return ret
}

export const nameSort = (a, b) => {
  if (getItemName(a) < getItemName(b)) return -1;
  if (getItemName(a) > getItemName(b)) return 1;
  return 0;
}