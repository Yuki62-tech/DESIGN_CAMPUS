'use strict';

// バーガー
const burger = document.querySelector('#js-burger');
const nav = document.querySelector('#js-nav');

burger.addEventListener('click', function () {

  burger.classList.toggle('active');
  nav.classList.toggle('active');

});

// アコーディオン
$(function () {
  // タイトルをクリックすると
  $(".js-accordion-title").on("click", function () {
    // クリックした次の要素を開閉
    $(this).next().slideToggle(300);
    // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("open", 300);
  });
});