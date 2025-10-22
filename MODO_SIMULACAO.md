# 🧪 Modo Simulação - Sistema Financeiro

## ✅ **Configuração Atual**

O sistema está configurado para funcionar em **modo simulação**, onde:

- ✅ **Usa dados reais** extraídos da nota fiscal
- ✅ **Simula consultas** ao banco de dados
- ✅ **Simula criação** de registros
- ✅ **NÃO salva nada** no banco de dados
- ✅ **Mostra logs** no console do navegador

## 🎯 **Como Funciona a Simulação**

### 1. **Extração de Dados**
- Upload de PDF → Extrai dados mockados realistas
- Dados incluem: emitente, destinatário, itens, valores

### 2. **Análise de Dados**
- **Fornecedor**: Usa dados reais da nota (emitente)
- **Faturado**: Usa dados reais da nota (destinatário)  
- **Despesa**: Gera descrição baseada nos itens da nota
- **Status**: Todos simulam como "NÃO EXISTE" no banco

### 3. **Criação Simulada**
- Gera IDs aleatórios para novos registros
- Logs no console mostram o que seria criado
- Simula delay de API (1.5 segundos)
- Mostra mensagem de sucesso

## 📊 **Dados de Exemplo**

### **Nota Fiscal Mockada:**
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
  "totais": {
    "total": 453.40
  }
}
```

### **Análise Simulada:**
```
FORNECEDOR:
Fornecedor Exemplo LTDA
CNPJ: 12.345.678/0001-90
NÃO EXISTE

FATURADO:
Cliente Demo SA
CPF: 98.765.432/0001-10
NÃO EXISTE

DESPESA
COMPRAS GERAIS
NÃO EXISTE
```

## 🔍 **Logs no Console**

Quando executar a análise, verá logs como:

```
📝 Fornecedor simulado criado: ID 847 - Fornecedor Exemplo LTDA
👤 Faturado simulado criado: ID 392 - Cliente Demo SA
💰 Despesa simulada criada: ID 156 - COMPRAS GERAIS

Dados que seriam salvos no banco: {
  fornecedorId: 847,
  faturadoId: 392,
  despesaId: 156,
  valor: 453.4,
  dataVencimento: "2025-02-15",
  observacoes: "Nota fiscal 12345 - Série 1"
}
```

## 🚀 **Como Testar**

1. **Acesse**: http://localhost:5173
2. **Faça upload** de qualquer arquivo
3. **Clique "EXTRAIR DADOS"** → Verá dados mockados
4. **Clique "ANALISAR DADOS"** → Verá análise com dados reais
5. **Clique "CRIAR MOVIMENTO"** → Verá simulação completa
6. **Abra o console** (F12) → Verá logs detalhados

## 🔄 **Para Ativar Backend Real**

1. **Descomentar linhas** nos arquivos de serviço
2. **Comentar simulações** temporárias
3. **Executar backend Django**
4. **Configurar banco de dados**

## 🎉 **Vantagens da Simulação**

- ✅ **Testa interface completa** sem backend
- ✅ **Usa dados realistas** da nota fiscal
- ✅ **Simula fluxo real** de negócio
- ✅ **Mostra logs detalhados** para debug
- ✅ **Permite demonstração** completa
- ✅ **Não afeta banco** de dados

**Sistema perfeito para demonstração e testes!** 🚀
