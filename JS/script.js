document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.getElementById('subscribeButton');
    subscribeButton.addEventListener('click', function() {
        const emailInput = document.getElementById('email');
        const email = emailInput.value;
        if (validateEmail(email)) {
            alert('Cảm ơn bạn đã đăng ký!');
            emailInput.value = '';  
        } else {
            alert('Vui lòng nhập địa chỉ email hợp lệ.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
