// Dados de exemplo (substitua pelos seus recursos reais)
const resources = {
    manuais: [
      {
        title: "Manual do Sistema ERP",
        description: "Guia completo de utilização do sistema corporativo",
        icon: "settings",
        link: "https://exemplo.com/manual-erp"
      },
      {
        title: "Política de Segurança",
        description: "Normas de acesso e proteção de dados",
        icon: "security",
        link: "https://exemplo.com/politica-seguranca"
      },
      {
        title: "Guia do Novato",
        description: "Orientações para novos colaboradores",
        icon: "groups",
        link: "https://exemplo.com/guia-novatos"
      }
    ],
    tutoriais: [
      {
        title: "Como Lançar Horas",
        description: "Passo-a-passo no sistema de ponto",
        icon: "schedule",
        link: "https://drive.google.com/file/d/1AZMYyGe2JBaHckCBpGDL-9wVNEC3bKx3/view?usp=drive_link",
        video: true
      },
      {
        title: "Aprovar Solicitações",
        description: "Fluxo de aprovação de despesas",
        icon: "approval",
        link: "https://exemplo.com/tutorial-aprovacao"
      },
      {
        title: "Relatórios Power BI",
        description: "Como filtrar e exportar dados",
        icon: "analytics",
        link: "https://exemplo.com/tutorial-powerbi",
        video: true
      }
    ]
  };
  
  // Elementos DOM
  const contentSection = document.getElementById('content-section');
  const navButtons = document.querySelectorAll('.nav-btn');
  
  // Carregar seção inicial
  loadSection('manuais');
  
  // Função para carregar seções
  function loadSection(section) {
    // Ativar botão de navegação
    navButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.textContent.includes(section === 'manuais' ? 'Manuais' : 'Tutoriais')) {
        btn.classList.add('active');
      }
    });
  
    // Gerar conteúdo
    let html = `
      <div class="content-grid">
        ${resources[section].map(item => `
          <div class="content-card">
            <div class="card-header">
              <div class="card-icon">
                <span class="material-icons">${item.icon}</span>
              </div>
              <div>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.description}</p>
              </div>
            </div>
            <a href="${item.link}" class="card-link" target="_blank">
              ${section === 'tutoriais' && item.video ? 'Assistir' : 'Acessar'}
              <span class="material-icons" style="font-size:1rem">${section === 'tutoriais' && item.video ? 'play_arrow' : 'arrow_forward'}</span>
            </a>
          </div>
        `).join('')}
      </div>
    `;
  
    contentSection.innerHTML = html;
  }
  
  // Saudação dinâmica
  function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "Bom dia";
    if (hour >= 12 && hour < 18) greeting = "Boa tarde";
    if (hour >= 18) greeting = "Boa noite";
    document.getElementById('dynamic-greeting').textContent = greeting;
  }
  
  updateGreeting();