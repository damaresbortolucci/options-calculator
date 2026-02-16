# B Points & V Points - Calculadora Angular

Calculadora de Níveis Críticos para Day Trade - Versão Angular

## 📋 Descrição

Sistema em Angular que calcula pontos críticos (B Points e V Points) baseados na superfície de volatilidade da B3 para operações de day trade no Dólar Futuro.

## 🚀 Tecnologias

- **Angular 18** - Framework principal
- **TypeScript** - Linguagem de programação
- **Tailwind CSS** - Estilização (via CDN)
- **RxJS** - Programação reativa

## 📦 Estrutura do Projeto

```
/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── components/           # Componentes reutilizáveis
│   │   │   │   ├── educational-section/
│   │   │   │   ├── atm-reference/
│   │   │   │   ├── critical-points/
│   │   │   │   ├── input-controls/
│   │   │   │   ├── price-ladder/
│   │   │   │   ├── strategies/
│   │   │   │   └── volatility-table/
│   │   │   ├── models/               # Interfaces e tipos
│   │   │   │   └── volatility.model.ts
│   │   │   ├── services/             # Lógica de negócio
│   │   │   │   └── options-calculator.service.ts
│   │   │   ├── constants/            # Configurações e constantes
│   │   │   │   └── app.constants.ts
│   │   │   ├── mocks/                # Dados de teste
│   │   │   │   └── volatility.mock.ts
│   │   │   ├── dashboard.component.ts
│   │   │   ├── dashboard.component.html
│   │   │   └── dashboard.component.css
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   └── img/
│   ├── main.ts
│   ├── index.html
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── tsconfig.app.json
```

## 🛠️ Instalação

1. **Instale as dependências:**

```bash
npm install
```

2. **Execute o projeto:**

```bash
npm start
```

3. **Acesse no navegador:**

```
http://localhost:4200
```

## 📚 Funcionalidades

- ✅ Cálculo de V Points (Suportes - Aceleração de Baixa)
- ✅ Cálculo de B Points (Resistências - Aceleração de Alta)
- ✅ Referência ATM (At-The-Money)
- ✅ Escada de Preços Visual
- ✅ Estratégias de Day Trade
- ✅ Superfície de Volatilidade Interativa
- ✅ Seção Educacional sobre Delta Hedge
- ✅ Interface responsiva e moderna
- ✅ Arquitetura modular com separação de responsabilidades
- ✅ Services injetáveis para lógica de negócio
- ✅ Tipagem forte com TypeScript


## 🏗️ Arquitetura

O projeto segue uma arquitetura modular e escalável:

### Separação de Responsabilidades

- **Components:** Focados apenas em apresentação e interação com usuário
- **Services:** Contêm toda a lógica de negócio e cálculos
- **Models:** Definem interfaces e tipos TypeScript
- **Constants:** Centralizam configurações e valores fixos
- **Mocks:** Isolam dados de teste para facilitar desenvolvimento

### Benefícios da Arquitetura

- ✅ **Testabilidade:** Services podem ser testados isoladamente
- ✅ **Manutenibilidade:** Código organizado e fácil de localizar
- ✅ **Reutilização:** Componentes e services podem ser reutilizados
- ✅ **Escalabilidade:** Fácil adicionar novos recursos sem afetar código existente
- ✅ **Type Safety:** TypeScript garante tipagem em toda a aplicação

## 🔧 Componentes Principais

### DashboardComponent

Componente principal que coordena:

- Gerenciamento de estado (spot price, vencimento selecionado)
- Integração com serviços de cálculo
- Coordenação entre sub-componentes
- Atualização de dados em tempo real

### Componentes Especializados

#### InputControlsComponent

Controles para entrada de dados (spot price, vencimento).

#### EducationalSectionComponent

Seção educacional sobre Delta Hedge e conceitos de mercado.

#### CriticalPointsComponent

Exibição dos V Points e B Points calculados.

#### AtmReferenceComponent

Referência do nível ATM (At-The-Money).

#### PriceLadderComponent

Escada de preços visual com marcações dos níveis críticos.

#### VolatilityTableComponent

Tabela interativa da superfície de volatilidade.

#### DayTradingStrategyComponent

Estratégias e recomendações para day trade.

### OptionsCalculatorService

Serviço responsável por toda a lógica de cálculos:

- `calculateStrike()` - Calcula strike aproximado a partir do Delta
- `getDaysToExpiry()` - Calcula dias até o vencimento
- `calculateCriticalPoints()` - Calcula todos os pontos críticos (V e B)
- `formatPrice()` - Formata preços para exibição

### Models

Interfaces TypeScript para tipagem forte:

- `VolatilityData` - Dados de volatilidade por vencimento
- `CriticalPoint` - Estrutura de um ponto crítico
- `CriticalPoints` - Coleção de pontos críticos (V e B)
- `DeltaPoint` - Configuração de pontos delta

### Constants

Configurações centralizadas:

- `MONTHS_MAP` - Mapeamento de meses
- `STRENGTH_COLORS` - Cores para níveis de força
- `PUT_DELTAS_CONFIG` - Configuração dos V Points
- `CALL_DELTAS_CONFIG` - Configuração dos B Points

### Mocks

Dados de teste para desenvolvimento:

- `MOCK_VOLATILITY_DATA` - Superfície de volatilidade simulada

## 🎨 Estilização

O projeto utiliza:

- **Tailwind CSS** via CDN para utility classes
- **CSS customizado** para animações e efeitos especiais
- **Gradientes e efeitos glass** para visual moderno

## 📖 Conceitos Implementados

### Delta Hedge

Mecanismo onde vendedores de opções ajustam posições no futuro para manter portfólio Delta-Neutro.

### V Points (Suportes)

Níveis onde vendedores de Puts são forçados a vender, acelerando a queda.

### B Points (Resistências)

Níveis onde vendedores de Calls são forçados a comprar, acelerando a alta.

## 🔄 Comandos Úteis

```bash
# Desenvolvimento
npm start

# Build de produção
npm run build

# Build com watch mode
npm run watch

# Servir build de produção
npm run serve
```

## 📝 Notas Importantes

1. **Standalone Components:** O projeto utiliza standalone components (Angular 14+)
2. **FormsModule:** Importado para usar [(ngModel)]
3. **CommonModule:** Importado para usar diretivas estruturais
4. **Tailwind CDN:** Usado para facilitar a configuração (considere instalação via npm em produção)
5. **Arquitetura Modular:** Separação clara entre models, services, constants e mocks
6. **Dependency Injection:** Services injetados para facilitar testes e manutenção
7. **Type Safety:** Interfaces TypeScript garantem tipagem forte em todo o projeto

## ⚠️ Aviso Legal

Dados ilustrativos para fins educacionais. Consulte sempre um profissional antes de operar.

## 📄 Licença

Este projeto é para fins educacionais.

---

**Desenvolvido com ❤️ usando Angular**
