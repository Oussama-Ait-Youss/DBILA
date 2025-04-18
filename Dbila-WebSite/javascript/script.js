  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
 // Product data
const products = [
    { id: 1, name: "Vase", price: 25.00, image: "product1.jpg" },
    { id: 2, name: "Pottery Bowl", price: 15.00, image: "product2.jpg" },
    { id: 3, name: "Cup", price: 10.00, image: "product3.jpg" }
];

// Cart array to store added items
let cart = [];

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Clear the cart
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        // Create a new list item for each cart product
        const li = document.createElement("li");
        li.classList.add("cart-item");

        // Product name and price
        const productText = document.createElement("span");
        productText.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // Remove button for each product
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.addEventListener("click", () => removeFromCart(index));

        // Append elements to list item
        li.appendChild(productText);
        li.appendChild(removeButton);
        cartItems.appendChild(li);

        // Add to total price
        total += item.price;
    });

    // Update total price display
    totalPrice.textContent = `$${total.toFixed(2)}`;
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Remove from cart function
function removeFromCart(index) {
    cart.splice(index, 1);  // Remove the product from the cart using the index
    updateCart();  // Update the cart display
}

// Event listeners for adding products to the cart
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productId = parseInt(button.parentElement.getAttribute("data-id"));
        addToCart(productId);
    });
});

// Checkout functionality (just an alert for now)
document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout!");
        // Here you can redirect to a checkout page or handle payment
    }
});

// Function to update product count in the shop (cart reflected in the shop)
function updateProductCount() {
    products.forEach(product => {
        const productElement = document.querySelector(`.product[data-id="${product.id}"]`);
        if (productElement) {
            const cartItemCount = cart.filter(item => item.id === product.id).length;
            const countElement = productElement.querySelector(".product-count");
            if (countElement) {
                countElement.textContent = `In Cart: ${cartItemCount}`;
            }
        }
    });
}

// Call the updateProductCount function every time the cart is updated
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Clear the cart
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("cart-item");

        const productText = document.createElement("span");
        productText.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.addEventListener("click", () => removeFromCart(index));

        li.appendChild(productText);
        li.appendChild(removeButton);
        cartItems.appendChild(li);

        total += item.price;
    });

    totalPrice.textContent = `$${total.toFixed(2)}`;

    updateProductCount();  // Update the product count in the shop
}
// back to top button
window.onscroll = function () {
    var button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

