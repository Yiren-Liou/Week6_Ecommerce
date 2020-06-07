"use strict";

$(document).ready(function () {
  // 手機menu
  $(".smMenuOpen").click(function () {
    $(".smMenu").toggleClass("move");
  });
  $(".smMenuClose").click(function () {
    $(".smMenu").toggleClass("move");
  }); // 下拉選單icon

  $(".dropdown").on("click", function (event) {
    event.preventDefault();
    $(".dropdown-btn").toggleClass("active");
  }); //購物車列表

  $(".shopCartOpen").click(function () {
    $(".shopCart").toggleClass("move");
  });
  $(".shopCartClose").click(function () {
    $(".shopCart").toggleClass("move");
  });
});
//# sourceMappingURL=all.js.map
