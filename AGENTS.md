# Project architecture rules

- Keep scroll-triggered reveals observer-driven and avoid per-scroll React state updates, because the portfolio uses several continuously animated visual layers.
- Keep uploaded binary media behind Lovable asset pointer imports instead of committing the original files, because the app should stay lightweight.