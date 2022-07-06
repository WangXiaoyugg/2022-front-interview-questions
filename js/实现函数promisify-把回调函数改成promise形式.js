// 实现promisify
const promisify = (fn) => (...args) => {
    return new Promise((resolve, reject) => {
        fn.call(this, ...args, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

var func1 = function (a, b, c, callback) {
  let rst = a + b + c;
  callback(null, rst);
};

var func2 = promisify(func1);
func2(1, 2, 3).then((rst) => {
  console.log("rst", rst);
}); //输出6


