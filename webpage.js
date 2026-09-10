// ===== Ngày giờ tự động (định dạng VnExpress) =====
(function () {
  var days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  var now = new Date();
  var text = days[now.getDay()] + ', ' + now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
  var el = document.getElementById('header-date');
  if (el) el.textContent = text;
})();

// ===== Nút "Lên đầu trang" =====
(function () {
  var btn = document.getElementById('back-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.classList.toggle('show', window.scrollY > 300);
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ===== Chặn các link giả (#) không nhảy trang =====
document.addEventListener('click', function (e) {
  var a = e.target.closest('a[href="#"]');
  if (a) e.preventDefault();
});
