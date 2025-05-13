// Atualiza hora atual
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById("current-time");
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });
    }
    
    // Atualizar saudação conforme horário
    const greetingElement = document.getElementById("greeting-text");
    if (greetingElement) {
        const hour = now.getHours();
        let greeting;
        
        if (hour >= 5 && hour < 12) {
            greeting = "Bom dia! Sua plataforma de gestão está pronta para uso.";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Boa tarde! Sua plataforma de gestão está pronta para uso.";
        } else {
            greeting = "Boa noite! Sua plataforma de gestão está pronta para uso.";
        }
        
        greetingElement.textContent = greeting;
    }
}
setInterval(updateTime, 1000);
updateTime();

// Alterna tema claro/escuro
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    
    // Salvar preferência no localStorage
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("darkTheme", isDark);
}

// Verificar preferência de tema salva
if (localStorage.getItem("darkTheme") === "true") {
    document.body.classList.add("dark-theme");
}

// Alterna páginas
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        this.classList.add("active");

        const page = this.getAttribute("data-page");
        document.querySelectorAll(".content-page").forEach(p => p.classList.remove("active"));
        document.getElementById(page).classList.add("active");

        document.getElementById("page-title").textContent = this.querySelector("span").textContent;
    });
});

// Menu mobile
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
});

document.querySelector(".overlay").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
});

// Filtro de meses na página de custos
document.getElementById('filtrarBtn')?.addEventListener('click', function() {
    const selectedMonth = document.getElementById('mesFilter').value;
    document.querySelectorAll('.month-table').forEach(table => {
        if (selectedMonth === 'todos' || table.getAttribute('data-mes') === selectedMonth) {
            table.style.display = 'block';
        } else {
            table.style.display = 'none';
        }
    });
});

// Inicializar filtro de meses
document.addEventListener('DOMContentLoaded', function() {
    const mesFilter = document.getElementById('mesFilter');
    if (mesFilter) {
        mesFilter.dispatchEvent(new Event('change'));
    }
});