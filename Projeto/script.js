/* ========================================
   DADOS DO CARROSSEL / GALERIA
   ======================================== */

const carouselData = {
    1: {
        fotos: ['fotos/foto1.jpeg', 'fotos/foto2.jpeg', 'fotos/foto3.jpeg'],
        textos: [
            '✨ Cada momento contigo é um tesouro que guardo no meu coração.',
            '💖 Seus olhos me fazem esquecer todo o resto do mundo.',
            '🌹 Você é a razão mais bonita do meu sorriso.'
        ]
    },
    2: {
        fotos: ['fotos/foto4.jpeg', 'fotos/foto5.jpeg', 'fotos/foto6.jpeg'],
        textos: [
            '💕 Você não é só meu amor, você é minha eternidade.',
            '✨ No seu abraço encontro o lar que sempre procurei.',
            '🔥 Seu beijo é melhor que qualquer sonho.'
        ]
    },
    3: {
        fotos: ['fotos/foto7.jpeg', 'fotos/foto8.jpeg', 'fotos/foto9.jpeg'],
        textos: [
            '💗 Viver é muito melhor quando você está ao meu lado.',
            '🌟 Você é o melhor presente que a vida me deu.',
            '💌 Meu coração bate só por você, sempre.'
        ]
    },
    4: {
        fotos: ['fotos/foto10.jpeg', 'fotos/foto11.jpeg', 'fotos/foto12.jpeg'],
        textos: [
            '🌺 Com você, cada dia é uma nova razão para amar.',
            '💑 Você é meu início, meio e fim da história mais bonita.',
            '✨ Te amar é o melhor acerto da minha vida.'
        ]
    },
    5: {
        fotos: ['fotos/foto13.jpeg', 'fotos/foto14.jpeg', 'fotos/foto15.jpeg', 'fotos/foto16.jpeg', 'fotos/foto17.jpeg', 'fotos/foto18.jpeg'],
        textos: [
            '💝 Cada beijo seu é um bilhete de amor que não precisa de palavras.',
            '🔮 Você me completa de um jeito que ninguém mais poderia.',
            '💖 Meu amor por você não tem fim, é infinito como as estrelas.',
            '🌸 Você é meu porto seguro, meu abrigo perfeito.',
            '✨ Te amar é respirar, é viver, é tudo que faz sentido.',
            '💕 Para sempre com você, meu amor. Você é meu destino.'
        ]
    }
};

/* ========================================
   ESTADO GLOBAL
   ======================================== */

let estadoAtual = {
    cardAtivo: null,
    indiceAtual: 0
};

let sistemaProgresso = {
    cardsCompletos: new Set(),
    progressoPercentual: 0,
    
    registrarCardCompleto(numeroCard) {
        if (!this.cardsCompletos.has(numeroCard)) {
            this.cardsCompletos.add(numeroCard);
            this.atualizarBarra();
        }
    },
    
    atualizarBarra() {
        const totalCards = 5;
        const cardsConcluidosCount = this.cardsCompletos.size;
        this.progressoPercentual = (cardsConcluidosCount / totalCards) * 100;
        
        const barraElement = document.getElementById('barraProgresso');
        if (barraElement) {
            barraElement.style.width = this.progressoPercentual + '%';
        }
        
        this.atualizarEstadoBotao();
    },
    
    atualizarEstadoBotao() {
        const botaoAbrir = document.getElementById('btnAbrirPresente');
        if (botaoAbrir) {
            if (this.progressoPercentual >= 100) {
                botaoAbrir.classList.remove('desabilitado');
            } else {
                botaoAbrir.classList.add('desabilitado');
            }
        }
    },
    
    verificarSeCardEstaCompleto(numeroCard, indiceAtual) {
        const totalFotos = carouselData[numeroCard].fotos.length;
        return indiceAtual === totalFotos - 1;
    }
};

/* ========================================
   FUNÇÕES DO MODAL / GALERIA
   ======================================== */

function abrirModal(numeroCard) {
    estadoAtual.cardAtivo = numeroCard;
    estadoAtual.indiceAtual = 0;
    
    const modal = document.getElementById('modal');
    modal.classList.add('ativo');
    
    atualizarConteudo();
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('ativo');
    document.body.style.overflow = 'auto';
    
    estadoAtual.cardAtivo = null;
    estadoAtual.indiceAtual = 0;
}

function avancarFoto() {
    const card = estadoAtual.cardAtivo;
    const totalFotos = carouselData[card].fotos.length;
    
    estadoAtual.indiceAtual = (estadoAtual.indiceAtual + 1) % totalFotos;
    atualizarConteudo();
    
    if (sistemaProgresso.verificarSeCardEstaCompleto(card, estadoAtual.indiceAtual - 1)) {
        sistemaProgresso.registrarCardCompleto(card);
    }
}

function voltarFoto() {
    const card = estadoAtual.cardAtivo;
    const totalFotos = carouselData[card].fotos.length;
    
    estadoAtual.indiceAtual = (estadoAtual.indiceAtual - 1 + totalFotos) % totalFotos;
    atualizarConteudo();
}

function atualizarConteudo() {
    const card = estadoAtual.cardAtivo;
    const indice = estadoAtual.indiceAtual;
    
    const dados = carouselData[card];
    const totalFotos = dados.fotos.length;
    
    document.getElementById('imagemModal').src = dados.fotos[indice];
    document.getElementById('textoModal').textContent = dados.textos[indice];
    document.getElementById('indicadorFoto').textContent = `${indice + 1} / ${totalFotos}`;
    
    if (indice === totalFotos - 1) {
        sistemaProgresso.registrarCardCompleto(card);
    }
}

/* ========================================
   FUNÇÕES DO MODAL DE TEXTO
   ======================================== */

function abrirModalTexto() {
    if (sistemaProgresso.progressoPercentual < 100) {
        return;
    }
    
    const modalTexto = document.getElementById('modalTextoEmocional');
    modalTexto.classList.add('ativo');
    document.body.style.overflow = 'hidden';
}

function fecharModalTexto() {
    const modalTexto = document.getElementById('modalTextoEmocional');
    modalTexto.classList.remove('ativo');
    document.body.style.overflow = 'auto';
}

/* ========================================
   CONTADOR DE RELACIONAMENTO
   ======================================== */

const dataInicio = new Date(2026, 1, 13, 0, 0, 0); // 13/02/2026

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;
    
    const milisegundosPorHora = 3600000;
    const milisegundosPorDia = 86400000;
    const milisegundosPorMes = 2592000000;
    const milisegundosPorAno = 31536000000;
    
    let horas = Math.floor((diferenca % milisegundosPorDia) / milisegundosPorHora);
    let dias = Math.floor((diferenca % milisegundosPorMes) / milisegundosPorDia);
    let meses = Math.floor((diferenca % milisegundosPorAno) / milisegundosPorMes);
    let anos = Math.floor(diferenca / milisegundosPorAno);
    
    document.getElementById('dias').textContent = dias;
    document.getElementById('meses').textContent = meses;
    document.getElementById('anos').textContent = anos;
    document.getElementById('horas').textContent = horas;
}

/* ========================================
   CONTROLE DE MÚSICA
   ======================================== */

let musicaAtiva = false;

function toggleMusica() {
    const audio = document.getElementById('audioMusica');
    const btnMusica = document.getElementById('btnMusica');
    
    if (btnMusica && audio.src) {
        if (musicaAtiva) {
            audio.pause();
            btnMusica.textContent = '🎵 Tocar Música';
            musicaAtiva = false;
        } else {
            audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
            btnMusica.textContent = '⏸️ Pausar Música';
            musicaAtiva = true;
        }
    }
}

/* ========================================
   EVENT LISTENERS - MODAL DE GALERIA
   ======================================== */

document.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    const modalContainer = document.querySelector('.modal-container');
    
    if (event.target === modal) {
        fecharModal();
    }
});

/* ========================================
   EVENT LISTENERS - MODAL DE TEXTO
   ======================================== */

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

/* ========================================
   NAVEGAÇÃO POR TECLADO - MODAL
   ======================================== */

document.addEventListener('keydown', function(event) {
    // Fechar modal de texto com ESC
    const modalTexto = document.getElementById('modalTextoEmocional');
    if (modalTexto && modalTexto.classList.contains('ativo')) {
        if (event.key === 'Escape') {
            fecharModalTexto();
        }
    }
    
    // Navegação no modal de fotos
    const modal = document.getElementById('modal');
    if (!modal.classList.contains('ativo')) return;
    
    if (event.key === 'ArrowRight') {
        avancarFoto();
    } else if (event.key === 'ArrowLeft') {
        voltarFoto();
    } else if (event.key === 'Escape') {
        fecharModal();
    }
});

/* ========================================
   NAVEGAÇÃO POR TOUCH - SWIPE
   ======================================== */

let touchStartX = 0;
let touchEndX = 0;

document.getElementById('modal').addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.getElementById('modal').addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const modal = document.getElementById('modal');
    if (!modal.classList.contains('ativo')) return;
    
    const diferenca = touchStartX - touchEndX;
    
    if (Math.abs(diferenca) > 50) {
        if (diferenca > 0) {
            avancarFoto();
        } else {
            voltarFoto();
        }
    }
}

/* ========================================
   SCROLL REVEAL - ANIMAÇÕES AO SCROLL
   ======================================== */

function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = entry.target.dataset.animation || 'slideUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-animation]').forEach(el => {
        observer.observe(el);
    });
}

/* ========================================
   INICIALIZAÇÃO
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar estado do botão "Abrir Presente"
    sistemaProgresso.atualizarEstadoBotao();
    
    // Inicializar contador
    atualizarContador();
    setInterval(atualizarContador, 1000);
    
    // Setup scroll reveal
    setupScrollReveal();
    
    // Verificar se há áudio para a música
    const btnMusica = document.getElementById('btnMusica');
    const audioMusica = document.getElementById('audioMusica');
    
    if (btnMusica && !audioMusica.src) {
        btnMusica.disabled = true;
        btnMusica.style.opacity = '0.5';
        btnMusica.style.cursor = 'not-allowed';
    }
});