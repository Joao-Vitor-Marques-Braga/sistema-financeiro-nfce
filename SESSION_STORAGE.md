# 💾 SessionStorage - Sistema Financeiro

## ✅ **Funcionalidade Implementada**

O sistema agora salva automaticamente os dados extraídos da nota fiscal no **sessionStorage** do navegador.

## 🔄 **Como Funciona**

### **1. Salvamento Automático**
- Quando você clica em "EXTRAIR DADOS", os dados são salvos automaticamente
- Os dados persistem entre as páginas (extração → análise)
- Os dados são limpos automaticamente quando o navegador recarrega

### **2. Limpeza Automática**
- **Navegador recarrega** → Dados são perdidos
- **Nova aba/janela** → Dados não são compartilhados
- **Novo arquivo selecionado** → Dados anteriores são limpos

### **3. Limpeza Manual**
- Botão "Limpar Dados" na página de resultados
- Remove dados do sessionStorage e da interface

## 📊 **Dados Salvos**

```json
{
  "numero": "12345",
  "serie": "1",
  "emissao": "2025-08-15",
  "emitente": {
    "nome": "Fornecedor Exemplo LTDA",
    "cnpj": "12.345.678/0001-90"
  },
  "destinatario": {
    "nome": "Cliente Demo SA",
    "cnpj": "98.765.432/0001-10"
  },
  "itens": [...],
  "totais": {...}
}
```

## 🔍 **Logs no Console**

### **Salvamento:**
```
💾 Dados salvos no sessionStorage: { dados extraídos }
```

### **Carregamento:**
```
📁 Dados carregados do sessionStorage: { dados salvos }
```

### **Limpeza:**
```
🗑️ Dados anteriores removidos do sessionStorage
🗑️ Todos os dados foram limpos
```

## 🎯 **Vantagens**

✅ **Persistência**: Dados não se perdem ao navegar entre páginas  
✅ **Segurança**: Dados são limpos automaticamente  
✅ **Performance**: Não precisa re-extrair dados  
✅ **UX**: Experiência mais fluida  
✅ **Debug**: Logs detalhados no console  

## 🧪 **Como Testar**

### **Teste de Persistência:**
1. Extraia dados de uma nota fiscal
2. Navegue para a análise de dados
3. Volte para a página de extração
4. ✅ Os dados ainda estarão lá

### **Teste de Limpeza Automática:**
1. Extraia dados de uma nota fiscal
2. Recarregue a página (F5)
3. ✅ Os dados serão perdidos

### **Teste de Limpeza Manual:**
1. Extraia dados de uma nota fiscal
2. Clique em "Limpar Dados"
3. ✅ Os dados serão removidos

## 🔧 **Detalhes Técnicos**

### **Chave do SessionStorage:**
```javascript
const SESSION_STORAGE_KEY = 'extracted_invoice_data'
```

### **Operações:**
- **Salvar**: `sessionStorage.setItem(key, JSON.stringify(data))`
- **Carregar**: `JSON.parse(sessionStorage.getItem(key))`
- **Limpar**: `sessionStorage.removeItem(key)`

### **Tratamento de Erros:**
- Se dados corrompidos forem encontrados, são automaticamente removidos
- Logs de erro são exibidos no console

## 🎉 **Resultado**

Agora você pode:
- ✅ Extrair dados uma vez e usar em múltiplas páginas
- ✅ Navegar livremente entre extração e análise
- ✅ Dados são automaticamente limpos quando necessário
- ✅ Controle manual sobre os dados salvos

**Sistema mais robusto e com melhor experiência do usuário!** 🚀
