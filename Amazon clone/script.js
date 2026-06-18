// ===============================
// CART LOGIC
// ===============================

let cartCount = localStorage.getItem("cartCount")
  ? parseInt(localStorage.getItem("cartCount"))
  : 0;

const cartDisplay = document.getElementById("cartCount");

updateCartDisplay();

function addToCart() {
  cartCount++;

  localStorage.setItem("cartCount", cartCount);

  updateCartDisplay();

  showNotification("Product Added To Cart 🛒");
}

function updateCartDisplay() {
  cartDisplay.innerText = cartCount;
}

// ===============================
// SEARCH FUNCTIONALITY
// ===============================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const productName = card
      .querySelector("h3")
      .innerText
      .toLowerCase();

    if (productName.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  updateVisibleProducts();
});

// ===============================
// PRODUCT COUNT
// ===============================

function updateVisibleProducts() {
  const cards = document.querySelectorAll(".card");

  let visibleCount = 0;

  cards.forEach((card) => {
    if (card.style.display !== "none") {
      visibleCount++;
    }
  });

  console.log(`Visible Products: ${visibleCount}`);
}

updateVisibleProducts();

// ===============================
// SHOP NOW BUTTON
// ===============================

const shopButton = document.querySelector(".hero-content button");

if (shopButton) {
  shopButton.addEventListener("click", () => {
    document
      .querySelector(".products")
      .scrollIntoView({
        behavior: "smooth"
      });
  });
}

// ===============================
// BACK TO TOP
// ===============================

const backToTop = document.querySelector(".footer-top");

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ===============================
// NOTIFICATION SYSTEM
// ===============================

function showNotification(message) {
  const notification =
    document.createElement("div");

  notification.classList.add(
    "notification"
  );

  notification.innerText = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");

    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 2000);
}

// ===============================
// PAGE LOAD GREETING
// ===============================

window.addEventListener("load", () => {
  console.log(
    "Amazon Clone Loaded Successfully 🚀"
  );
});