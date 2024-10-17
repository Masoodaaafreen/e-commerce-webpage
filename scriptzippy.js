document.querySelectorAll('.product button').forEach(button => { 
    button.addEventListener('click', () => {
    alert('product added to cart');
});
});

const showCartItemsButton = document.querySelector('.show-cart-items');
const cartItemsContainer = document.querySelector('.cart-items-container');
const cartItemsList = document.querySelector('.cart-items-list');
const cartCountElement = document.querySelector('.cart-count');
const totalPriceElement = document.querySelector('.total-price');
const checkoutButton = document.querySelector('.checkout-button');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cart = [];
let totalPrice = 0;

// Update cart list and total price
function updateCart() {
  cartItemsList.innerHTML = '';
  cart.forEach((item) => {
    const listItem = document.createElement('LI');
    listItem.textContent = `${item.name} x ${item.quantity} = $${item.price * item.quantity}`;
    cartItemsList.appendChild(listItem);
  });
  totalPriceElement.textContent = `Total: $${totalPrice}`;
  cartCountElement.textContent = cart.length;
}

// Add to cart event listener
addToCartButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const productName = button.dataset.productName;
    const productPrice = parseInt(button.dataset.productPrice);
    const existingItem = cart.find((item) => item.name === productName);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    totalPrice += productPrice;
    updateCart();
  });
});

// Toggle cart items container visibility
showCartItemsButton.addEventListener('click', () => {
  cartItemsContainer.style.display = cartItemsContainer.style.display === 'block' ? 'none' : 'block';
});

