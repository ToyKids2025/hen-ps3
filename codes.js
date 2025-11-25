// ============================================
// SISTEMA DE CÓDIGOS HEN PS3 - DINÂMICO
// ============================================
// Os códigos são gerenciados pelo painel admin
// ============================================

const STORAGE_KEY = "henCodes";

// ============================================
// FUNÇÃO DE VALIDAÇÃO DE CÓDIGO
// ============================================
function validateCode(code) {
    // Buscar códigos do localStorage
    var codes = getCodes();

    if (!codes[code]) {
        return { valid: false, message: "Código inválido!" };
    }

    var now = new Date();
    var expiryDate = new Date(codes[code].expiry);

    if (now > expiryDate) {
        return {
            valid: false,
            message: "Código expirado! Validade até " + formatDate(expiryDate)
        };
    }

    return {
        valid: true,
        message: "Código válido até " + formatDate(expiryDate)
    };
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================
function getCodes() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
}

function formatDate(date) {
    return date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
