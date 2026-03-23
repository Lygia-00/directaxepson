

# Corrigir tamanho e enquadramento do GalleryCarousel

## Alterações no `src/components/GalleryCarousel.tsx`

### Media (imagens e vídeo)
- `object-fit: contain` em vez de `cover`
- Height: `500px` desktop, `300px` mobile
- Images: background `#08123a`, centralizadas
- Video: background `#000000`
- `border-radius: 12px`, `width: 100%`

### Container geral
- `max-width: 960px` (era 900px)
- Contador "1/3" movido para fora da área de mídia (acima do vídeo não sobrepõe controles)

### Setas de navegação
- Desktop: posicionadas fora do container de mídia (`-left-14` / `-right-14`), nunca sobrepostas
- Mobile: `hidden` (ocultas), swipe mantido

### Vídeo
- Controles nativos visíveis — contador reposicionado para não sobrepor

