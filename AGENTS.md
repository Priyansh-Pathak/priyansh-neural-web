# Project architecture rules

- Keep scroll-triggered reveals observer-driven and avoid per-scroll React state updates, because the portfolio uses several continuously animated visual layers.
- Keep uploaded binary media behind Lovable asset pointer imports when the preview serves them correctly; use a local public fallback when the preview cannot resolve the hosted asset, because resume viewing and profile rendering must remain reliable.