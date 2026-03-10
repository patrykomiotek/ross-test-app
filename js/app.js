// Shared utilities for the Rossmann test app

// ==================== AUTH ====================

var VALID_USERS = [
  { email: "test@rossmann.pl", password: "Test1234", name: "Tester" },
  { email: "admin@rossmann.pl", password: "Admin5678", name: "Administrator" }
];

function login(email, password, remember) {
  var user = VALID_USERS.find(function(u) {
    return u.email === email && u.password === password;
  });
  if (user) {
    var userData = { email: user.email, name: user.name, loggedInAt: new Date().toISOString() };
    localStorage.setItem("rossmann_user", JSON.stringify(userData));
    if (remember) {
      localStorage.setItem("rossmann_remember", email);
    } else {
      localStorage.removeItem("rossmann_remember");
    }
    return { success: true, user: userData };
  }
  return { success: false, message: "Nieprawidłowy email lub hasło" };
}

function getLoggedInUser() {
  var data = localStorage.getItem("rossmann_user");
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
}

function requireAuth() {
  var user = getLoggedInUser();
  if (!user) {
    window.location.href = "index.html";
    return null;
  }
  return user;
}

function logout() {
  localStorage.removeItem("rossmann_user");
  window.location.href = "index.html";
}

// ==================== CART ====================

function getCart() {
  var data = localStorage.getItem("rossmann_cart");
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("rossmann_cart", JSON.stringify(cart));
}

function addToCart(productId, quantity) {
  quantity = quantity || 1;
  var cart = getCart();
  var existing = cart.find(function(item) { return item.productId === productId; });
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId: productId, quantity: quantity });
  }
  saveCart(cart);
  updateCartBadge();
  showToast("Produkt dodany do koszyka!");
}

function removeFromCart(productId) {
  var cart = getCart().filter(function(item) { return item.productId !== productId; });
  saveCart(cart);
  updateCartBadge();
}

function updateCartItemQuantity(productId, quantity) {
  var cart = getCart();
  var item = cart.find(function(i) { return i.productId === productId; });
  if (item) {
    item.quantity = Math.max(1, quantity);
    saveCart(cart);
  }
}

function getCartCount() {
  var cart = getCart();
  return cart.reduce(function(sum, item) { return sum + item.quantity; }, 0);
}

function getCartTotal() {
  var cart = getCart();
  var total = 0;
  cart.forEach(function(item) {
    var product = getProductById(item.productId);
    if (product) {
      total += product.price * item.quantity;
    }
  });
  return total;
}

function clearCart() {
  localStorage.removeItem("rossmann_cart");
  updateCartBadge();
}

// ==================== UI HELPERS ====================

function updateCartBadge() {
  var badge = document.getElementById("cart-badge");
  if (badge) {
    var count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

function showToast(message, type) {
  type = type || "success";
  // Remove existing toast
  var existing = document.querySelector(".toast-notification-k8v3");
  if (existing) existing.remove();

  var toast = document.createElement("div");
  toast.className = "toast-notification-k8v3 toast-" + type;
  toast.setAttribute("data-testid", "toast-notification");
  toast.innerHTML = '<span class="toast-message-r2t5">' + message + '</span><button class="toast-close-w4e1" onclick="this.parentElement.remove()">&times;</button>';
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(function() { toast.classList.add("toast-visible"); }, 10);

  // Auto remove after 3 seconds
  setTimeout(function() {
    toast.classList.remove("toast-visible");
    setTimeout(function() { toast.remove(); }, 300);
  }, 3000);
}

var CATEGORY_DISPLAY_NAMES = {
  "Pielegnacja": "Pielęgnacja",
  "Higiena": "Higiena",
  "Makijaz": "Makijaż",
  "Zdrowie": "Zdrowie"
};

function getCategoryDisplayName(category) {
  return CATEGORY_DISPLAY_NAMES[category] || category;
}

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " zł";
}

function formatDate(dateStr) {
  var months = [
    "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
    "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
  ];
  var d = new Date(dateStr);
  return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}

function getCurrentDateFormatted() {
  var days = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
  var months = [
    "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
    "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
  ];
  var now = new Date();
  return days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();
}

function renderStars(rating) {
  var html = "";
  for (var i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += '<span class="star-filled-j3k9">&#9733;</span>';
    } else if (i - rating < 1 && i - rating > 0) {
      html += '<span class="star-half-p7m2">&#9733;</span>';
    } else {
      html += '<span class="star-empty-v1n8">&#9734;</span>';
    }
  }
  return html;
}

function renderNavbar(activePage) {
  var user = getLoggedInUser();
  var cartCount = getCartCount();
  return '' +
    '<nav class="navbar-container-f5g2" data-testid="navbar">' +
      '<div class="nav-inner-w8r4">' +
        '<a href="dashboard.html" class="nav-logo-t3y7">' +
          '<span class="logo-icon-m9p1">R</span>' +
          '<span class="logo-text-k2v8">Rossmann</span>' +
        '</a>' +
        '<div class="nav-links-q9w2">' +
          '<a href="dashboard.html" class="nav-link-q9w2' + (activePage === 'dashboard' ? ' active' : '') + '" data-testid="nav-products">Produkty</a>' +
          '<a href="cart.html" class="nav-link-q9w2 cart-link-h6j3' + (activePage === 'cart' ? ' active' : '') + '" data-testid="nav-cart">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
            ' Koszyk' +
            '<span id="cart-badge" class="cart-badge-n4x6" data-testid="cart-badge" style="display:' + (cartCount > 0 ? 'flex' : 'none') + '">' + cartCount + '</span>' +
          '</a>' +
        '</div>' +
        '<div class="nav-user-s2d5">' +
          (user ? '<span class="user-greeting-p8q1">Cześć, ' + user.name + '</span>' : '') +
          '<button onclick="logout()" class="btn-logout-z6x3" data-testid="logout-button">Wyloguj</button>' +
        '</div>' +
      '</div>' +
    '</nav>';
}

// ==================== MODAL ====================

function showModal(title, content, onConfirm) {
  var overlay = document.createElement("div");
  overlay.className = "modal-overlay-b3k7";
  overlay.setAttribute("data-testid", "modal-overlay");

  var confirmBtn = onConfirm ? '<button class="btn-primary-x7k2 modal-confirm-btn" data-testid="modal-confirm">Potwierdź</button>' : '';

  overlay.innerHTML = '' +
    '<div class="modal-content-r9t2" data-testid="modal-content">' +
      '<div class="modal-header-w5e8">' +
        '<h2>' + title + '</h2>' +
        '<button class="modal-close-j4m1" data-testid="modal-close">&times;</button>' +
      '</div>' +
      '<div class="modal-body-n7p3">' + content + '</div>' +
      '<div class="modal-footer-k2v6">' +
        confirmBtn +
        '<button class="btn-secondary-m4r8 modal-cancel-btn" data-testid="modal-cancel">Zamknij</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(overlay);

  // Trigger animation
  setTimeout(function() { overlay.classList.add("modal-visible"); }, 10);

  // Close handlers
  overlay.querySelector(".modal-close-j4m1").addEventListener("click", function() { closeModal(overlay); });
  overlay.querySelector(".modal-cancel-btn").addEventListener("click", function() { closeModal(overlay); });
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) closeModal(overlay);
  });

  if (onConfirm) {
    overlay.querySelector(".modal-confirm-btn").addEventListener("click", function() {
      onConfirm();
      closeModal(overlay);
    });
  }
}

function closeModal(overlay) {
  overlay.classList.remove("modal-visible");
  setTimeout(function() { overlay.remove(); }, 300);
}

// ==================== PRODUCT CARD RENDERING ====================

function renderProductCard(product) {
  var initials = product.name.split(" ").map(function(w) { return w[0]; }).join("").substring(0, 2).toUpperCase();
  var saleBadge = product.originalPrice ? '<span class="sale-badge-v2n4" data-testid="sale-badge">Promocja</span>' : '';
  var priceHtml = product.originalPrice
    ? '<span class="price-original-t8k3">' + formatPrice(product.originalPrice) + '</span> <span class="price-current-y5w2" data-testid="product-price">' + formatPrice(product.price) + '</span>'
    : '<span class="price-current-y5w2" data-testid="product-price">' + formatPrice(product.price) + '</span>';
  var stockClass = product.inStock ? '' : ' out-of-stock-g7h4';
  var stockLabel = product.inStock ? '' : '<span class="stock-label-r3e9">Niedostępny</span>';
  var addBtnDisabled = product.inStock ? '' : ' disabled';

  return '' +
    '<div class="card-wrapper-m3p1 product-card' + stockClass + '" data-testid="product-card" data-product-id="' + product.id + '">' +
      saleBadge +
      '<div class="card-image-placeholder-j8k2" style="background-color: ' + product.color + '">' +
        '<span class="card-initials-w4r7">' + initials + '</span>' +
        stockLabel +
      '</div>' +
      '<div class="card-body-p5t9">' +
        '<span class="category-badge-h2m6 category-' + product.category.toLowerCase() + '">' + getCategoryDisplayName(product.category) + '</span>' +
        '<a href="product.html?id=' + product.id + '" class="card-title-link-n3v8" data-testid="product-link">' +
          '<h3 class="card-title-f6k1">' + product.name + '</h3>' +
        '</a>' +
        '<div class="card-rating-q1w5">' + renderStars(product.rating) + ' <span class="rating-value-m8k3">(' + product.rating + ')</span></div>' +
        '<div class="card-price-section-t4e7">' + priceHtml + '</div>' +
        '<button class="btn-primary-x7k2 btn-add-cart-r9p3" data-testid="add-to-cart-btn" data-product-id="' + product.id + '"' + addBtnDisabled + ' onclick="addToCart(' + product.id + ')">' +
          (product.inStock ? 'Dodaj do koszyka' : 'Niedostępny') +
        '</button>' +
      '</div>' +
    '</div>';
}
