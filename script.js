// ===================================
// MENU MOBILE - TOGGLE
// ===================================

/**
 * Função para alternar o menu mobile
 * Adiciona/remove a classe 'active' no menu e no botão hamburger
 */
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ===================================
// ALTERAR TEMA (CLARO/ESCURO)
// ===================================

/**
 * Função para alternar entre tema claro e escuro
 * Salva a preferência do usuário no localStorage
 */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

// Verifica se há tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.textContent = '☀️';
}

// Evento de clique no botão de tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Altera o ícone do botão
    if (body.classList.contains('dark-theme')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// ===================================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// ===================================

/**
 * Função para validar o formulário de contato
 * Verifica se todos os campos estão preenchidos corretamente
 * Valida o formato do e-mail
 */
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Função para validar e-mail usando regex
// ela foi criada para reaproveitar o código e não ficar repetindo em todo canto
function validateEmail(email) {
    // Regex para validar formato de e-mail (usuario@dominio.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para mostrar erro
// ela foi criada para reaproveitar o código e não ficar repetindo em todo canto
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorMessage.textContent = message;
}

// Função para remover erro
function removeError(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
}

// Validação em tempo real - Nome
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Por favor, preencha seu nome');
    } else if (nameInput.value.trim().length < 3) {
        showError(nameInput, 'Nome deve ter pelo menos 3 caracteres');
    } else {
        removeError(nameInput);
    }
});

// Validação em tempo real - E-mail
emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Por favor, preencha seu e-mail');
    } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Por favor, insira um e-mail válido (exemplo: usuario@dominio.com)');
    } else {
        removeError(emailInput);
    }
});

// Validação em tempo real - Mensagem
messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Por favor, escreva uma mensagem');
    } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'Mensagem deve ter pelo menos 10 caracteres');
    } else {
        removeError(messageInput);
    }
});

// ===================================
// ENVIO DO FORMULÁRIO
// ===================================

/**
 * Função para processar o envio do formulário
 * Valida todos os campos antes do envio
 * Simula o envio e exibe mensagem de confirmação
 */
contactForm.addEventListener('submit', (e) => {
    // Previne o envio padrão do formulário
    e.preventDefault();
    
    // Obtém os valores dos campos
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    // Flag para verificar se há erros
    let hasError = false;
    
    // Validação do nome
    if (name === '') {
        showError(nameInput, 'Por favor, preencha seu nome');
        hasError = true;
    } else if (name.length < 3) {
        showError(nameInput, 'Nome deve ter pelo menos 3 caracteres');
        hasError = true;
    } else {
        removeError(nameInput);
    }
    
    // Validação do e-mail
    if (email === '') {
        showError(emailInput, 'Por favor, preencha seu e-mail');
        hasError = true;
    } else if (!validateEmail(email)) {
        showError(emailInput, 'Por favor, insira um e-mail válido (exemplo: usuario@dominio.com)');
        hasError = true;
    } else {
        removeError(emailInput);
    }
    
    // Validação da mensagem
    if (message === '') {
        showError(messageInput, 'Por favor, escreva uma mensagem');
        hasError = true;
    } else if (message.length < 10) {
        showError(messageInput, 'Mensagem deve ter pelo menos 10 caracteres');
        hasError = true;
    } else {
        removeError(messageInput);
    }
    
    // Se não houver erros, simula o envio
    if (!hasError) {
        // Simulação do envio (em um projeto real, aqui seria feita a requisição ao servidor)
        console.log('Formulário enviado com sucesso!');
        console.log('Nome:', name);
        console.log('E-mail:', email);
        console.log('Mensagem:', message);
        
        // Limpa os campos do formulário
        contactForm.reset();
        
        // Exibe o modal de confirmação
        showModal();
    }
});

// ===================================
// MODAL DE CONFIRMAÇÃO
// ===================================

/**
 * Funções para controlar o modal de confirmação
 * Exibe e fecha o modal após o envio do formulário
 */
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

// Função para exibir o modal
function showModal() {
    modal.classList.add('show');
}

// Função para fechar o modal
function closeModal() {
    modal.classList.remove('show');
}

// Fecha o modal ao clicar no X
modalClose.addEventListener('click', closeModal);

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Fecha o modal ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// ===================================
// NAVEGAÇÃO SUAVE
// ===================================

/**
 * Adiciona comportamento de scroll suave ao clicar nos links do menu
 * Ajusta o scroll para compensar a altura do menu fixo
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Calcula a posição considerando a altura do menu
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            // Scroll suave até a seção
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// ANIMAÇÃO DAS BARRAS DE PROGRESSO
// ===================================

/**
 * Anima as barras de progresso dos idiomas quando ficam visíveis
 * Usa Intersection Observer para detectar quando o elemento entra na viewport
 */
const progressBars = document.querySelectorAll('.progress-fill');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona animação quando o elemento fica visível
            entry.target.style.width = entry.target.style.width;
        }
    });
}, observerOptions);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// ===================================
// DESTAQUE DO MENU ATIVO
// ===================================

/**
 * Destaca o link do menu correspondente à seção visível
 * Usa Intersection Observer para detectar qual seção está visível
 */
const sections = document.querySelectorAll('.section');
const navLinksArray = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove a classe active de todos os links
            navLinksArray.forEach(link => {
                link.classList.remove('active');
            });
            
            // Adiciona a classe active ao link correspondente
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// ===================================
// CONSOLE LOG - INFORMAÇÕES
// ===================================

/**
 * Exibe informações no console sobre o portfólio
 */
console.log('%c🚀 Portfólio Pessoal - João Farias', 'color: #4A90E2; font-size: 20px; font-weight: bold;');
console.log('%cDesenvolvido com HTML5, CSS3 e JavaScript', 'color: #50C878; font-size: 14px;');
console.log('%cSem frameworks - Código 100% puro!', 'color: #FF6B6B; font-size: 14px;');
console.log('%c---', 'color: #666;');
console.log('📧 Contato: joaocdfariass@gmail.com');
console.log('🌐 GitHub: https://github.com/joaocdfarias');
