const addProductHandler = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    displayProduct(product, quantity);
    saveDataToLocalStorage(product, quantity);
    displaySavedCartProducts()
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = `${product} ${quantity}`;
    ul.appendChild(li);
}


const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveDataToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const stringifiedProduct = JSON.stringify(cart);
    localStorage.setItem('cart', stringifiedProduct)
}

const displaySavedCartProducts = () => {
    const savedProducts = getStoredShoppingCart();
   const isEmpty = Object.keys(savedProducts).length;
    console.log(isEmpty);
    if(isEmpty === 0) {
        document.getElementById('main').innerHTML = `<p>There is no product saved in the cart</p>`
    }else{
        document.getElementById('main').innerHTML = ''
    }
    console.log(savedProducts);
    for(const product in savedProducts) {
        const quantity = savedProducts[product];
        displayProduct(product, quantity)
    }
}

displaySavedCartProducts()