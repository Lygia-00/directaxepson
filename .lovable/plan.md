
# Landing Page Directa × HOSPEX 2026

## Visão Geral
Landing page completa para a Directa (parceira Epson), focada no mercado hospitalar para o evento HOSPEX 2026. Design com identidade visual oficial da Directa (vermelho #e70036, azul marinho #08123a) e tipografia Satoshi + Clash Display.

## Estrutura de Componentes (12 seções)

1. **Navbar** — Fixa no topo com logo "DIRECTA.", badge HOSPEX 2026, CTA de demonstração, blur e shadow ao scroll
2. **Hero** — Grid 2 colunas com headline de impacto, estatísticas alarmantes (mortes evitáveis, custos), 4 stat cards com dados da OMS, CTAs primário e ghost
3. **CostSection** (#dados) — Fundo cinza claro, blockquote com citação, 4 cards de custos invisíveis (indenizações, reputação, reinternações, turnover)
4. **BrazilSection** — Fundo azul marinho, 6 cards com dados do cenário brasileiro (55 mil mortes/ano, 75% sem padrão, etc.)
5. **SolutionSection** (#solucao) — Fundo branco, 6 cards de funcionalidades da solução ColorWorks (foto real, QR Code, cores de risco, etc.) com hover animado
6. **CompareSection** — Tabela comparativa "Método Tradicional vs Com ColorWorks" com 7 linhas de features
7. **AppsSection** — Grid 2 colunas com 10 aplicações numeradas da solução
8. **FomoBanner** — Banner vermelho com contador animado (0→6 vagas) e CTA urgente
9. **TrustSection** — 3 cards de confiança (Parceiro Epson, Integração, Implementação guiada)
10. **CTASection** (#contato) — Formulário com 3 campos (nome, hospital, WhatsApp) + botão + garantias
11. **SourcesBox** — 10 fontes e referências científicas listadas
12. **Footer** — Copyright + "DIRECTA. × EPSON"

## Design System
- Cores: vermelho #e70036, azul marinho #08123a, azul #00318e, cinza #d2d2d2
- Fontes: Satoshi (corpo) + Clash Display (headlines/números)
- Logo: "DIRECTA." em Satoshi 800 com ponto vermelho

## Animações
- Scroll reveal com IntersectionObserver em todos os cards
- Hero com fadeUp sequencial
- Contador animado no FomoBanner
- Hover com translateY e shadow nos solution cards

## Responsividade
- Desktop: layouts multi-coluna conforme especificado
- Tablet (<900px): reduções para 2 e 1 coluna
- Mobile (<640px): tudo em 1 coluna, stacks verticais
