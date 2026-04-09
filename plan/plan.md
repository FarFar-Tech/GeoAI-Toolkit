

# Remove Lovable Branding

## Changes

### 1. Hide the "Edit with Lovable" badge on published deployments
- Use the `publish_settings--set_badge_visibility` tool to hide it.

### 2. Update `index.html` — browser tab title and meta tags
- Title: "GTK GeoAI Toolkit"
- Description: "AI-powered geological and geospatial analytics toolkit for GTK Finland"
- Remove Lovable references from og:title, og:description, author, twitter:site
- Replace og:image with a neutral or remove it

### 3. Update `src/components/AppSidebar.tsx` — sidebar footer
- Change "Powered by Lovable AI" to something like "Powered by GTK GeoAI" or remove it entirely

### 4. Files NOT changed
- `vite.config.ts` (lovable-tagger is a dev tool, not user-facing)
- `playwright*.ts` (test infrastructure, not user-facing)
- `supabase/functions/gtk-chat/index.ts` (LOVABLE_API_KEY is a backend secret, not visible to users)
- Error messages in ChatInterface/MapInterpreter referencing "Lovable Cloud" will be reworded to generic messages

### Summary of files to edit
| File | Change |
|------|--------|
| `index.html` | Title, meta tags, OG image |
| `src/components/AppSidebar.tsx` | Footer text |
| `src/components/ChatInterface.tsx` | Error message |
| `src/pages/MapInterpreter.tsx` | Error message |

