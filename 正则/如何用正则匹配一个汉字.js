// 中文unicode范围 [\u4e00-\u9fa5] 
const pattern = /[\u4e00-\u9fa5]+/g
const contents = "[微笑][撇嘴][发呆][得意][流泪]"

const content = contents.match(pattern);
console.log(content)