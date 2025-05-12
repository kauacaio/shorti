// Configuração do Usuário
const userName = "Fulano Silva"; // Substituir por dados reais
const userInitials = userName.split(' ').map(n => n[0]).join('').toUpperCase();

// Atualizar interface
document.getElementById('user-avatar').textContent = userInitials;

// Saudação dinâmica
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "Bom dia";
  if (hour >= 12 && hour < 18) greeting = "Boa tarde";
  if (hour >= 18) greeting = "Boa noite";
  
  document.getElementById('dynamic-greeting').textContent = greeting;
}

// Inicialização
updateGreeting();

// Opcional: Abertura inteligente de links (ex: abrir na mesma aba para intranet)
document.querySelectorAll('.shortcut-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (card.href.includes('intranet.empresa.com')) {
      e.preventDefault();
      window.location.href = card.href; // Abre na mesma aba
    }
    // Outros links abrem em nova aba (padrão pelo target="_blank")
  });
});