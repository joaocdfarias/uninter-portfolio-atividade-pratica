# 🎓 Portfólio Pessoal - Atividade Prática UNINTER

Portfólio online pessoal desenvolvido como atividade prática da disciplina **Fundamentos da Programação Web** da UNINTER.

## 📋 Sobre o Projeto

Este projeto consiste em um portfólio pessoal (currículo online) desenvolvido utilizando apenas **HTML5**, **CSS3** e **JavaScript puro**, sem o uso de frameworks ou bibliotecas externas.

## ✨ Funcionalidades

- ✅ **4 Seções Principais**: Sobre mim, Formação, Portfólio e Contato
- ✅ **Menu de Navegação Fixo**: Presente em todas as seções
- ✅ **Single Page Application**: Navegação por âncoras sem recarregar a página
- ✅ **Menu Responsivo**: Menu hambúrguer para dispositivos móveis
- ✅ **Tema Claro/Escuro**: Alternância entre temas com persistência no localStorage
- ✅ **Formulário de Contato**: Com validação completa em JavaScript
- ✅ **Validação de E-mail**: Verifica formato correto (<usuario@dominio.com>)
- ✅ **Modal de Confirmação**: Exibido após envio bem-sucedido do formulário
- ✅ **Design Responsivo**: Adaptável para desktop, tablet e mobile
- ✅ **Animações Suaves**: Transições e efeitos visuais
- ✅ **Código Comentado**: Comentários explicativos em pontos relevantes

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do site
- **CSS3**: Estilização completa sem frameworks
  - CSS Grid e Flexbox para layouts
  - CSS Variables para temas
  - Media Queries para responsividade
  - Animações e transições com keyframes
- **JavaScript**: Interatividade e validações
  - Validação de formulário
  - Alternância de tema
  - Menu mobile

## 📁 Estrutura do Projeto

```bash
uninter-portfolio-atividade-pratica/
│
├── index.html          # Página principal (Single Page)
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
└── README.md           # Documentação
```

## 🎯 Requisitos

### Estrutura Obrigatória

- ✅ **Sobre mim**: Informações pessoais, hobbies e apresentação
- ✅ **Formação**: Cursos, idiomas e formação educacional
- ✅ **Portfólio**: Links para trabalhos realizados
- ✅ **Contato**: Formulário com validação JavaScript

### JavaScript Implementado

- ✅ Validação completa do formulário (nome, e-mail, mensagem)
- ✅ Verificação de formato de e-mail com regex
- ✅ Simulação de envio com limpeza dos campos
- ✅ Modal de confirmação de envio
- ✅ Menu responsivo (mobile)
- ✅ Alternância de tema claro/escuro
- ✅ Navegação suave entre seções
- ✅ Destaque do menu ativo

### Boas Práticas

- ✅ Código bem comentado e organizado
- ✅ HTML5 semântico
- ✅ CSS modular e reutilizável
- ✅ JavaScript com funções bem definidas
- ✅ Responsividade completa
- ✅ Acessibilidade (aria-labels, alt em imagens)

## 🚀 Como Executar Localmente

1. Clone o repositório:
2. Navegue até a pasta do projeto
3. Abra o arquivo `index.html` no navegador

## 🌐 Deploy no GitHub Pages

1. Faça push do código para o GitHub
2. Vá em Settings > Pages
3. Selecione a branch `main` e a pasta `root`
4. Clique em Save
5. O site estará disponível em: `https://joaocdfarias.github.io/uninter-portfolio-atividade-pratica/`

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com grid de múltiplas colunas
- **Tablet** (≤768px): Layout ajustado com menu mobile
- **Mobile** (≤480px): Layout em coluna única otimizado

## 🎨 Temas

O site possui dois temas:

- **Tema Claro**: Padrão, com fundo branco e texto escuro
- **Tema Escuro**: Fundo escuro e texto claro, ativado pelo botão no canto superior direito

A preferência do usuário é salva no localStorage e mantida entre sessões.

## ✅ Validação do Formulário

O formulário de contato possui validação completa:

- **Nome**: Obrigatório, mínimo 3 caracteres
- **E-mail**: Obrigatório, formato válido (<usuario@dominio.com>)
- **Mensagem**: Obrigatória, mínimo 10 caracteres

Validação em tempo real e mensagens de erro específicas para cada campo.

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte da atividade prática da disciplina Fundamentos da Programação Web da UNINTER.

## 👨‍💻 Autor

### João Carlos de Farias Almeida

- GitHub: [@joaocdfarias](https://github.com/joaocdfarias)
- Email: <joaocdfariass@gmail.com>
