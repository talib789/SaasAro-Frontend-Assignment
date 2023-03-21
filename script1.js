const buyBtns = document.querySelectorAll(".buy-btn");
const cartTotal = document.querySelector("#cart-total");
const cartLink = document.querySelector("#cart-link");
const cartForm = document.querySelector("#cart-form");

let total = 0;

buyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const price = btn.dataset.price;
    const totalPrice = Number(price);

    total += totalPrice;
    cartTotal.textContent = `$${total}`;
  });
});

cartLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (total > 0) {
    cartForm.style.display = "block";
  }
});

function hideRooms() {
  // Get all the room cards
  const cards = document.querySelectorAll(".card");

  // Loop through each card and set display property to "none"
  cards.forEach((card) => {
    card.style.display = "none";
  });
}

// Add event listener to "Cart" link
const cartLinks = document.querySelector("#cart-link");
cartLinks.addEventListener("click", hideRooms);

function submitForm() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;

  // Validate form data
  if (!name || !email || !phone || !address) {
    alert("Please fill in all the fields.");
    return false;
  }

  // Submit the form
  document.getElementById("cart-form").style.display = "none";
  document.getElementById("success-message").style.display = "block";
}
