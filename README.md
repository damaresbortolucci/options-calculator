# B Points & V Points - Calculadora Angular

Calculadora de Níveis Críticos para Day Trade - Versão Angular

## 📋 Descrição

Sistema convertido de React para Angular que calcula pontos críticos (B Points e V Points) baseados na superfície de volatilidade da B3 para operações de day trade no Dólar Futuro.

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
│   │   ├── options-calculator.component.ts
│   │   ├── options-calculator.component.html
│   │   ├── options-calculator.component.css
│   │   ├── app.component.ts
│   │   └── app.module.ts
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

## 🎯 Principais Diferenças da Versão React

### Gerenciamento de Estado
- **React:** useState, useMemo, useEffect
- **Angular:** Propriedades de classe, métodos, lifecycle hooks (ngOnInit)

### Sintaxe de Template
- **React:** JSX com JavaScript embutido
- **Angular:** HTML com diretivas Angular (*ngFor, *ngIf, [class], (click))

### Two-Way Data Binding
- **React:** Controlado via onChange e value
- **Angular:** [(ngModel)] para binding bidirecional

### Renderização Condicional
- **React:** {condition && <Component />}
- **Angular:** *ngIf="condition"

### Loops
- **React:** {array.map(item => ...)}
- **Angular:** *ngFor="let item of array"

## 🔧 Componentes Principais

### OptionsCalculatorComponent

Componente principal que gerencia:
- Dados de volatilidade
- Cálculos de strikes
- Pontos críticos (V Points e B Points)
- Interações do usuário

### Principais Métodos

- `updateCalculations()` - Atualiza todos os cálculos quando há mudança
- `calculateStrike()` - Calcula strike aproximado a partir do Delta
- `getDaysToExpiry()` - Calcula dias até o vencimento
- `calculateCriticalPoints()` - Calcula todos os pontos críticos
- `formatPrice()` - Formata preços para exibição

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


## ⚠️ Aviso Legal

Dados ilustrativos para fins educacionais. Consulte sempre um profissional antes de operar.

## 📄 Licença

Este projeto é para fins educacionais.

---

**Desenvolvido com ❤️ usando Angular**
