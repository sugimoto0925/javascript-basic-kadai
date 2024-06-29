// 今日の日付
const today = new Date();

const y = today.getFullYear();
const m = today.getMonth()+1;
const d = today.getDate();

const formattedDate = `${y}年${m}月${d}日`;
console.log(formattedDate);