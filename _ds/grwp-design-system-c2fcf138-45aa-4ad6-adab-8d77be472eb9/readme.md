# Grwp Design System

**Grwp** is a London-born social planning app. It solves the group-chat problem: five people, forty
messages, no booking. In Grwp a group creates a plan, everyone hearts the places they like, the votes
close, and the app announces a winner and locks the plan in. Positioning line: *Plans are better
together.* Sub-line: *London Born. Made For Making Plans.*

## Sources this system was built from

Only four files were supplied — no codebase, no Figma file, no live product:

| Source | What it gave us |
| --- | --- |
| `uploads/ChatGPT Image Aug 19, 2026, 08_00_51 PM.png` | Brand sheet (palette hexes, type names, button + icon-button specimens) and 8 app screens: onboarding, explore, venue detail, group vote, winner modal, plan detail, group chat, profile. |
| `uploads/ChatGPT Image Aug 19, 2026, 08_01_00 PM.png` | A second variant of the same sheet: hero lockup, explore, venue detail, group vote with countdown, plan status, "Plan locked in!" confirmation. |
| `uploads/Grwp Logo - Black.png` | Primary wordmark, 2000×1500 transparent PNG. |
| `uploads/Grwp App Logo - No Gradient.png` | Cream wordmark for dark and coral grounds. |

Both mockups are static images, so **every value in this system was read off pixels, not code**.
The five palette hexes and the two typeface names are quoted verbatim from the brand sheet; ramps,
spacing, radii, shadows and motion were derived to match what the screens show. Where the source is
silent (empty states, errors, tablet/web surfaces) this system says nothing rather than inventing.

If a codebase or Figma file exists, attach it — the ramps and the component inventory should be
re-checked against it.

## Products represented

Two surfaces: the **Grwp iOS app** (390×844 screens), recreated in `ui_kits/app/`, and a **landing
page** built from the brand panel that opens both mockups, in `ui_kits/web/`. Only the app's screens
were fully mocked up; the landing page's hero is verbatim from the source and its three lower sections
are extrapolations, flagged in `ui_kits/web/README.md`. No docs site, email template or deck appears in
the sources, so none was built.

---

# CONTENT FUNDAMENTALS

**Voice.** Warm, brisk, London. Grwp writes like a friend who has already checked the bookings — never
like a platform. It never sells the feature, it names the outcome: "Plans are better together", not
"Collaborative decision-making tools".

**Rhythm: two short clauses, both full-stopped.** This is the single most recognisable move in the
brand's copy. Headlines are two sentence fragments, the second often coloured coral:

- "Good company. Great plans."
- "Plans are better together."
- "London Born. Made For Making Plans."
- "Bring Everyone. Find Somewhere. Make Memories."

**Casing.** Sentence case everywhere in the product (labels, buttons, rows: "Invite to Plan", "See
Results", "Add to calendar", "Your Groups"). Title Case appears only in brand lines and CTAs carried
over from them ("Made For Making Plans", "Get Started"). ALL CAPS is reserved for the eyebrow label
on the brand sheet ("COLOURS", "TYPOGRAPHY", "UI ELEMENTS") — never in the app.

**Person.** The app speaks to *you* and about *we* when it acts on your behalf: "You're going",
"Your Groups", "Your Plans", "We'll send you a reminder", "Everyone vote on your favourites". It says
"Everyone" and "the group", not "members" (except in the neutral count line, "7 members").

**British English, always.** favourites, neighbourhood, £££. Dates read "Sat, 25 May"; times "7:00pm".

**Length.** Screen titles ≤ 3 words ("Saturday Plan", "Explore", "About"). Section headers are 2–4
words ("Curated for you", "Trending this week", "Popular this week", "Recommended for you"). Meta
lines are fragments, not sentences: "Shoreditch", "4.7 (1.2k)", "British, Modern European",
"Voting ends in 12h", "6 going". Body copy stays to two sentences.

**Greetings are time-aware and lead into a question:** "Good evening, / Where to?" — the second line
coloured coral.

**Celebration copy is exclamatory but never twee:** "We have a winner!", "Plan locked in!", followed
by the plain fact ("You're going to Camberwell Arms").

**Emoji.** Used in exactly two places: chat message reactions (🙌 ❤️ 👍) and a single pointing hand in
the vote prompt ("Everyone vote on your favourites 👇"). Never in navigation, buttons, headings, or
marketing copy. No emoji as icons — icons are Lucide glyphs.

**Never.** Exclamation marks outside celebration screens; "seamless", "effortless", "curated
experiences"; feature-speak; second-person imperatives that nag ("Don't miss out!").

---

# VISUAL FOUNDATIONS

**Colour.** Five colours carry the brand: ink `#121A16` (a green-black, never neutral grey), cream
`#F2EDE6`, coral `#E76F51`, sage `#A3B18A`, sand `#D8C9AB`. Cream is the default page ground; ink is
the ground for the "group" moments (onboarding, the vote screen) — the app deliberately flips to dark
when the group is deciding together. Coral is the only action colour and appears once or twice per
screen: the create FAB, the active tab, the second line of a headline, the decisive button. Sage
carries confirmation (own chat bubbles, the +N avatar pill, countdown progress, the profile tagline
card). Sand and cream do all the structural work. There are never more than two background colours in
one flow.

**Type.** Two families. **Recoleta** (soft slab serif) for display: headlines, screen titles, card
titles, stat numbers. Black weight, tight tracking, sentence case, full stop. **Satoshi** for
everything functional: 15px medium for row titles, 13px regular for meta, 12px for labels, 10–11px
medium for tab labels. The rule of thumb: if a human wrote it, it's Recoleta; if the app wrote it,
it's Satoshi. Recoleta is licensed, so this system loads **Fraunces** (SOFT 60, WONK 1) as the stand-in
— see *Caveats*.

**Spacing & layout.** 20px screen gutter, 14px card padding, 10px between stacked cards, 24px between
titled sections. 4px rhythm with a 6px half-step. Fixed elements: the status bar, the screen header,
and the bottom tab bar; the primary action on a detail screen is pinned above the tab bar with a
hairline top border. Horizontal carousels bleed off the right edge (the next tile is always half
visible) while their section header keeps the gutter.

**Backgrounds.** Flat colour, not gradient. The one illustration in the system is the line-drawn
London skyline on the onboarding screen, sitting above a coral "wave" shape that fills the bottom
third — the only place the brand uses a decorative shape. No repeating patterns, no textures, no
noise/grain overlays, no full-bleed photo backgrounds behind text (photography always lives inside a
rounded container).

**Imagery.** Warm, low-light interiors of restaurants and bars with people mid-meal — amber tungsten,
shallow depth, London specifics (rooftops, the Shard, market halls). Never empty dining rooms, never
flat-lay food shots, never cool or desaturated grades. Photos are always clipped to `--radius-lg` (18px)
or `--radius-xl`; text over a photo always sits on `--scrim-bottom`, never on the raw image.

**Corners.** 6px inner chips, 10px thumbnails, 14px buttons and inputs, 18px cards and list rows, 24px
media tiles, 44px on the device/screen frame, and full pills for avatars, category circles, badges and
the FAB. Nothing is square.

**Cards.** Cream-white surface (`--bg-surface`), 18px radius, 1px hairline border at 8% ink, and a
barely-there shadow (`--shadow-xs`/`--shadow-sm`). Selection is expressed by promoting the border to
2px coral, not by tinting the fill. On ink screens, cards keep the light surface — that contrast is the
whole look of the vote screen.

**Shadows.** Warm and low-contrast, always `rgba(18,26,22,·)` — never blue-black, never coloured except
the coral FAB glow (`--shadow-fab`). Four steps only: xs (hairline lift), sm (cards), md (raised
sheets), lg (the phone frame itself).

**Transparency & blur.** Two uses only. Glass controls (`--glass` + `--glass-blur`) for the back/share/
heart buttons floating on venue photography; and protection gradients — `--scrim-bottom` under captions
on photos, `--scrim-top` behind glass controls. No frosted panels, no translucent sheets over UI.

**Borders.** Hairlines carry structure: 8% ink for card edges and dividers, 14% for interactive
outlines (the secondary button), 16% cream for the same on ink screens. Borders are never coloured
except for coral selection.

**Motion.** Quick and un-showy: 140ms for hover/tint changes, 220ms for everything default, 340ms for
tab and screen transitions, 640ms for the celebration seal. Easing is `cubic-bezier(.2,.8,.2,1)`
(ease-out) for entrances and `cubic-bezier(.34,1.56,.64,1)` (spring) exclusively for the success seal.
No bounce elsewhere, no parallax, no looping ambient animation.

**Hover.** Pointer surfaces get one darker ramp step (`--action-primary-hover`, `--action-dark-hover`);
rows and quiet controls fill with `--bg-surface` instead of gaining a border; links drop to 72% opacity.
**Press.** Uniform `scale(0.97)` (0.92 on circular icon buttons) plus the next darker ramp step. Never
a colour change to a different hue.

**Density.** Comfortable, not tight: 56px list rows, 44px minimum touch target, 48px search field,
54px primary buttons, 64px tab bar.

---

# ICONOGRAPHY

The mockups use a single outline icon set — thin, rounded-cap, 24px grid, uniform ~2px stroke, no
fills: search, bell, heart, share, calendar, clock, plus, chevron-right/down, arrow-left/right, users,
user, map-pin, star, settings, more-horizontal (three dots), check, x, and the category glyphs
(utensils/knife-fork, wine glass, coffee cup, activities, more).

**No icon binaries were supplied**, and no codebase exists to copy a sprite or icon font from, so this
system uses **[Lucide](https://lucide.dev)** — the closest match to the mockups' weight and style —
loaded from the `lucide-static` CDN and tinted through a CSS mask so glyphs inherit `currentColor`.
**This is a substitution; flag it with the user before shipping.** If the real app uses a different set
(SF Symbols, Phosphor, a bespoke set), drop those SVGs into `assets/icons/` and point `Icon.jsx` at
them — nothing else changes.

Rules: one icon set only. Sizes 14–16 (inline with meta text), 18–20 (rows, buttons), 21–24 (headers,
category chips). Icons take the colour of the text they sit with — `--text-secondary` for meta,
`--text-primary` for actions, `--coral-500` for the active tab and the star. Filled glyphs are not used;
a "selected" heart is expressed with a coral background behind the outline glyph. Emoji are never used
as icons (see Content Fundamentals for the two places emoji do appear). Unicode symbols appear only as
typographic content — £ price bands, ★ in ratings.

---

# Index

Root:
- `styles.css` — the single entry point; imports everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`.
- `assets/` — `logo-grwp-black.png`, `logo-grwp-cream.png`, `fonts/` (self-hosted Satoshi), `video/london-landmarks.mp4` (supplied looping line-art clip, used by the motion onboarding screen), and `imagery/` (London skyline illustration, venue photography, member avatars — all cropped from the source mockups).
- `guidelines/` — 21 specimen cards feeding the Design System tab (Brand, Colors, Type, Spacing).
- `thumbnail.html`, `SKILL.md`, `readme.md`.

Components (`window.GrwpDesignSystem_c2fcf1.<Name>`):
- `components/core/` — Icon, Button, IconButton, Badge, Avatar, AvatarStack, Logo, ProgressBar
- `components/forms/` — SearchField, SegmentedTabs
- `components/navigation/` — TabBar, AppHeader, SectionHeader, ListRow, CategoryChip
- `components/cards/` — VenueTile, VenueRow, VoteCard, DetailRow, StatBlock
- `components/social/` — ChatBubble, SuccessSeal

Each component directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `*.card.html`
specimen.

UI kit:
- `ui_kits/app/` — the Grwp iOS app, seven screens, click-through. Entry: `ui_kits/app/index.html`. See its README for the flow.
- `ui_kits/web/` — the landing page (1440px). Entry: `ui_kits/web/index.html`.

**Intentional additions.** The mockups define UI, not a component library, so the inventory above is a
reading of the screens. Two items have no direct counterpart on the brand sheet: `Icon` (a wrapper so
one glyph set is enforced) and `ProgressBar` (read from the "Voting ends in 12h" track on the plan
status card).

# Caveats

- **Recoleta is substituted.** The brand sheet names Recoleta; it is a commercial face and no binary was
  supplied. Fraunces (variable, SOFT 60 / WONK 1) is loaded in its place — close in warmth and slab
  softness, not identical in the `g`, `a` and `t` terminals. Supply Recoleta `.woff2` files and replace
  `tokens/fonts.css`.
- **Satoshi is self-hosted** in `assets/fonts/` (variable woff2 + static weights, Fontshare Free Licence — `assets/fonts/LICENSE-Satoshi-FFL.txt`). No CDN dependency.
- **Icons are Lucide, not the app's own set** (see Iconography).
- **All imagery is cropped from the mockup PNGs**, so it is low-resolution and AI-generated. Replace with
  licensed photography before anything ships.
- Values were measured from static images; treat ramps, shadow opacities and the exact ink shade as
  well-founded estimates, not spec.
