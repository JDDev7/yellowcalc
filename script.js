let total = 0;
const products = {};

function addPrice(price, quantity = 1, productName = '') {
    if (!productName) {
        // Obtener el nombre del producto del botón que fue clickeado si no se pasó como argumento
        const button = event.target;
        productName = button.innerText.split(' (')[0];
    }

    if (products[productName]) {
        products[productName] += quantity;
    } else {
        products[productName] = quantity;
    }

    total += price * quantity;
    updatePrices();
    updateProductList();
}

function updatePrices() {
    // Redondear los precios a enteros y formatear sin decimales
    document.getElementById("normal-price").innerText = `$${Math.floor(total)}`;
    document.getElementById("discount-10").innerText = `$${Math.floor(total * 0.9)}`;
    document.getElementById("discount-15").innerText = `$${Math.floor(total * 0.85)}`;
    document.getElementById("discount-20").innerText = `$${Math.floor(total * 0.8)}`;
}

function updateProductList() {
    const productList = document.getElementById("product-list");
    let productContainer = document.getElementById('product-container');

    if (!productContainer) {
        productContainer = document.createElement('div');
        productContainer.id = 'product-container';
        productList.appendChild(productContainer);
    }

    productContainer.innerHTML = ''; // Limpiar los productos anteriores

    for (const [product, quantity] of Object.entries(products)) {
        const productItem = document.createElement('p');
        productItem.innerText = `${product} x${quantity}`;
        productContainer.appendChild(productItem);
    }
}

function resetCalc() {
    total = 0;
    for (let key in products) {
        delete products[key];
    }
    updatePrices();
    updateProductList();
}


function handleResize() {
    const minWidth = 380;
    const maxWidth = 430;
    const container = document.getElementById('sections-container');
    const parent = document.getElementById('calculator');

    if (window.innerWidth >= minWidth && window.innerWidth <= maxWidth) {
        if (container) {
            // Mueve todos los hijos del contenedor al padre
            while (container.firstChild) {
                parent.appendChild(container.firstChild);
            }
            // Elimina el contenedor
            container.remove();
        }
    }
}

// Llama a handleResize en el cargado inicial y en el redimensionamiento de la ventana
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);