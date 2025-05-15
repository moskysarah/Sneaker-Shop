// Sélection des éléments
const addToCartBtn = document.querySelector(".add-to-cart");
const cartCountSpan = document.getElementById("cart-count");

let cartCount = 0;

// Mise à jour du compteur
function updateCartCount() {
  cartCountSpan.textContent = cartCount;
}

// Écouteur d'événement sur le bouton
addToCartBtn.addEventListener("click", () => {
  cartCount++;
  updateCartCount();
  
});