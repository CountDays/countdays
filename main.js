document.addEventListener('DOMContentLoaded', function() {

  var days = document.querySelector('.days span');
  var hour = document.querySelector('.hour');
  var min = document.querySelector('.min');
  var second = document.querySelector('.second');

  // Đặt ngày hôm nay cố định là 21/06/2025 (tháng 6 là 5)
  var today = new Date(2025, 5, 21);
  // Ngày bắt đầu: 4/10/2024 (tháng 10 là 9)
  var startDate = new Date(2024, 9, 4);

  // Tính số ngày giữa 2 mốc, luôn là 260 ngày
  days.innerText = Math.floor((today - startDate) / 86400000);

  // Chỉ hiện đồng hồ cố định (không chạy nữa)
  function countTime() {
    let ms = (today - startDate) % 86400000;
    hour.innerText = String(Math.floor(ms / 3600000)).padStart(2, '0');
    min.innerText = String(Math.floor(ms % 3600000 / 60000)).padStart(2, '0');
    second.innerText = String(Math.floor(ms % 3600000 % 60000 / 1000)).padStart(2, '0');
  }

  // Hiển thị thời gian 1 lần duy nhất
  countTime();

  // Audio controls vẫn giữ nguyên
  var audio = document.getElementById('audio');
  var playButton = document.getElementById('play');
  var pauseButton = document.getElementById('pause');
  var volumeControl = document.getElementById('volume');

  playButton.addEventListener('click', function() {
    audio.play();
  });

  pauseButton.addEventListener('click', function() {
    audio.pause();
  });

  volumeControl.addEventListener('input', function() {
    audio.volume = this.value;
  });
});
