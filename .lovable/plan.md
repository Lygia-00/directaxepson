
# Correções na Landing Page — 5 itens

## 1. Remover FontDebug (App.tsx)
Remove the entire `FontDebug` component (lines 12-29) and its `<FontDebug />` usage (line 37). Also remove unused `useState`/`useEffect` imports.

## 2. Tipografia e espaçamento global (index.css)
Update the `@layer base` block to add refined typography rules:
- `body`: font-size 16px, line-height 1.6, letter-spacing -0.01em
- `h1, h2, h3`: line-height 1.1, letter-spacing -0.03em
- Add `p` rule: font-weight 400, line-height 1.75, letter-spacing -0.01em

## 3. Espaçamento — BrazilSection e Hero stat cards

**BrazilSection cards:**
- Change padding from `p-6` to `py-7 px-6` (28px 24px)
- Number: add `mb-1.5` (6px), keep existing styles
- Title (h3): change `mt-2` to `mb-2` (8px gap to paragraph)
- Paragraph: add `leading-[1.65]`

**Hero stat cards:**
- Number: add `mb-1.5`, `leading-none`, keep `text-[1.6rem]`
- Label: add `leading-[1.55]`, `mb-1`
- Source: change `mt-2` to `mt-1`
- Gap already 4 (gap-4 = 16px) — correct

## 4. CompareSection — complete rewrite
New table with:
- 7 new rows of content as specified
- max-width 860px, border-radius 12px, overflow hidden, box-shadow
- Alternating row backgrounds (white / #f9f9f9, #fff5f5 / #fff0f0, #f0fdf4 / #e8faf0)
- Header: empty first col, red-tinted "Método Tradicional", navy "Com ColorWorks"
- Satoshi 500/600 13px throughout

## 5. SourcesBox — replace all 10 sources
Replace the entire sources array with the 10 new references provided.

## Files changed
- `src/App.tsx` — remove FontDebug
- `src/index.css` — typography rules
- `src/components/Hero.tsx` — stat card spacing
- `src/components/BrazilSection.tsx` — card spacing
- `src/components/CompareSection.tsx` — full rewrite
- `src/components/SourcesBox.tsx` — new sources
