// ============================================
// SISTEMA DE CÓDIGOS HEN PS3
// ============================================
// Formato: "CODIGO": "DATA_EXPIRACAO"
// Data no formato: "AAAA-MM-DD"
// ============================================

var validCodes = {
    // EXEMPLOS (remova após testar):
    "HEN-TESTE-001": "2024-12-31",  // Código de teste
    "HEN-DEMO-002": "2024-12-31",   // Código demo
    
    // ADICIONE SEUS CÓDIGOS AQUI:
    // "HEN-CLIENTE-001": "2024-11-28",
    // "HEN-CLIENTE-002": "2024-11-29",
};

// ============================================
// NÃO MODIFIQUE ABAIXO DESTA LINHA
// ============================================
function validateCode(code) {
    if (!validCodes[code]) {
        return { valid: false, message: "Código inválido!" };
    }
    
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    
    var expiryDate = new Date(validCodes[code]);
    expiryDate.setHours(23, 59, 59, 999);
    
    if (today > expiryDate) {
        return { valid: false, message: "Código expirado! Validade até " + validCodes[code] };
    }
    
    return { valid: true, message: "Código válido!" };
}
