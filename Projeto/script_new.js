// Dados do carrossel - cada card com suas fotos
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

let estadoAtual = {
    cardAtivo: null,
    indiceAtual: 0
};

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
    
    // Atualizar imagem
    document.getElementById('imagemModal').src = dados.fotos[indice];
    
    // Atualizar texto
    document.getElementById('textoModal').textContent = dados.textos[indice];
    
    // Atualizar indicador de posição
    document.getElementById('indicadorFoto').textContent = `${indice + 1} / ${totalFotos}`;
}

// Fechar modal ao clicar no fundo (fora do conteúdo)
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    const modalContainer = document.querySelector('.modal-container');
    
    if (event.target === modal) {
        fecharModal();
    }
});

// Suporte a teclado
document.addEventListener('keydown', function(event) {
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

// Suporte a gesto de deslizar (swipe) em dispositivos móveis
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
