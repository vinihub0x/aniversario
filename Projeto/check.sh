#!/usr/bin/env bash
# 🎨 CHECKLIST PRÉ-PUBLICAÇÃO
# Execute este script para verificar se tudo está pronto

echo "╔════════════════════════════════════════════════════╗"
echo "║  🎁 Checklist Pré-Publicação                       ║"
echo "║     Landing Page Romântica v1.0                   ║"
echo "╚════════════════════════════════════════════════════╝"
echo ""

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅${NC} $1"
        return 0
    else
        echo -e "${RED}❌${NC} $1 (FALTANDO)"
        return 1
    fi
}

check_folder() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✅${NC} $1/"
        return 0
    else
        echo -e "${RED}❌${NC} $1/ (FALTANDO)"
        return 1
    fi
}

echo "📂 VERIFICANDO ARQUIVOS PRINCIPAIS"
echo "═══════════════════════════════════════════════════"
check_file "index.html"
check_file "style.css"
check_file "script.js"
check_file "fundo.png"
echo ""

echo "📂 VERIFICANDO PASTAS"
echo "═══════════════════════════════════════════════════"
check_folder "fotos"
check_folder "fonts"
check_folder "coracao"
echo ""

echo "📚 VERIFICANDO DOCUMENTAÇÃO"
echo "═══════════════════════════════════════════════════"
check_file "README.md"
check_file "QUICK_START_FINAL.txt"
check_file "GUIA_CUSTOMIZACAO.md"
check_file "REFATORACAO_COMPLETA.md"
check_file "CHECKLIST_VALIDACAO.md"
echo ""

echo "🔧 VERIFICANDO CONFIGURAÇÃO"
echo "═══════════════════════════════════════════════════"
check_file "vercel.json"
echo ""

echo "🎨 VERIFICANDO HTML"
echo "═══════════════════════════════════════════════════"

# Verificar meta tags
if grep -q '<meta name="viewport"' index.html; then
    echo -e "${GREEN}✅${NC} Meta viewport presente"
else
    echo -e "${RED}❌${NC} Meta viewport FALTANDO"
fi

# Verificar CSS linkado
if grep -q 'href="style.css"' index.html; then
    echo -e "${GREEN}✅${NC} CSS linkado"
else
    echo -e "${RED}❌${NC} CSS NÃO linkado"
fi

# Verificar JS linkado
if grep -q 'src="script.js"' index.html; then
    echo -e "${GREEN}✅${NC} JS linkado"
else
    echo -e "${RED}❌${NC} JS NÃO linkado"
fi

# Verificar sections
if grep -q '<section class="hero"' index.html; then
    echo -e "${GREEN}✅${NC} Hero section presente"
else
    echo -e "${RED}❌${NC} Hero section FALTANDO"
fi

echo ""
echo "🎯 VERIFICANDO JAVASCRIPT"
echo "═══════════════════════════════════════════════════"

# Verificar função abrirModal
if grep -q 'function abrirModal' script.js; then
    echo -e "${GREEN}✅${NC} Função abrirModal presente"
else
    echo -e "${RED}❌${NC} Função abrirModal FALTANDO"
fi

# Verificar dados do carrossel
if grep -q 'const carouselData' script.js; then
    echo -e "${GREEN}✅${NC} Dados carrossel presente"
else
    echo -e "${RED}❌${NC} Dados carrossel FALTANDO"
fi

# Verificar contador
if grep -q 'atualizarContador' script.js; then
    echo -e "${GREEN}✅${NC} Função contador presente"
else
    echo -e "${RED}❌${NC} Função contador FALTANDO"
fi

echo ""
echo "🎨 VERIFICANDO CSS"
echo "═══════════════════════════════════════════════════"

# Verificar variáveis CSS
if grep -q ':root {' style.css; then
    echo -e "${GREEN}✅${NC} Variáveis CSS presente"
else
    echo -e "${RED}❌${NC} Variáveis CSS FALTANDO"
fi

# Verificar animações
if grep -q '@keyframes' style.css; then
    echo -e "${GREEN}✅${NC} Animações presentes"
else
    echo -e "${RED}❌${NC} Animações FALTANDO"
fi

# Verificar media queries
if grep -q '@media' style.css; then
    echo -e "${GREEN}✅${NC} Media queries presente"
else
    echo -e "${RED}❌${NC} Media queries FALTANDO"
fi

echo ""
echo "📊 ESTATÍSTICAS"
echo "═══════════════════════════════════════════════════"

HTML_LINES=$(wc -l < index.html 2>/dev/null || echo "0")
CSS_LINES=$(wc -l < style.css 2>/dev/null || echo "0")
JS_LINES=$(wc -l < script.js 2>/dev/null || echo "0")

echo "HTML: $HTML_LINES linhas"
echo "CSS:  $CSS_LINES linhas"
echo "JS:   $JS_LINES linhas"
echo "Total: $((HTML_LINES + CSS_LINES + JS_LINES)) linhas de código"
echo ""

echo "✅ CHECKLIST PRÉ-PUBLICAÇÃO COMPLETO"
echo ""
echo "📋 Próximos passos:"
echo "   1. Revise a checklist acima"
echo "   2. Adicione suas fotos em pasta 'fotos/'"
echo "   3. Teste localmente: python -m http.server 8000"
echo "   4. Deploy no Vercel"
echo ""
echo "🎉 Pronto para publicar?"
