/**
 * 例子： 1.3e-19, 1.6
 * 
 * 解决方案，第三方包处理
 */

function splitNumber(n) {
    if (typeof n === 'number' && !isNaN(n)) {
        const nStr = n.toString();
        const eIndex = nStr.indexOf('e-');
        if (eIndex > -1) {
            let result = nStr.split('e-');
            return [
                '0',
                `0.${'0'.repeat(Number(result[1]) - 1)}${result[0].replace('.', '')}`
            ]
        } else {
            let result = nStr.split('.');
            if (result.length === 1) {
                result.push('0')
            }
            return [
                result[0],
                `0.${result[1]}`
            ]
        }
    }
    

    return ['0', '0'];
}



const res1 = splitNumber(1e10);
console.log(res1);