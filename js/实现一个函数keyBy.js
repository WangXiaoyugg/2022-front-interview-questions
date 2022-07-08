// Output: {
//   "1": {
//     "id": 1,
//     "name": "山月"
//   },
//   "2": {
//     "id": 2,
//     "name": "shanyue"
//   }
// }
const res = keyBy(
  [
    { id: 1, name: "山月" },
    { id: 2, name: "shanyue" },
  ],
  (x) => x.id
);

console.log(res)

function keyBy(data, by) {
    return data.reduce((map, cur) => {
        const key = by(cur);
        map[key] = cur;
        return map; 
    }, {})
}
