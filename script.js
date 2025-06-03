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
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Load cart from sessionStorage
function loadCart() {
  const cartData = sessionStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
}

// Save cart to sessionStorage
function saveCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Render cart
function renderCart(cart) {
  cartList.innerHTML = ""; // Clear previous items
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Render products
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} 
      <button data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === parseInt(productId));
  const cart = loadCart();
  cart.push(product);
  saveCart(cart);
  renderCart(cart);
}

// Clear the cart
clearCartBtn.addEventListener("click", () => {
  sessionStorage.removeItem("cart");
  renderCart([]);
});

// Attach event listeners to Add to Cart buttons using event delegation
productList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const productId = event.target.getAttribute("data-id");
    addToCart(productId);
  }
});

// Initial render
renderProducts();
renderCart(loadCart());
