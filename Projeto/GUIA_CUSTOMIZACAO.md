# 🎨 Guia de Customização - Landing Page

Siga este guia para customizar seu projeto com seus próprios dados e fotos.

---

## 🖼️ 1. Adicionar Suas Fotos

### Passo 1: Preparar Fotos
1. Redimensione suas fotos para ~800x800px (otimizado)
2. Comprima as imagens para reduzir tamanho
3. Salve em formato JPEG (melhor compatibilidade)

### Passo 2: Copiar para Pasta
1. Coloque as fotos na pasta `fotos/`
2. Nomeie como: `foto1.jpeg`, `foto2.jpeg`, etc.

### Passo 3: Atualizar script.js
Abra `script.js` e encontre:

```javascript
const carouselData = {
    1: {
        fotos: ['fotos/foto1.jpeg', 'fotos/foto2.jpeg', 'fotos/foto3.jpeg'],
        textos: [
            '✨ Seu texto aqui.',
            '💖 Outro texto.',
            '🌹 Terceiro texto.'
        ]
    },
    // ... cards 2, 3, 4, 5
}
```

**Para cada card (1-5)**:
- Atualize os caminhos em `fotos: [...]`
- Atualize os textos em `textos: [...]`
- Mantenha a mesma quantidade de fotos e textos

### Exemplo Prático
```javascript
1: {
    fotos: [
        'fotos/nossa-primeira-foto.jpeg',
        'fotos/nosso-abraco.jpeg',
        'fotos/dia-especial.jpeg'
    ],
    textos: [
        '💕 Nossa primeira foto juntos',
        '🤗 Seu abraço é meu lugar favorito',
        '✨ Esse foi um dia inesquecível'
    ]
}
```

---

## 🎵 2. Adicionar Música

### Passo 1: Encontrar uma Música
- Use: YouTube, Spotify, SoundCloud
- Baixe em MP3 (use conversor online se necessário)
- Tamanho ideal: < 5MB

### Passo 2: Adicionar ao Projeto
1. Coloque o arquivo `musica.mp3` na pasta raiz
2. Ou em qualquer pasta (ajuste o caminho)

### Passo 3: Atualizar HTML
Abra `index.html` e encontre:

```html
<audio id="audioMusica" style="display: none;">
    <!-- <source src="musica.mp3" type="audio/mpeg"> -->
</audio>
```

**Remova o comentário**:
```html
<audio id="audioMusica" style="display: none;">
    <source src="musica.mp3" type="audio/mpeg">
</audio>
```

**Se seu arquivo tem outro nome**:
```html
<source src="caminho/do/arquivo.mp3" type="audio/mpeg">
```

---

## 📅 3. Mudar a Data de Início

### Em script.js
Encontre:
```javascript
const dataInicio = new Date(2026, 1, 13, 0, 0, 0);
```

**Formato**:
- Primeiro número: ano (2026)
- Segundo número: mês (0-11, onde 0=janeiro, 1=fevereiro)
- Terceiro número: dia (1-31)
- Quarto número: hora (0-23)
- Quinto: minuto (0-59)
- Sexto: segundo (0-59)

### Exemplos
```javascript
// 14 de Fevereiro de 2023
const dataInicio = new Date(2023, 1, 14, 0, 0, 0);

// 25 de Dezembro de 2022, 20:00
const dataInicio = new Date(2022, 11, 25, 20, 0, 0);

// 01 de Janeiro de 2024, 00:00
const dataInicio = new Date(2024, 0, 1, 0, 0, 0);
```

---

## 🎨 4. Mudar as Cores

### Em style.css
Encontre a seção `:root`:

```css
:root {
    --color-primary: #271d38;      /* Roxo escuro */
    --color-secondary: #C77DFF;    /* Roxo claro */
    --color-accent: #ff69b4;       /* Rosa */
    --color-light: #f6effc;        /* Branco quente */
    --color-dark: #1a0f2e;         /* Muito escuro */
}
```

### Cores Recomendadas

**Temática Vermelha**:
```css
--color-primary: #3d0000;
--color-secondary: #ff1744;
--color-accent: #ff6e40;
--color-light: #ffe0e0;
```

**Temática Azul**:
```css
--color-primary: #0d1f2d;
--color-secondary: #00bcd4;
--color-accent: #2196f3;
--color-light: #e0f7fa;
```

**Temática Dourada**:
```css
--color-primary: #3d2817;
--color-secondary: #ffd700;
--color-accent: #ff6b00;
--color-light: #fffef0;
```

### Encontrar Cores Online
Use: [coolors.co](https://coolors.co) ou [color-hex.com](https://www.color-hex.com)

---

## ✍️ 5. Mudar Textos Principais

### Hero Section
Em `index.html`:
```html
<h1 class="hero-title">NICOLY</h1>
<p class="hero-subtitle">Feliz Aniversário! ❤️</p>
<p class="hero-message">Amo você mais que tudo</p>
```

### Seção Contador
```html
<h2 class="section-title">Estamos Juntos Há</h2>
<span class="counter-label">Dias</span>
<span class="counter-label">Meses</span>
<span class="counter-label">Anos</span>
<span class="counter-label">Horas</span>
```

### Seção Carta
Encontre o `.letter-content` e edite os parágrafos:
```html
<p class="letter-content">
    Seu texto aqui...
</p>
```

### Seção Final
```html
<h2 class="final-title">Obrigado por Existir</h2>
<p class="final-text">Você é a minha pessoa favorita</p>
<p class="final-text final-emphasis">Eu te amo, Nicoly ❤️</p>
```

---

## 🎯 6. Personalizar Textos da Galeria

### Em script.js
Cada card tem 2 partes: fotos e textos

```javascript
2: {
    fotos: ['fotos/foto4.jpeg', 'fotos/foto5.jpeg'],
    textos: [
        'Novo texto para 1ª foto',
        'Novo texto para 2ª foto'
    ]
}
```

**Mantém a quantidade igual**!
- Se 3 fotos → 3 textos
- Se 6 fotos → 6 textos

---

## 🎭 7. Adicionar Animações Customizadas

### Criar Nova Animação
Em `style.css`, adicione um novo keyframe:

```css
@keyframes meuEfeito {
    0% {
        opacity: 0;
        transform: rotateY(0deg);
    }
    100% {
        opacity: 1;
        transform: rotateY(360deg);
    }
}
```

### Usar em Elemento
```css
.seu-elemento {
    animation: meuEfeito 1s ease-out;
}
```

---

## 🌐 8. Adicionar Google Analytics

No `<head>` do `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Substitua `G-XXXXXXXXXX` pelo seu ID do Google Analytics.

---

## 📱 9. Adicionar Favicon

1. Crie um arquivo `favicon.ico` (16x16 ou 32x32 pixels)
2. Coloque na raiz do projeto
3. No `<head>` adicione:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

---

## 🔗 10. Adicionar Links Customizados

### Link para Instagram
```html
<a href="https://instagram.com/seu-usuario" target="_blank">
    Instagram 📸
</a>
```

### Link para WhatsApp
```html
<a href="https://wa.me/seu-numero" target="_blank">
    WhatsApp 💬
</a>
```

---

## 🐛 11. Troubleshooting

### Fotos não carregam
- Verifique se estão em `fotos/`
- Confirme a extensão (`.jpeg` ou `.jpg`)
- Verifique se o caminho em `script.js` está correto

### Música não toca
- Confirme que `.mp3` existe
- Tente usar um formato diferente (`.wav`, `.ogg`)
- Verifique no console (F12) se há erros

### Contador não atualiza
- Abra console (F12) e veja erros
- Confirme a data em `script.js`
- Tente atualizar a página

### Cores não mudam
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Confirme a sintaxe hex (#RRGGBB)
- Tente adicionar `!important` temporariamente

---

## ✅ Checklist de Customização

- [ ] Adicionei minhas fotos
- [ ] Atualizei textos da galeria
- [ ] Mudei a data de início
- [ ] Mudar cores (opcional)
- [ ] Mudar textos principais (opcional)
- [ ] Adicionar música (opcional)
- [ ] Testem tudo em mobile
- [ ] Deploy no Vercel

---

## 🚀 Pronto!

Seu projeto está customizado! Agora:

1. Teste localmente: `python -m http.server 8000`
2. Abra: `http://localhost:8000`
3. Verifique tudo funcionando
4. Deploy no Vercel

Aproveite! 💕

