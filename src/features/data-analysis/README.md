# Análise de Dados - Sistema Financeiro

Esta funcionalidade implementa a segunda etapa do sistema financeiro, responsável por analisar os dados extraídos das notas fiscais e criar os registros necessários no banco de dados.

## Funcionalidades

### 1. Análise de Dados
- **Fornecedor**: Consulta se o fornecedor existe no banco de dados pelo CNPJ
- **Faturado**: Consulta se o faturado existe no banco de dados pelo CPF
- **Despesa**: Consulta se a classificação da despesa existe no banco de dados

### 2. Criação Automática de Registros
- Cria fornecedor se não existir
- Cria faturado se não existir
- Cria despesa se não existir
- Cria movimento (conta a pagar) com todas as informações

## Estrutura de Arquivos

```
src/features/data-analysis/
├── components/
│   ├── AnalysisResult.tsx      # Exibe resultado da análise
│   ├── ActionButtons.tsx       # Botões de ação (Analisar/Criar)
│   └── SuccessAlert.tsx        # Alerta de sucesso
├── hooks/
│   └── useDataAnalysis.ts      # Hook para gerenciar estado
├── services/
│   └── dataAnalysisService.ts  # Serviços de API
├── types.ts                    # Tipos TypeScript
├── DataAnalysisPage.tsx        # Página principal
└── index.ts                    # Exports
```

## Fluxo de Funcionamento

1. **Extração**: Dados são extraídos da nota fiscal
2. **Análise**: Sistema consulta banco de dados para verificar existência de:
   - Fornecedor (por CNPJ)
   - Faturado (por CPF) 
   - Despesa (por descrição)
3. **Criação**: Se algum registro não existir, é criado automaticamente
4. **Movimento**: Novo movimento (conta a pagar) é registrado
5. **Confirmação**: Usuário é informado do sucesso da operação

## Exemplo de Resultado

```
FORNECEDOR:
IGUAÇU MAQUINAS LTDA
CNPJ: 11.111.111/0001-00
NÃO EXISTE

FATURADO
BELTRANO DA SILVA
CPF: 999.999.999-99
EXISTE – ID: 19

DESPESA
MANUTENÇÃO E OPERAÇÃO
EXISTE – ID: 22
```

## Integração

A funcionalidade está integrada ao fluxo de extração existente. Após extrair os dados da nota fiscal, aparece um botão "ANALISAR DADOS" que leva para esta funcionalidade.

## APIs Necessárias

O sistema espera as seguintes APIs no backend:

- `GET /api/fornecedores/check/?cnpj={cnpj}`
- `GET /api/faturados/check/?cpf={cpf}`
- `GET /api/despesas/check/?descricao={descricao}`
- `POST /api/fornecedores/`
- `POST /api/faturados/`
- `POST /api/despesas/`
- `POST /api/movimentos/`
