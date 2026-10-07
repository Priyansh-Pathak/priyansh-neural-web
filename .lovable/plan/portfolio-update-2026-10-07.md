# Portfolio update

## What will change
- Update the portfolio copy to the supplied AI/ML research positioning, new availability text, and two-lab hero statistic while preserving the existing Ocean Deep visual identity.
- Replace the old GitHub profile URL, show up to six current non-fork repositories with loading and failure states, and add project links only when their URLs can be verified.
- Reorder featured projects and experience as specified, collapse earlier roles, remove duplicate resume actions, and add publication paper links only when a URL exists.
- Polish scroll navigation, progress, section reveals, and hero entrance with reduced-motion support; retain the existing EmailJS contact form and its send feedback.
- Update title/description and sharing metadata, plus a social preview image, canonical URL, sitemap, and robots instructions.

## Technical details
- Use the existing React/Vite structure and semantic Ocean Deep tokens; add Lenis and Framer Motion only for the explicitly requested scroll and reveal behavior.
- Keep project repository URLs unlinked until verified rather than interpreting the brief’s `[repo link]` placeholders as real URLs.
- Check the GitHub API result, preview rendering at mobile/tablet/desktop sizes, and the build diagnostics before marking the work complete.