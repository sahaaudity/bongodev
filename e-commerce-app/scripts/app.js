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
        name: 'iPhone',
        price: 260090,
        image: 'https://via.placeholder.com/150',
        categories: ['Accessories', 'Peripherals'],
    },
];

let cart = [];
let selectedCategory = null;

function renderCart() {
    const cartItemList = document.getElementById('cart-items');
    cartItemList.innerHTML = '';
    cart.forEach(function (cartItem) {
        // Create cart element
        const cartItemElement = document.createElement('li');
        cartItemElement.innerText = `${cartItem.name} - $${cartItem.price} x ${1}`;

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'remove';
        removeBtn.classList.add('text-red-500', 'ml-2');
        removeBtn.addEventListener('click', function () {
            removeProductFromcart(cartItem.id);
        });
        cartItemElement.appendChild(removeBtn);

        cartItemList.appendChild(cartItemElement);
    });
}

function removeProductFromcart(productId) {
    const productIndex = cart.findIndex(function (product) {
        return product.id === productId;
    });
    if (productIndex === -1) {
        alert('Product is not in the cart');
        return;
    } else {
        cart.splice(productIndex, 1); // Use splice to remove the item
        renderCart();
    }
}

function clearProductListContainer(productListContainer) {
    productListContainer.innerHTML = '';
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

function getProductPrice(productPrice) {
    const priceElement = document.createElement('h4');
    priceElement.innerText = '$' + productPrice;
    return priceElement;
}

function getButton(product) {
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
        if (isProductExistInCart(product.id)) {
            alert('This product is already in the cart.');
            return;
        }

        // Add the product to cart
        cart.push(product);
        console.log(cart);
        renderCart();
    });
    return btnElement;
}

function isProductExistInCart(productId) {
    const productIndex = cart.findIndex(function (product) {
        return product.id === productId;
    });
    return productIndex !== -1;
}

function getProductCart(product) {
    const cart = document.createElement('div');
    cart.classList.add('bg-white', 'p-4', 'rounded', 'shadow');

    const productImage = getProductImage({
        productName: product.name,
        productImage: product.image
    });

    cart.appendChild(productImage);

    const productName = getProductName(product.name);
    cart.appendChild(productName);

    const productPrice = getProductPrice(product.price);
    cart.appendChild(productPrice);

    const addToCartBtn = getButton(product);
    cart.appendChild(addToCartBtn);

    return cart;
}

function renderProducts() {
    const productListContainer = document.getElementById("product-list");
    clearProductListContainer(productListContainer);

    let categorizedProducts = products;
    if (selectedCategory) {
        categorizedProducts = products.filter(function (product) {
            return product.categories.includes(selectedCategory);
        });
    }
    categorizedProducts.forEach(function (product) {
        // Render each product
        const productCart = getProductCart(product);
        productListContainer.appendChild(productCart);
    });
}

function getProductCategories() {
    const productCategories = products.map(function (product) {
        return product.categories;
    });
    const categoryFlatList = productCategories.flat();
    const uniqueCategories = new Set(categoryFlatList);
    return [...uniqueCategories];
}

function renderCategories() {
    const categoryContainer = document.getElementById('category-filters');
    categoryContainer.innerHTML = '';

    const categories = getProductCategories();
    categories.forEach(function (category) {
        const categoryBtn = document.createElement('button');
        categoryBtn.innerText = category;
        categoryBtn.classList.add(
            'bg-gray-200',
            'hover:bg-gray-300',
            'text-gray-800',
            'font-semibold',
            'py-2',
            'px-4',
            'rounded',
            'mr-2',
        );
        categoryBtn.addEventListener('click', function () {
            selectedCategory = category;
            renderProducts();
        });
        categoryContainer.appendChild(categoryBtn);
    });

    const clearFiltersBtn = document.createElement('button');
    clearFiltersBtn.innerText = 'Clear Filters';
    clearFiltersBtn.classList.add(
        'bg-gray-400',
        'hover:bg-gray-500', 
        'text-white', 
        'py-2', 
        'px-4', 
        'rounded', 
        'ml-2'
     );
    clearFiltersBtn.addEventListener('click', function () {
        selectedCategory = null;
        renderProducts();
    });
    categoryContainer.appendChild(clearFiltersBtn);
}

const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click',function(){
    cart=[];
    renderCart();
})

renderProducts();
renderCategories();
 