'use strict';

const products = [
    {
        id: 1,
        name: 'Gaming Laptop',
        price: 65000,
        image: 'https://via.placeholder.com/150',
        categories: ['Laptops', 'Gaming'],
    },
    {
        id: 2,
        name: 'Wireless Mouse',
        price: 500,
        image: 'https://via.placeholder.com/150',
        categories: ['Accessories', 'Peripherals'],
    },
    {
        id: 3,
        name: 'Wifi Router',
        price: 1000,
        image: 'https://via.placeholder.com/150',
        categories: ['Accessories', 'Peripherals'],
    },
    {
        id: 4,
        name: 'iphone',
        price: 260090,
        image: 'https://via.placeholder.com/150',
        categories: ['Accessories', 'Peripherals'],
    },
];
let cart = [];
function renderCart() {
    const cartItemList = document.getElementById('cart-items');
    cartItemList.innerHTML = '';
    cart.forEach(function (cartItem) {
        //creat cart element
        const cartItemElement = document.createElement('li');
        cartItemElement.innerText = `${cartItem.name} - $${cartItem.price} x ${1}`;
        //append cartItemList
        cartItemList.appendChild(cartItemElement);
    })
}

function clearproductlistContainer(productlistContainer) {
    productlistContainer.innerHTML = '';
}

function getProductImage({ productName, productImage }) {
    const imageElement = document.createElement('img');
    imageElement.src = productImage;
    imageElement.alt = productName;
    imageElement.classList.add('w-full', 'mb-4');
    return imageElement;
}

function getProductName(productName) {
    const nameElement = document.createElement('h3');
    nameElement.innerText = productName;
    nameElement.classList.add('text-lg', 'font-semibold', 'mb-2');
    return nameElement;
}
function getproductPrice(productPrice) {
    const priceElement = document.createElement('h4');
    priceElement.innerText = '$' + productPrice;
    return priceElement;
}

function getbutton(product) {
    const btnElement = document.createElement('button');
    btnElement.innerText = 'Add to Cart';
    btnElement.classList.add(
        'bg-blue-500',
        'rounded',
        'text-white',
        'px-8',
        'py-1',
        'font-roboto',
        'mt-2',
        'hover:bg-blue-700',
    );
    btnElement.addEventListener('click', function () {
        if(isProductExistIncart(product.id)){
            alert ('This product is already in the cart.');
            return ;
        }
       
        //add the product to cart
        cart.push(product);
        console.log(cart);
        renderCart();
        // updateCartDisplay();
    });
    return btnElement;

}
// function isProductExistIncart(productId) {
//     const productIndex = cart.findIndex(function (product) {
//         // return product.id===productId ? true:false;
//         // return product.id===productId ;
//         if (product.id === productId) {
//             return true;
//         } else {
//             return false;
//         }
//     });
//     if (productIndex === -1) {
//         return false;
//     }
//     return true;
// }

// //arrow function
// const isProductExistIncart=(productId) =>
//     cart.findIndex((product)=>product.id===productId!==-1);


function isProductExistIncart(productId) {
    const productIndex = cart.findIndex(function (product) {
        // return product.id===productId ? true:false;
         return product.id===productId ;
    });
    return productIndex !==-1;
}
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = ''; // Clear previous cart contents
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.innerText = `${product.name} - $${product.price}`;
        cartContainer.appendChild(cartItem);
    });
}
function getProductCart(product) {
    const cart = document.createElement('div');
    cart.classList.add('bg-white', 'p-4', 'rounded', 'shadow');

    const productImage = getProductImage({
        productName: product.name,
        productImage: product.image
    });

    cart.appendChild(productImage);

    const productName = getProductName(product.name); // Corrected function name case
    cart.appendChild(productName);

    const productPrice = getproductPrice(product.price);
    cart.appendChild(productPrice);

    const addTocartbtn = getbutton(product);
    cart.appendChild(addTocartbtn);

    return cart;
}
// function checkOutButton(cart){
//     cart.innerText='';
// }

function renderProducts() {
    const productlistContainer = document.getElementById("product-list");
    clearproductlistContainer(productlistContainer);
    products.forEach(function (product) {
        // Render each product
        const productCart = getProductCart(product);
        productlistContainer.appendChild(productCart);

        const checkOut = document.getElementById('checkout-btn');
        checkOut.addEventListener('click', function (productlistContainer){
            productlistContainer.innerText='';
        })
    });
}

renderProducts();
