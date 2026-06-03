# Sistema de Modal/Carrossel - Guia de Uso

## ✨ Recursos Implementados

### 🎯 Funcionalidades Principais
- ✅ **5 Cards Independentes** - Cada card tem seu próprio carrossel
- ✅ **Modal Fullscreen Responsivo** - Funciona em PC e celular
- ✅ **18 Fotos Organizadas** - Distribuídas entre os 5 cards
- ✅ **Textos Românticos** - Mensagens de amor e paixão
- ✅ **Transições Suaves** - Animações modernas e elegantes

### 🎨 Design Aesthetic
- 🔮 Gradiente roxo escuro (fundo do modal)
- ✨ Glow roxo nos elementos
- 💜 Efeito gamer/moderno
- 🌟 Bordas arredondadas em tudo
- 💖 Animações ao abrir a imagem
- 🎯 Botões com hover effect e animação

### 🕹️ Controles
- **Botões Avançar/Voltar** - Setas circulares com glow roxo
- **Teclado** - Setas (← →) para navegar, ESC para fechar
- **Deslizar (Swipe)** - No mobile, deslize para mudar fotos
- **Clique no Fundo** - Clique fora da imagem para fechar
- **Botão X** - Fecha o modal

## 📁 Distribuição de Fotos

### Card 1 - Nossas primeiras fotos
- foto1.jpeg
- foto2.jpeg
- foto3.jpeg

### Card 2 - Nossa decisão
- foto4.jpeg
- foto5.jpeg
- foto6.jpeg

### Card 3 - A gente feliz
- foto7.jpeg
- foto8.jpeg
- foto9.jpeg

### Card 4 - Eu na sua casa
- foto10.jpeg
- foto11.jpeg
- foto12.jpeg

### Card 5 - Muitos outros (maior)
- foto13.jpeg
- foto14.jpeg
- foto15.jpeg
- foto16.jpeg
- foto17.jpeg
- foto18.jpeg

## 💬 Mensagens Incluídas

Cada foto tem um texto romântico específico:
- Mensagens doces e emocionais
- Expressões de amor puro
- Máximo 5 linhas por mensagem
- Emojis temáticos (💖, ✨, 🌹, etc)

## 🚀 Como Usar

1. **Clicar em um Card** - Abre o modal com a primeira foto
2. **Navegar entre Fotos** - Use os botões, teclado ou swipe
3. **Fechar Modal** - Clique no X, ESC, ou fora da imagem

## 📱 Responsividade

### PC
- Layout centralizado
- Botões grandes (60px)
- Imagem até 500px de largura
- Textos legíveis

### Celular/Tablet
- Totalmente responsivo
- Botões otimizados (50px)
- Imagem ajusta ao tamanho da tela
- Suporte a swipe
- Texto redimensionado automaticamente

## 🎬 Animações Incluídas

- **Scale In** - Imagem aparece com zoom suave
- **Fade In** - Texto aparece gradualmente
- **Slide Up** - Botões descem suavemente
- **Hover** - Botões aumentam e brilham ao passar mouse
- **Active** - Botões contraem ao clicar

## 🔧 Arquivos Modificados

- `index.html` - Estrutura do modal atualizada
- `style.css` - Estilos completos do modal e animações
- `script.js` - Lógica do carrossel independente

## ⚙️ Técnica

- **Sem Bibliotecas Externas** - Puro JavaScript, HTML e CSS
- **Suporte a Teclado** - Arrow keys e ESC
- **Suporte a Touch** - Gesto swipe em dispositivos móveis
- **Event Listeners Modernos** - Cliques inteligentes
- **CSS Grid/Flexbox** - Layout responsivo

## 💡 Customizações Fáceis

### Mudar cores:
1. Procure por `#C77DFF` (roxo) no style.css
2. Substitua pela cor desejada

### Adicionar mais textos:
1. Abra script.js
2. Edite o array `carouselData`
3. Adicione novos textos

### Mudar animações:
1. Procure por `@keyframes` no style.css
2. Customize os valores

## 🎁 Extras Implementados

- ✅ Indicador de foto atual (1/3, 2/5, etc)
- ✅ Imagens não são cortadas (object-fit: contain)
- ✅ Fundo desfocado (backdrop-filter)
- ✅ Botão X giratório ao hover
- ✅ Transição suave entre fotos
- ✅ Suporte completo a mobile
- ✅ Acessibilidade de teclado

## 🎉 Pronto para Usar!

Tudo está configurado e funcionando. Basta clicar nos cards para começar a explorar o carrossel! 💖
