'use strict';

// バーガー
const burger = document.querySelector('#js-burger');
const nav = document.querySelector('#js-nav');

burger.addEventListener('click', function () {

  burger.classList.toggle('active');
  nav.classList.toggle('active');

});

// アコーディオン
const questions = document.querySelectorAll('.p-question__q');

questions.forEach((question) => {
    const answer = question.nextElementSibling;
    const answerHeight = answer?.clientHeight || 0;

    // 初期状態は閉じる
    question.classList.add('closed');

    question.addEventListener('click', () => {
        const isOpen = answer?.style.height;
        if (isOpen) {
            answer.style.height = ''; // 閉じる
        } else {
            answer.style.height = `${answerHeight}px`; // 開く
        }
        question.classList.toggle('closed');
    });
});