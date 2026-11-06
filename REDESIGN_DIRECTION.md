# Heez Mos Portfolio — redesign direction

## Objective
Rebuild the current portfolio as an editorial, motion-led personal website. Use Nikola Radeski's portfolio (https://nikolaradeski.com/) as a reference for interaction quality, pacing and presentation—not as a source to copy its identity, text, assets or exact layouts.

## What exists today
The Lovable project has a React + TypeScript + TanStack Start foundation, Tailwind CSS, and React Three Fiber / Drei. It currently has Home, Projects, Experience, Contact and Resume routes, discipline filters, tilt cards and a discipline-switching 3D hero scene. The 3D scene is a good technical seed, but animation is concentrated in one hero panel and the rest of the experience is largely static.

## New creative direction
- Editorial, confident, minimal interface with a strong typographic hierarchy and a restrained warm neutral / ink / burnt-orange palette.
- A memorable opening sequence: oversized name/role typography, animated linework or 3D object, subtle pointer response, and a clear introduction/action.
- Motion throughout the page: scroll-revealed section entrances, animated dividers, image/project-card hover depth, section transitions, a continuously moving capability ticker, and a purposeful contact outro.
- Use a single coherent motion language. Avoid motion for motion's sake; keep transitions short, elegant and readable.
- Preserve excellent mobile performance, keyboard access, reduced-motion support and graceful fallback when WebGL is unavailable.

## Proposed information architecture
1. Hero / introduction — who Heez Mos is, the problems he works on, and primary actions.
2. Capability marquee — software, product, data, digital transformation.
3. About / approach — a truthful, concise narrative connecting business, technology and analytics.
4. Selected work — case-study cards with clear status labels (live, prototype, concept, contribution); no invented impact metrics.
5. Experience — verified work history and responsibilities only.
6. Skills / tools — distinguish proven experience from tools currently being learned.
7. Contact — direct, simple invitation and verified links.

## Animation system
- Hero: lightweight Three.js / React Three Fiber scene as a visual anchor, with a responsive fallback and a reduced-motion mode.
- Scroll: intersection-based reveals and staggered entrances; do not hijack scroll or force scroll-jacking.
- Cards: subtle perspective tilt, image scale and border/line transitions.
- Marquee: CSS-driven loop with pause/reduced-motion behavior.
- Navigation: compact sticky navigation with active section feedback and smooth anchor navigation.
- Performance: lazy-load the 3D scene, cap device pixel ratio, pause rendering offscreen, and avoid unnecessary animation loops.

## Content integrity rules
Do not publish invented employers, job titles, testimonials, client names, project outcomes, percentages, awards, email addresses or social URLs. Confirmed material available for the first draft:
- The user coordinated development of government payroll and payslip systems at Sierra Leone's Ministry of Finance during 2023–2026.
- The user participated in monthly payroll dataset analysis and report preparation before payment rollout.
- Education: Bachelor's degree in International Business and Trade (Second Class Lower / 2:2), plus a Software Engineering certificate.
- EduBridge Africa has been prototyped and should be labelled prototype / in development unless launch status is confirmed.
- Delight Ventures and related ventures should be labelled as founder initiatives, concepts or prototypes according to their actual status—not described as deployed products without evidence.

## Implementation sequence
1. Preserve the existing project and create the redesign on a dedicated feature branch.
2. Establish the full source tree and confirm the current build/test commands.
3. Replace fabricated portfolio content with verified profile data and honest project statuses.
4. Rebuild the homepage into the editorial, motion-led experience described above.
5. Extend the visual language and interaction patterns to Projects, Experience, Resume and Contact.
6. Test desktop/mobile layouts, keyboard navigation, reduced motion, WebGL fallback, route navigation, build and lint.
7. Review the result before any merge or deployment. Production publishing requires explicit approval.
