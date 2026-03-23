

# Update GalleryCarousel to use Supabase Storage

## Changes — single file: `src/components/GalleryCarousel.tsx`

1. **Import Supabase client** from `@/integrations/supabase/client`
2. **Replace slides array** with 3 slides using `supabase.storage.from('images').getPublicUrl(file).data.publicUrl` to generate URLs:
   - `familia_produtos.png` (image)
   - `Impressora de Etiquetas ColorWorks C4000.png` (image)
   - `Directa_Epson.MOV` (video)
3. **Render logic**: Check if slide is video (`.MOV`) → render `<video controls muted playsInline>` instead of `<img>`. Both use `w-full`, `object-cover`, `rounded-xl`, max-height 480px.
4. **Auto-play pause**: When the video slide is active (`current === 2`), set `isPaused = true` automatically via useEffect.
5. **Remove captions**: Delete the caption `<p>` element entirely. Remove `caption` from slide data.
6. Keep all existing carousel controls (arrows, dots, counter, touch/swipe, scroll reveal header).

