# 🔍 Teste de Extração Real - Sistema Financeiro

## ✅ **Configuração Atual**

O sistema agora está configurado para:

1. **Tentar extrair dados reais** do PDF enviado
2. **Se a API falhar**, usar dados mockados como fallback
3. **Mostrar logs detalhados** no console
4. **Exibir dados organizados** em formato legível

## 🚀 **Como Testar a Extração Real**

### **1. Backend Django (Necessário)**
```bash
cd backend
python manage.py runserver
```
**URL**: http://localhost:8000

### **2. Frontend React**
```bash
cd frontend/sistema-financeiro-nfce
npm run dev
```
**URL**: http://localhost:5173

## 📄 **Testando com PDF Real**

### **Passo a Passo:**
1. **Acesse**: http://localhost:5173
2. **Faça upload** de um PDF de nota fiscal real
3. **Clique "EXTRAIR DADOS"**
4. **Verifique o console** (F12) para logs:
   - ✅ "Tentando extrair dados reais do PDF..."
   - ✅ "Dados extraídos com sucesso do PDF:"
   - OU ⚠️ "API não disponível, usando dados mockados"

### **Visualização dos Dados:**
- **Aba "Formatado"**: Dados organizados e legíveis
- **Aba "JSON"**: Dados brutos em formato JSON
- **Análise**: Usa os dados reais extraídos

## 🔍 **Logs no Console**

### **Extração Bem-sucedida:**
```
Tentando extrair dados reais do PDF...
✅ Dados extraídos com sucesso do PDF: {
  numero: "123456",
  serie: "1",
  emitente: { nome: "Empresa Real LTDA", cnpj: "12.345.678/0001-90" },
  destinatario: { nome: "Cliente Real", cnpj: "98.765.432/0001-10" },
  totais: { total: 1250.75 }
}
```

### **Extração com Fallback:**
```
Tentando extrair dados reais do PDF...
⚠️ API não disponível, usando dados mockados: Error: Failed to fetch
📄 Usando dados mockados para demonstração...
```

## 📊 **Dados na Análise**

Quando os dados são extraídos com sucesso, a análise mostrará:

### **Fornecedor:**
- **Nome**: Nome real do emitente da nota
- **CNPJ**: CNPJ real do emitente
- **Status**: NÃO EXISTE (simulado)

### **Faturado:**
- **Nome**: Nome real do destinatário
- **CPF/CNPJ**: CPF/CNPJ real do destinatário
- **Status**: NÃO EXISTE (simulado)

### **Despesa:**
- **Descrição**: Baseada nos itens reais da nota
- **Status**: NÃO EXISTE (simulado)

## 🛠️ **Verificações**

### **Backend Funcionando:**
- ✅ Django rodando em http://localhost:8000
- ✅ API `/api/extrator/extract/` respondendo
- ✅ Logs mostram "Dados extraídos com sucesso"

### **Backend Não Funcionando:**
- ❌ Django não rodando
- ❌ Erro de conexão na API
- ⚠️ Logs mostram "API não disponível, usando dados mockados"

## 🎯 **Resultado Esperado**

Com o backend funcionando, você deve ver:
1. **Dados reais** extraídos do PDF
2. **Análise usando** dados reais da nota
3. **Logs detalhados** no console
4. **Simulação completa** sem salvar no banco

## 🔧 **Troubleshooting**

### **Problema**: Sempre usa dados mockados
**Solução**: Verificar se o backend Django está rodando

### **Problema**: Erro 404 na API
**Solução**: Verificar URLs no backend e frontend

### **Problema**: PDF não é processado
**Solução**: Verificar se o backend tem o serviço de IA configurado

**Sistema configurado para extração real com fallback para mocks!** 🚀
