// 画面から取得したHTML要素が定数に代入
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンをクリックした際に正しく文字変更
buttonElement.addEventListener('click', function() {
  textElement.textContent = 'ボタンをクリックしました';
});
