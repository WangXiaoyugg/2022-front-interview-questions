/**
 * 
 */
function convert(str) {
    return str.replace(/[A-Z]/g, l => lowerCase(l))
}

function lowerCase(str) {
    let result = '';
    for (let char of str) {
        const charCode = char.charCodeAt();
        if (charCode <= 'Z'.charCodeAt() && charCode >= 'A'.charCodeAt()) {
            char = String.fromCharCode(charCode + 32);
        }
        result += char;
    }
    return result;
}

const res1 = convert("aCd");
console.log('res1:' , res1)
const res2 = convert("aCd123");
console.log('res2: ', res2);