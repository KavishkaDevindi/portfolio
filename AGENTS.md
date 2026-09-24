## Portfolio-specific conventions

This scaffold has been extended into a personal portfolio site. When editing,
respect the following patterns.

### Routes and pages
- `src/App.tsx` — sets up `react-router-dom` with routes: `/` (Home), `/projects`, `/contact`
- `src/pages/Home.tsx` — hero, stats strip, technology stack, CTA
- `src/pages/Contact.tsx` — contact info cards (currently no form)
- `src/pages/Projects.tsx` — project listing

### Icons
- **Always use `react-icons`** — do not inline raw `<svg>` paths.
- Brand logos: `react-icons/si` (e.g. `SiReact`, `SiNodedotjs`, `SiTailwindcss`)
- Material UI: `react-icons/md` (e.g. `MdEmail`, `MdLocationOn`)
- Font Awesome: `react-icons/fa` (e.g. `FaGithub`, `FaLinkedinIn`)
- Tabler: `react-icons/tb` (e.g. `TbApi`)
- Social icons in `Home.tsx` and `Contact.tsx` follow the same pattern: `Icon: FaGithub` in data arrays, rendered as `<Icon size={18} />`.

### Design language
- Primary accent: `#7c6dff` (purple), secondary `#9d8fff`, `#b09fff`
- Background base: `#0e0e18` / `#14141f`
- Text: `#f0eeff` (primary), `#c0bedd` (secondary), `#7a7a9a` (muted), `#9a9ab8` (body)
- Reusable CSS classes (defined in `src/index.css`):
  `font-display`, `font-mono`, `gradient-text`, `shimmer-text`,
  `bg-grid`, `card-hover`, `animate-fade-up`, `animate-fade-in`,
  `animate-float`, `pulse-ring`, `delay-100` … `delay-500`

### Styling approach
- Most components use **inline `style={{}}` objects** rather than Tailwind
  classes — match this style in new components for consistency.
- Hover effects are done via `onMouseEnter` / `onMouseLeave` mutating
  `e.currentTarget.style` — follow the same pattern.
- Use Tailwind only for global/theme utilities in `src/index.css`.

### Assets
- Profile image: `src/assets/my.png`

### External links
- Always use `target="_blank" rel="noopener noreferrer"` for outbound links.
- Email links must use `mailto:` — never bare email strings.