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

  // 全体フェードイン（必要なら対象を .container のみに絞るとスムーズ）
  // $('.container').hide().fadeIn(1000);

});