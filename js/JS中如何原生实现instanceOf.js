/**
 * 
 */

function fakeInstanceOf(instance, parent) {
    // 不是引用型的对象，直接返回false
    if ((typeof instance !== "object" && typeof instance !== "function") || instance === null) {
        return false;
    }
    let proto = instance.__proto__;
    let prototype = parent.prototype;
    while(proto) {
        if (proto === prototype) {
            return true;
        }
        proto = proto.__proto__;
    }
    return false;
}

//=> true
// let res1 = fakeInstanceOf([], Array);
// console.log('res1: ' + res1);

// //=> true
// let res2 = fakeInstanceOf([], Object);
// console.log('res2: ' + res2);

// //=> true
// let res3 = fakeInstanceOf((x) => x, Object);
// console.log('res3: ' + res3);

//=> false
let res4 = fakeInstanceOf("hello", Object);
console.log('res4: ' + res4);
