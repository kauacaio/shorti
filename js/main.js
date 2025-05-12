// Navegação entre páginas
function setupNavigation() {
    const navMenu = document.querySelector('.nav-menu');
    
    if (navMenu) {
        navMenu.addEventListener('click', (e) => {
            const link = e.target.closest('.nav-link');
            if (!link) return;
            
            e.preventDefault();
            
            // Atualizar navegação
            document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
            link.classList.add('active');
            
            // Mostrar página correspondente
            const pageId = link.dataset.page;
            document.querySelectorAll('.content-page').forEach(page => {
                page.classList.toggle('active', page.id === pageId);
            });
            
            // Atualizar título
            const pageTitle = document.getElementById('page-title');
            if (pageTitle) {
                pageTitle.textContent = link.querySelector('span').textContent;
            }
        });
    }
}

// Menu mobile toggle
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    
    if (menuToggle && sidebar && overlay) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
        
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
}

// Filtro de custos por mês
function setupCostFilter() {
    const filterBtn = document.getElementById('filtrarBtn');
    
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            const mesSelecionado = document.getElementById('mesFilter').value;
            
            document.querySelectorAll('.month-table').forEach(table => {
                if (mesSelecionado === 'todos' || table.dataset.mes === mesSelecionado) {
                    table.hidden = false;
                } else {
                    table.hidden = true;
                }
            });
        });
    }
}

// Toggle de tema escuro/claro
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Atualiza o texto do botão
    const themeBtn = document.querySelector('.sidebar-footer .btn');
    if (themeBtn) {
        const icon = themeBtn.querySelector('i');
        const text = themeBtn.querySelector('span');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            text.textContent = 'Tema Claro';
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            text.textContent = 'Tema Escuro';
        }
    }
    
    // Salva preferência no localStorage
    localStorage.setItem('darkTheme', document.body.classList.contains('dark-theme'));
}

// Atualizar horário atual
function updateCurrentTime() {
    const timeEl = document.getElementById('current-time');
    if (!timeEl) return;
    
    const now = new Date();
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    timeEl.textContent = now.toLocaleDateString('pt-BR', options);
}

// Saudação dinâmica
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "Bom dia,";
    
    if (hour >= 12 && hour < 18) greeting = "Boa tarde,";
    if (hour >= 18) greeting = "Boa noite,";
    
    // Atualiza todos os elementos de saudação
    document.querySelectorAll('#greeting-text, #dynamic-greeting').forEach(el => {
        if (el.id === 'greeting-text') {
            el.textContent = greeting.replace(',', '!') + ' Sua plataforma de gestão completa está pronta para uso.';
        } else {
            el.textContent = greeting;
        }
    });
}

// Configuração do modal de relatórios
function setupReportsModal() {
    const reportsModal = document.getElementById('reportsModal');
    const reportsBtn = document.getElementById('reportsBtn');
    const closeModal = document.getElementById('closeModal');
    
    if (reportsBtn && reportsModal && closeModal) {
        reportsBtn.addEventListener('click', () => {
            reportsModal.style.display = 'flex';
        });
        
        closeModal.addEventListener('click', () => {
            reportsModal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === reportsModal) {
                reportsModal.style.display = 'none';
            }
        });
    }
}

// Carregar tema salvo
function loadThemePreference() {
    const darkTheme = localStorage.getItem('darkTheme') === 'true';
    if (darkTheme) {
        document.body.classList.add('dark-theme');
        
        // Atualiza o botão do tema
        const themeBtn = document.querySelector('.sidebar-footer .btn');
        if (themeBtn) {
            const icon = themeBtn.querySelector('i');
            const text = themeBtn.querySelector('span');
            icon.classList.replace('fa-moon', 'fa-sun');
            text.textContent = 'Tema Claro';
        }
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupMobileMenu();
    setupCostFilter();
    setupReportsModal();
    loadThemePreference();
    
    updateGreeting();
    updateCurrentTime();
    setInterval(updateCurrentTime, 60000);
});

// Expor função toggleTheme para o escopo global
window.toggleTheme = toggleTheme;