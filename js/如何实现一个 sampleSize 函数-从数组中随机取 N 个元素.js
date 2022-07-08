// 洗牌算法，随机打乱数组
const shuffle = (arr) => arr.sort((x, y) => Math.random() - 0.5);
const simpleSize = (arr, n) => shuffle(arr).slice(0, n)


const arr = Array.from({length: 100}).map((_, index) => index+1);
const res = simpleSize(arr, 10);
console.log(res);