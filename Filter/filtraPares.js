function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuAray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuAray));