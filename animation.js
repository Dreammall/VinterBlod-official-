$(function() {
  // 開くアイコンをクリック → メニュー表示＆アイコン切り替え
  $('.open-icon').on('click', function(e) {
    e.stopPropagation();
    $('.mobile-nav').fadeIn(300);
    $('.open-icon').hide();
    $('.close-icon').show();
  });

    // 閉じるアイコンをクリック → メニュー非表示＆アイコン戻す
  $('.close-icon').on('click', function(e) {
    e.stopPropagation();
    $('.mobile-nav').fadeOut(300);
    $('.open-icon').show();
    $('.close-icon').hide();
  });

    // メニュー内のリンクをクリックしたらメニューを閉じる
  $('.mobile-nav a').on('click', function() {
    $('.mobile-nav').fadeOut(300);
    $('.open-icon').show();
    $('.close-icon').hide();
  });

  // 背景フェードイン処理
  $('body').addClass('bg-visible');

  
  $('.container').hide().fadeIn(1000);

});

// セクションごとのフェードイン
document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.fade-section');
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        obs.unobserve(entry.target); // 一度だけアニメーション
      }
    });
  }, {
    threshold: 0.5 // 10%見えたら発火
  });
  targets.forEach(target => observer.observe(target));
});

$(document).ready(function () {
  function adjustSideBgHeight() {
    const pageHeight = Math.max(
      $(document).height(),
      $(window).height()
    );
    $(".side-bg").css("height", pageHeight + "px");
  }

  // 初回実行
  adjustSideBgHeight();

  // リサイズ時も実行（スマホ対応）
  $(window).on("resize", function () {
    adjustSideBgHeight();
  });
});

