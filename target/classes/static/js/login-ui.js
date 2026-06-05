function togglePassword() {
    const pwd = document.getElementById('password');
    const icon = document.getElementById('password-toggle-icon');
    if (!pwd || !icon) return;
    if (pwd.type === 'password') {
        pwd.type = 'text';
        icon.textContent = 'visibility_off';
    } else {
        pwd.type = 'password';
        icon.textContent = 'visibility';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('mousemove', function (e) {
        const body = document.body;
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        body.style.background =
            'radial-gradient(circle at ' + x + '% ' + y + '%, #0b1c30 0%, #031427 100%)';
    });
});
