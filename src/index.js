document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Cảm ơn bạn đã đăng ký: ${email}!\nChúng tôi sẽ liên hệ sớm.`);
    e.target.reset();
  });
  