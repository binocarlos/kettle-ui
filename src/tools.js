export function mergeStyles(basestyles = {}, overrides = {}){
  var ret = {}
  Object.keys(basestyles).forEach(function(key){
    ret[key] = Object.assign({}, basestyles[key], overrides[key])
  })
  return ret
}