# 💕 Nicoly - Landing Page Romântica

Uma landing page moderna, responsiva e emocionante criada com HTML, CSS e JavaScript puro, dedicada a uma pessoa especial.

## ✨ Características

### 🎨 Design Moderno
- **Layout Responsivo**: Funciona perfeitamente em celular, tablet e desktop
- **Glassmorphism**: Efeito de vidro fosco elegante
- **Gradientes Suaves**: Transições de cores harmoniosas
- **Animações Fluidas**: Entrada, saída e interatividade
- **Cores Românticas**: Roxo, rosa e tons complementares

### 📱 Seções Principais

1. **Hero Section**
   - Fundo com imagem e overlay
   - Nome destacado
   - Barra de progresso interativa
   - Botão "Abrir Presente"

2. **Contador de Relacionamento**
   - Atualização automática em tempo real
   - Dias, meses, anos e horas
   - Data inicial: 13/02/2026

3. **Galeria de Memórias**
   - 5 cards com fotos
   - Modal fullscreen elegante
   - Navegação por setas ou teclado
   - Swipe em dispositivos móveis
   - Sistema de progresso

4. **Seção de Música**
   - Botão para reproduzir/pausar
   - Ícone interativo
   - Pronto para adicionar arquivo de áudio

5. **Carta Emocional**
   - Glassmorphism design
   - Mensagem romanticamente envolvente
   - Decoração com corações flutuantes

6. **Rodapé**
   - Mensagem final especial
   - Ocupando tela inteira
   - Animações elegantes

## 🚀 Como Usar

### Instalação Local
1. Clone ou baixe os arquivos
2. Abra `index.html` em seu navegador
3. Ou execute um servidor local:
   ```bash
   python -m http.server 8000
   # Acesse http://localhost:8000
   ```

### Customizando Conteúdo

#### Mudar Data de Início
Edite em `script.js`:
```javascript
const dataInicio = new Date(2026, 1, 13, 0, 0, 0); // Mês (0-11), Dia, Hora
```

#### Adicionar Música
1. Coloque seu arquivo de áudio no projeto
2. Edite em `index.html`:
```html
<audio id="audioMusica" style="display: none;">
    <source src="seu-arquivo.mp3" type="audio/mpeg">
</audio>
```

#### Adicionar Fotos
1. Coloque suas fotos na pasta `fotos/`
2. Edite os caminhos em `script.js` (array `carouselData`)
3. Atualize os textos para cada foto

## 📁 Estrutura de Arquivos

```
projeto/
├── index.html          # Estrutura HTML
├── style.css          # Estilos CSS (refatorado)
├── script.js          # Lógica JavaScript (refatorado)
├── fundo.png          # Imagem de fundo
├── fotos/             # Pasta com fotos
│   ├── foto1.jpeg
│   ├── foto2.jpeg
│   └── ...
├── fonts/             # Fontes customizadas
│   └── Minecraft.ttf
└── coracao/           # Ícones de coração
    └── heart.png
```

## 🎯 Melhorias Implementadas

✅ **Layout Moderno**
- Removida dependência de `position: absolute` excessivo
- Flexbox e CSS Grid para layouts profissionais
- Estrutura semântica HTML5

✅ **Responsividade**
- Mobile-first approach
- Breakpoints em 480px, 768px
- Escalas fluidas com `clamp()`

✅ **Animações**
- Fade-in ao carregar
- Scroll reveal
- Hover elegante nos cards
- Corações flutuando
- Pulso em elementos principais

✅ **Código Organizado**
- Variáveis CSS `:root`
- Classes reutilizáveis
- Comentários explicativos
- Modularização JavaScript

## 🎨 Cores

- **Primária**: `#271d38` (Roxo escuro)
- **Secundária**: `#C77DFF` (Roxo claro)
- **Destaque**: `#ff69b4` (Rosa)
- **Luz**: `#f6effc` (Branco quente)

## 📱 Compatibilidade

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Dispositivos móveis (iOS/Android)

## 🚀 Deploy no Vercel

1. **Crie uma conta** em [vercel.com](https://vercel.com)

2. **Faça upload dos arquivos**:
   - Clique em "New Project"
   - Selecione "Upload"
   - Escolha a pasta do projeto

3. **Configure**:
   - Deixe as configurações padrão
   - Clique em "Deploy"

4. **Pronto!** Seu site estará online em minutos

## 💡 Dicas

### Adicionar Mais Fotos
Edite o objeto `carouselData` em `script.js`:
```javascript
5: {
    fotos: ['fotos/seu-arquivo.jpeg', ...],
    textos: ['Seu texto aqui', ...]
}
```

### Mudar Cores
Edite as variáveis em `style.css`:
```css
:root {
    --color-primary: #sua-cor;
    --color-secondary: #sua-cor;
    /* ... */
}
```

### Personalizar Mensagem Final
Edite em `index.html` dentro de `.final-content`

## 📞 Suporte

Se encontrar problemas:
1. Verifique se todos os arquivos estão na pasta correta
2. Confirme que as imagens existem em `fotos/`
3. Abra o console do navegador (F12) para ver erros
4. Certifique-se que a data em `script.js` está correta

## 📄 Licença

Projeto criado para ser completamente customizável. Use livremente! 💕

---

**Feito com ❤️ para quem você ama**
