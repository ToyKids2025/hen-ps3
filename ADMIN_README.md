# 🔐 Painel Administrativo - HEN PS3

Sistema de gerenciamento de códigos de acesso para o instalador HEN PS3.

## 🚀 Como Acessar o Painel Admin

**URL:** `https://ToyKids2025.github.io/hen-ps3/admin.html`

**Senha padrão:** `admin123`

⚠️ **IMPORTANTE:** Altere a senha padrão no arquivo `admin.html` linha 202:
```javascript
const ADMIN_PASSWORD = "admin123"; // ⚠️ ALTERE ESTA SENHA!
```

## 📋 Funcionalidades

### ✅ Gerar Códigos Automaticamente
- **3 dias (72 horas)** - Padrão para clientes
- **7 dias** - Acesso estendido
- **30 dias** - Acesso mensal

### 📊 Dashboard com Estatísticas
- Total de códigos cadastrados
- Códigos ativos
- Códigos expirados

### 🔧 Gerenciar Códigos
- **Listar todos** - Visualizar todos os códigos
- **Renovar** - Adicionar +3 ou +7 dias a códigos ativos
- **Excluir** - Remover códigos desnecessários
- **Copiar** - Copiar código gerado para área de transferência

## 🎯 Fluxo de Uso

1. **Admin acessa:** `admin.html`
2. **Gera código** para o cliente (ex: 72 horas)
3. **Copia e envia** o código para o cliente
4. **Cliente acessa:** `https://ToyKids2025.github.io/hen-ps3/`
5. **Digita o código** na tela de login
6. **Acessa o instalador** HEN durante o período válido

## 🔒 Sistema de Validação

- Códigos são armazenados no **localStorage** do navegador
- Formato: `HEN-TIMESTAMP-RANDOM` (ex: `HEN-LV8K9J2-7XH4M`)
- Validação automática de expiração
- Sessão de 30 minutos após login bem-sucedido

## 📱 Exemplo de Código Gerado

```
HEN-LV8K9J2-7XH4M
Válido até: 28/11/2024 15:30
```

## ⚙️ Configurações Avançadas

### Alterar Prefixo dos Códigos
Arquivo `admin.html` linha 203:
```javascript
const CODE_PREFIX = "HEN"; // Altere aqui
```

### Alterar Duração da Sessão
Arquivo `installer.html` linha 16:
```javascript
if (!henCode || !henCodeTime || (Date.now() - henCodeTime) > 1800000) {
    // 1800000 = 30 minutos
    // 3600000 = 60 minutos
}
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilização moderna com glassmorphism
- **JavaScript Vanilla** - Lógica e validação
- **localStorage** - Armazenamento client-side

## ⚠️ Limitações

- Os códigos são armazenados no **localStorage do navegador**
- Se o usuário limpar o cache/dados do navegador, os códigos serão perdidos
- Para produção, recomenda-se implementar um backend real

## 🔐 Segurança

- Senha de admin protege acesso ao painel
- Códigos únicos gerados com timestamp
- Validação de expiração automática
- Sessão temporária de 30 minutos

## 📞 Suporte

Para dúvidas sobre o sistema administrativo, consulte a documentação ou entre em contato.

---

**Desenvolvido para facilitar o gerenciamento de acessos ao HEN PS3**
