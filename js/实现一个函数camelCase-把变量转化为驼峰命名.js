/**
 * get-element-by-id <=> getElementById
 */

function toCamelCase(str) {
    return str.replace(/-([a-zA-Z])/g, function(all, p1){
        return p1.toUpperCase()
    })
}

function toKebabCase(str) {
    return str.replace(/[a-z]([A-Z])/g, function(all, p1) {
        return all[0] + '-' + p1.toLowerCase()
    })
}

console.log(toCamelCase('get-element-by-id'))
console.log(toKebabCase('getElementById'))
