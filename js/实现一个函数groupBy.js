function groupBy(data, by) {
    return data.reduce((map, cur) => {
        const key = by(cur);
        if (!map[key]) map[key] = []
        map[key].push(cur);
        return map;
    }, {})
}

const res = groupBy(
  [
    { id: 1, name: "山月", sex: "male" },
    { id: 2, name: "张三", sex: "female" },
    { id: 3, name: "李四", sex: "female" },
  ],
  (x) => x.sex
);

console.log(res);
