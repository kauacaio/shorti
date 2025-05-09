 // Navegação entre páginas
 document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove a classe active de todos os links
        document.querySelectorAll('.nav-link').forEach(el => {
            el.classList.remove('active');
        });
        
        // Adiciona a classe active apenas ao link clicado
        this.classList.add('active');
        
        // Oculta todas as páginas de conteúdo
        document.querySelectorAll('.content-page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Mostra a página de conteúdo correspondente
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
        
        // Atualiza o título da página
        document.getElementById('page-title').textContent = this.querySelector('span').textContent;
    });
  });
  
  // Menu mobile toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  });
  
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
  
  // Filtro de custos por mês
  document.getElementById('filtrarBtn').addEventListener('click', () => {
    const mesSelecionado = document.getElementById('mesFilter').value;
    
    document.querySelectorAll('.month-table').forEach(table => {
        if (mesSelecionado === 'todos' || table.getAttribute('data-mes') === mesSelecionado) {
            table.style.display = 'block';
        } else {
            table.style.display = 'none';
        }
    });
  });
  
  // Toggle de tema escuro/claro
  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Atualiza o texto do botão
    const themeBtn = document.querySelector('.sidebar-footer .btn');
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
  
  // Atualizar saudação conforme horário
  function updateGreeting() {
    const hour = new Date().getHours();
    const greetingEl = document.getElementById('greeting-text');
    let greeting = '';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Bom dia! Um ótimo dia de trabalho começa agora.';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Boa tarde! Aproveite sua produtividade vespertina.';
    } else {
        greeting = 'Boa noite! Hora de revisar os resultados do dia.';
    }
    
    greetingEl.textContent = greeting;
  }
  
  // Atualizar horário atual
  function updateCurrentTime() {
    const now = new Date();
    const timeEl = document.getElementById('current-time');
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    timeEl.textContent = now.toLocaleDateString('pt-BR', options);
  }
  
  // Inicialização
  document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    updateCurrentTime();
    setInterval(updateCurrentTime, 60000);
  });
  