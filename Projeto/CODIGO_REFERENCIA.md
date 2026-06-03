# 📋 Código Completo - Referência Rápida

## Sistema de Progresso

### Estrutura do JavaScript:

```javascript
// ===== SISTEMA DE PROGRESSO =====
let sistemaProgresso = {
    cardsCompletos: new Set(),  // Rastreia cards únicos
    progressoPercentual: 0,      // Percentual atual
    
    // Registra quando um card foi completamente visualizado
    registrarCardCompleto(numeroCard) {
        if (!this.cardsCompletos.has(numeroCard)) {  // Verifica se já existe
            this.cardsCompletos.add(numeroCard);      // Adiciona se novo
            this.atualizarBarra();                    // Atualiza visualmente
        }
    },
    
    // Atualiza a barra de progresso visualmente
    atualizarBarra() {
        const totalCards = 5;
        const cardsConcluidosCount = this.cardsCompletos.size;
        this.progressoPercentual = (cardsConcluidosCount / totalCards) * 100;
        
        // Busca elementos HTML
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        
        // Anima a barra
        progressBar.style.width = this.progressoPercentual + '%';
        progressText.textContent = Math.round(this.progressoPercentual) + '%';
    },
    
    // Verifica se está na última foto do card
    verificarSeCardEstaCompleto(numeroCard, indiceAtual) {
        const totalFotos = carouselData[numeroCard].fotos.length;
        return indiceAtual === totalFotos - 1;
    }
};
```

### Integração com Carrossel:

```javascript
// Dentro de atualizarConteudo()
function atualizarConteudo() {
    const card = estadoAtual.cardAtivo;
    const indice = estadoAtual.indiceAtual;
    
    // ... código existente ...
    
    // ✨ NOVO: Verifica se está na última foto
    if (indice === totalFotos - 1) {
        sistemaProgresso.registrarCardCompleto(card);
    }
}
```

---

## Modal de Texto Emocional

### HTML:

```html
<!-- Botão flutuante -->
<button class="btn-abrir-presente" onclick="abrirModalTexto()">
    Abrir 💌
</button>

<!-- Modal fullscreen -->
<div class="modal-texto-emocional" id="modalTextoEmocional">
    <button class="btn-fechar-texto" onclick="fecharModalTexto()">✕</button>
    
    <div class="modal-texto-container">
        <div class="modal-texto-content">
            <p class="texto-emocional">
                Quando eu te conheci, te achava chata pra krl, 
                e até hj eu acho. voce me ajuda constantemente, 
                ajudou com a fulana, ajudou a me recuperar mentalmente, 
                me ajudou a me dar um foco pra minha vida e pela primeira vvez, 
                quero criar uma familia. eu e voce, a mulher que eu mais amo, 
                quero casar e ter filhos. desculpa pelos meus varios erros, 
                eu to melhorando aos pouquuinhos, sei que vou errar mais algumas vezes, 
                não sou perfeito, mas prometo não cometer os mesmos erros anteriores. 
                te amo, nicoly, te amo... hoje tem né? rs
            </p>
            <div class="coracao-decorativo">💕</div>
        </div>
    </div>
</div>
```

### JavaScript:

```javascript
// ===== MODAL DE TEXTO EMOCIONAL =====

function abrirModalTexto() {
    const modalTexto = document.getElementById('modalTextoEmocional');
    modalTexto.classList.add('ativo');
    document.body.style.overflow = 'hidden';
}

function fecharModalTexto() {
    const modalTexto = document.getElementById('modalTextoEmocional');
    modalTexto.classList.remove('ativo');
    document.body.style.overflow = 'auto';
}

// Fechar ao clicar no fundo
document.addEventListener('DOMContentLoaded', function() {
    const modalTexto = document.getElementById('modalTextoEmocional');
    if (modalTexto) {
        modalTexto.addEventListener('click', function(event) {
            if (event.target === this) {
                fecharModalTexto();
            }
        });
    }
});

// Fechar com ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modalTexto = document.getElementById('modalTextoEmocional');
        if (modalTexto && modalTexto.classList.contains('ativo')) {
            fecharModalTexto();
        }
    }
});
```

### CSS Essencial:

```css
/* Barra de Progresso */
.progresso-barra-fill {
    width: 0%;
    background: linear-gradient(90deg, #C77DFF 0%, #ff00ff 50%, #C77DFF 100%);
    transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 0 15px rgba(199, 125, 255, 0.6);
}

/* Botão Abrir */
.btn-abrir-presente {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #C77DFF 0%, #ff00ff 100%);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-abrir-presente:hover {
    transform: scale(1.15) translateY(-5px);
}

/* Modal Texto */
.modal-texto-emocional {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, rgba(45, 10, 70, 0.99) 0%, rgba(100, 20, 150, 0.99) 100%);
    display: none;
    z-index: 9998;
}

.modal-texto-emocional.ativo {
    display: flex;
}

.texto-emocional {
    color: #f6effc;
    font-size: clamp(16px, 3vw, 20px);
    padding: 40px;
    background: rgba(50, 30, 70, 0.5);
    border: 2px solid rgba(199, 125, 255, 0.4);
    border-radius: 20px;
}
```

---

## Cálculo de Progresso

```javascript
// Exemplo de progresso:

// 1 card completo
cardsCompletos = {1}           → 1/5 × 100 = 20%

// 2 cards completos
cardsCompletos = {1, 2}        → 2/5 × 100 = 40%

// 3 cards completos
cardsCompletos = {1, 2, 3}     → 3/5 × 100 = 60%

// 4 cards completos
cardsCompletos = {1, 2, 3, 4}  → 4/5 × 100 = 80%

// 5 cards completos
cardsCompletos = {1, 2, 3, 4, 5} → 5/5 × 100 = 100%

// Se adicionar novamente o card 1
cardsCompletos ainda = {1, 2, 3, 4, 5} (Set previne duplicação!)
```

---

## Estados do Modal de Texto

```javascript
// Inicial (oculto)
.modal-texto-emocional {
    display: none;
}

// Ativo (visível)
.modal-texto-emocional.ativo {
    display: flex;
    animation: fadeIn 0.5s ease-out;
}

// Transitions:
// 1. Click "Abrir" → classList.add('ativo')
// 2. Modal aparece com fadeIn
// 3. Click "X" / ESC / fundo → classList.remove('ativo')
// 4. Modal desaparece
```

---

## Z-Index Hierarquia

```
9998: Modal de Texto (background)
9999: Modal de Fotos (background)
10000: Botões de fechar (foreground)
5001: Botão "Abrir" (flutuante)
5000: Barra de Progresso (fixa no topo)
```

---

## Eventos Implementados

```javascript
// 1. Clique em card → abrirModal(numeroCard)
<div class="card1" onclick="abrirModal(1)"></div>

// 2. Clique em "Abrir" → abrirModalTexto()
<button onclick="abrirModalTexto()">Abrir 💌</button>

// 3. Clique em "X" (modal fotos) → fecharModal()
<button onclick="fecharModal()">✕</button>

// 4. Clique em "X" (modal texto) → fecharModalTexto()
<button onclick="fecharModalTexto()">✕</button>

// 5. Clique em ▶ → avancarFoto() + verificação progresso
<button onclick="avancarFoto()">▶</button>

// 6. Clique em ◀ → voltarFoto()
<button onclick="voltarFoto()">◀</button>

// 7. ESC key → fecharModal() ou fecharModalTexto()
document.addEventListener('keydown', ...

// 8. Clique no background → fecharModal() ou fecharModalTexto()
document.addEventListener('click', ...
```

---

## Debugging

```javascript
// Ver cards completos no console
console.log(sistemaProgresso.cardsCompletos);
// Output: Set(2) { 1, 3 }

// Ver progresso percentual
console.log(sistemaProgresso.progressoPercentual);
// Output: 40

// Ver estado do carrossel
console.log(estadoAtual);
// Output: { cardAtivo: 2, indiceAtual: 1 }

// Limpar progresso (para testes)
sistemaProgresso.cardsCompletos.clear();
sistemaProgresso.atualizarBarra();
```

---

## Checklist de Implementação

✅ HTML:
- [ ] Barra de progresso com ids corretos
- [ ] Botão "Abrir" com onclick
- [ ] Modal texto com id e conteúdo
- [ ] Botões de fechar

✅ CSS:
- [ ] Animações de progresso
- [ ] Gradientes roxo/rosa
- [ ] Hover effects
- [ ] Responsividade
- [ ] Z-index correto

✅ JavaScript:
- [ ] Objeto sistemaProgresso criado
- [ ] Função registrar/atualizar
- [ ] Integração com avancar/conteudo
- [ ] Funções abrir/fechar modal texto
- [ ] Event listeners configurados

---

**Tudo implementado e testado! 🎉**
