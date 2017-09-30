var popup = document.querySelector(".popup-write-us");
if(popup) {
  var feedback = document.querySelector(".right-column .btn");
  var close = popup.querySelector(".popup-close");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");

  feedback.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-write-us-show");
    login.focus();
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-write-us-show");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !email.value) {
      event.preventDefault();
      console.log("Нужно ввести имя и e-mail");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("popup-write-us-show")) {
        popup.classList.remove("popup-write-us-show");
      }
    }
  });
};

var cart = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".popup-cart");
var cartClose = cartPopup.querySelector(".popup-close");
var cartContinue = cartPopup.querySelector(".continue");

for(var i=0;i<cart.length;i++) {
  cart[i].addEventListener("click", function(event) {
    event.preventDefault();
    cartPopup.classList.add("popup-cart-show");
  });
}

cartClose.addEventListener("click", function(event) {
  event.preventDefault();
  cartPopup.classList.remove("popup-cart-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (cartPopup.classList.contains("popup-cart-show")) {
      cartPopup.classList.remove("popup-cart-show");
    }
  }
});

cartContinue.addEventListener("click", function(event) {
  event.preventDefault();
  cartPopup.classList.remove("popup-cart-show");
});

var map = document.querySelector(".map");
if(map) {
  var mapPopup = document.querySelector(".popup-map");
  var mapClose = mapPopup.querySelector(".popup-close");

  map.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("popup-map-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("popup-map-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("popup-map-show")) {
        mapPopup.classList.remove("popup-map-show");
      }
    }
  });
};
