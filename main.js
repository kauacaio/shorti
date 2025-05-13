document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const loader = submitBtn.querySelector('.essence-loader');
    
    // Mostrar loader
    btnText.classList.add('hidden');
    loader.classList.remove('hidden');
    submitBtn.disabled = true;
    
    // Credenciais hardcoded para a versão beta
    const validCredentials = [
        { user: 'admin', pass: 'admin123' },
        { user: 'beta', pass: 'beta2023' },
        { user: 'teste', pass: 'teste123' }
    ];
    
    // Simular verificação com delay
    setTimeout(() => {
        const isValid = validCredentials.some(cred => 
            cred.user === username && cred.pass === password
        );
        
        if (isValid) {
            // Efeito de sucesso
            submitBtn.style.backgroundColor = 'var(--success)';
            
            // Redirecionar após login bem-sucedido
            setTimeout(() => {
                window.location.href = '/shorti.html';
            }, 800);
        } else {
            // Esconder loader e mostrar erro
            btnText.classList.remove('hidden');
            loader.classList.add('hidden');
            submitBtn.disabled = false;
            
            // Efeito de erro sutil
            submitBtn.style.backgroundColor = 'var(--error)';
            setTimeout(() => {
                submitBtn.style.backgroundColor = 'var(--primary)';
            }, 1000);
            
            document.getElementById('password').value = '';
        }
    }, 1500);
});

// Efeitos de foco nos inputs
document.querySelectorAll('.input-essence input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.querySelector('.focus-line').style.width = '100%';
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentNode.querySelector('.focus-line').style.width = '0%';
        }
    });
});

// Animação sutil de entrada
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.brand-essence, .essential-form, .gradient-panel');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});