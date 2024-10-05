document.addEventListener('DOMContentLoaded', function() {
  
  var days = document.querySelector('.days span');
  var hour = document.querySelector('.hour');
  var min = document.querySelector('.min');
  var second = document.querySelector('.second');

  // Khởi tạo ngày 4/10/2024 lúc 00:00:00
  var startDate = new Date(2024, 9, 4); // trừ đi 30days (JS tháng bắt đầu từ 0)
  days.innerText = Math.floor((new Date() - startDate) / 86400000);
  countTime();

  function countTime() {
    let today = new Date();
    let ms = (today - startDate) % 86400000;
    hour.innerText = Math.floor(ms / 3600000);
    min.innerText = Math.floor(ms % 3600000 / 60000);
    second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
  }

  setInterval(countTime, 1000);

  // Thêm âm thanh
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
