// Get data from API and display it in list
const list = document.getElementById("list");

// Add a loading placeholder while waiting for the API response
list.innerHTML = "<li>Loading...</li>";

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    list.innerHTML = ""; // Remove the loading placeholder
    if (data && data.length) {
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        list.appendChild(li);
      });
    } else {
      list.innerHTML = "<li>No data found</li>"; // Add a placeholder for no data
    }
  })
  .catch((error) => {
    list.innerHTML = `<li>Error: ${error.message}</li>`; // Add a placeholder for API errors
  });

// Send data via POST request and display response
const form = document.getElementById("form");
const response = document.getElementById("response");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Add validation for required fields
  if (!form.name.value || !form.email.value || !form.message.value) {
    response.textContent = "Please fill in all required fields";
    return;
  }

  // Add a loading placeholder while waiting for the API response
  response.textContent = "Sending...";

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      response.textContent = `Post ID: ${data.id}`;
      form.reset(); // Clear the form after successful submission
    })
    .catch((error) => {
      response.textContent = `Error: ${error.message}`; // Add a placeholder for API errors
    });
});

// Carts js

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
