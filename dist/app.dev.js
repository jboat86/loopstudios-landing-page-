"use strict";

var menu = document.querySelector(".overlay"); // Toggle mobile menu

function toggleMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}