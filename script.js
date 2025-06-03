// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM Elements
const productListEl = document.getElementById("product-list");
const cartListEl = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Load cart from sessionStorage or initialize as empty array
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Render products
function renderProducts() {
  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price} `;

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(product));

    li.appendChild(addButton);
    productListEl.appendChild(li);
  });
}

// Render cart
function renderCart() {
  cartListEl.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartListEl.appendChild(li);
  });
}

// Add product to cart
function addToCart(product) {
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Clear cart
clearCartBtn.addEventListener("click", () => {
  cart = [];
  sessionStorage.removeItem("cart");
  renderCart();
});

// Initial load
renderProducts();
renderCart();
