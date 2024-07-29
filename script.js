let totalPrice = 0;

// Función para actualizar la pantalla
function updateDisplay() {
    const normalPriceElement = document.getElementById('normal-price');
    const discount10Element = document.getElementById('discount-10');
    const discount15Element = document.getElementById('discount-15');
    const discount20Element = document.getElementById('discount-20');

    normalPriceElement.textContent = `$${Math.round(totalPrice)}`;
    discount10Element.textContent = `$${Math.round(totalPrice * 0.9)}`;
    discount15Element.textContent = `$${Math.round(totalPrice * 0.85)}`;
    discount20Element.textContent = `$${Math.round(totalPrice * 0.8)}`;
}

function addPrice(price, quantity = 1) {
    totalPrice += price * quantity;
    updateDisplay();
}
// Función para resetear el cálculo
function resetCalc(){
    totalPrice = 0;
    updateDisplay();
}
