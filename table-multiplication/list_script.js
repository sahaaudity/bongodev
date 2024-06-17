// const products = ['pen', 'book', 'eraser', 'pencil'];

// function showItem(item) {
//     console.log(item);
// }

// products.forEach(showItem);

// products.forEach(function(item, index) {
//     console.log(item + ' is ' + (index + 1) + ' no product');
// });

// const productsUpperList = products.map(function(item) {
//     return item.toUpperCase();
// });

// console.log(productsUpperList);

const num = [1, 2, 3, 4];
const num2 = num.map(function (item, i) {
    if (i % 2 === 0) {
        return item * 2;
    } else {
        return item * 3;
    }

});
console.log(num2); 
