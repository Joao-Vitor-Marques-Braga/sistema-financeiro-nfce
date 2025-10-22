# 📊 Estrutura de Dados Reais - Sistema Financeiro

## ✅ **Problema Identificado e Corrigido**

O sistema estava esperando dados com estrutura `emitente`/`destinatario`, mas os dados reais extraídos têm estrutura `Fornecedor`/`Faturado`.

## 🔄 **Estrutura Real dos Dados Extraídos**

### **Dados Recebidos:**
```json
{
  "Fornecedor": { ... },
  "Faturado": { ... },
  "Número da Nota Fiscal": "000.012.776",
  "Data de Emissão": "30/04/2025",
  "Descrição dos produtos": [ ... ]
}
```

### **Estrutura Esperada (Antiga):**
```json
{
  "emitente": { ... },
  "destinatario": { ... },
  "numero": "...",
  "emissao": "...",
  "itens": [ ... ]
}
```

## 🛠️ **Correções Implementadas**

### **1. Detecção Automática de Estrutura**
```typescript
// Tenta diferentes estruturas de dados
if ((invoiceData as any).Fornecedor) {
  emitente = (invoiceData as any).Fornecedor
} else if (invoiceData.emitente) {
  emitente = invoiceData.emitente
}
```

### **2. Mapeamento Flexível de Campos**
```typescript
// Tenta diferentes nomes de campos
const emitenteNome = emitente.nome || emitente.Nome || 
                    emitente.razaoSocial || emitente.RazaoSocial || 'N/A'
const emitenteCnpj = emitente.cnpj || emitente.CNPJ || 
                    emitente.cpf || emitente.CPF || 'N/A'
```

### **3. Detecção de Itens/Produtos**
```typescript
// Tenta diferentes estruturas para itens
if (invoiceData.itens) {
  itens = invoiceData.itens
} else if (invoiceData['Descrição dos produtos']) {
  itens = invoiceData['Descrição dos produtos']
} else if (invoiceData.produtos) {
  itens = invoiceData.produtos
}
```

## 📋 **Logs de Debug Implementados**

### **Estrutura dos Dados:**
```
📋 Estrutura dos dados recebidos: {
  keys: ["Fornecedor", "Faturado", "Número da Nota Fiscal", ...],
  fornecedor: { ... },
  faturado: { ... }
}
```

### **Detecção de Estrutura:**
```
✅ Usando estrutura Fornecedor: { nome: "...", cnpj: "..." }
✅ Usando estrutura Faturado: { nome: "...", cnpj: "..." }
```

### **Dados Extraídos:**
```
📊 Dados extraídos: {
  emitenteNome: "FORNECEDOR REAL LTDA",
  emitenteCnpj: "12.345.678/0001-90",
  destinatarioNome: "CLIENTE REAL SA",
  destinatarioCnpj: "98.765.432/0001-10"
}
```

### **Geração de Despesa:**
```
🔍 Gerando descrição da despesa para: { dados }
✅ Usando estrutura "Descrição dos produtos": [ ... ]
📋 Itens encontrados: 1
📝 Primeira descrição encontrada: "Manutenção de Equipamentos"
```

## 🎯 **Compatibilidade**

### **Estruturas Suportadas:**

#### **Fornecedor/Faturado (Dados Reais):**
- `Fornecedor` → `emitente`
- `Faturado` → `destinatario`
- `Descrição dos produtos` → `itens`

#### **Emitente/Destinatário (Mock):**
- `emitente` → `emitente`
- `destinatario` → `destinatario`
- `itens` → `itens`

#### **Campos Flexíveis:**
- `nome` / `Nome` / `razaoSocial` / `RazaoSocial`
- `cnpj` / `CNPJ` / `cpf` / `CPF`

## 🧪 **Como Testar**

### **Teste com Dados Reais:**
1. Extraia dados de uma nota fiscal real
2. Verifique os logs no console
3. Deve mostrar "✅ Usando estrutura Fornecedor/Faturado"
4. Análise deve funcionar com dados reais

### **Teste com Dados Mock:**
1. Use dados mockados (se API falhar)
2. Verifique os logs no console
3. Deve mostrar "✅ Usando estrutura emitente/destinatario"
4. Análise deve funcionar com dados mockados

## 🔧 **Estrutura de Código**

### **Detecção de Estrutura:**
```typescript
// Log detalhado da estrutura
console.log('📋 Estrutura dos dados recebidos:', {
  keys: Object.keys(invoiceData),
  fornecedor: (invoiceData as any).Fornecedor,
  faturado: (invoiceData as any).Faturado
})

// Detecção automática
let emitente: any = null
if ((invoiceData as any).Fornecedor) {
  emitente = (invoiceData as any).Fornecedor
} else if (invoiceData.emitente) {
  emitente = invoiceData.emitente
}
```

### **Mapeamento Flexível:**
```typescript
// Tenta diferentes nomes de campos
const emitenteNome = emitente.nome || emitente.Nome || 
                    emitente.razaoSocial || emitente.RazaoSocial || 'N/A'
```

## 🎉 **Resultado**

**Agora o sistema detecta automaticamente a estrutura dos dados extraídos e funciona tanto com dados reais quanto com dados mockados!** 🚀

### **Vantagens:**
✅ **Compatibilidade** com diferentes estruturas  
✅ **Detecção automática** da estrutura  
✅ **Logs detalhados** para debug  
✅ **Fallbacks robustos** para campos ausentes  
✅ **Funciona** com dados reais e mockados  

### **Próximos Passos:**
- ✅ Estrutura real detectada
- ✅ Mapeamento flexível implementado
- ✅ Logs de debug adicionados
- 🔄 Sistema funcionando com dados reais
