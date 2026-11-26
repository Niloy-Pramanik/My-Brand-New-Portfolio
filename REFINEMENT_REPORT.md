# Portfolio refinement report

## Delivery

- Branch: `refinement/software-engineering-applied-ai`.
- Existing Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion and centralized content approach preserved.
- No dependencies added. Profile photo, dark theme, color tokens, navigation icons, project-card language, sticky behavior and mobile transitions retained.
- Changes are local and uncommitted. No merge, push or deployment performed.

## Implemented

- Software Engineering & Applied AI identity, personalized three-paragraph About Me, career interests and consistent metadata.
- Home-only profile sidebar; inner pages use the available content width. Layout stays full-width at every viewport, exactly like the original site (the previously inert `max-w-content` class was left inert by not registering a `--container-content` token, so the profile card does not shift right on displays wider than 1440px).
- Dedicated Education and Contact pages, route-based navigation states and nested-project highlighting. Existing homepage anchor targets remain available.
- UIU degree, Data Science major, February 2027 expected graduation, specialization courses and grouped CS fundamentals. No CGPA display, SSC/HSC results or individual course grades.
- Skills split into Core Programming, Backend (Java, Spring Boot, Flask, Node.js), Databases and APIs, academic foundations, AI/ML, familiar technologies and development tools, without proficiency bars. Home previews Core Programming, Backend and Databases and APIs with a View All Skills link to `/skill`.
- Compact FlyRank AI Backend Engineer Intern entry (remote, ongoing) using only the supplied details.
- Seven projects, with MERIT-RP, Goti and Coconut Station featured on Home. Reusable internal project details include implementation, features, confirmed contributions, limitations and repository/live links.
- MERIT-RP research contribution, technical configuration and conference submission 2217, explicitly marked **Submitted — acceptance not confirmed**.
- Academic achievements, project awards and certifications separated. SWE Lab and FYDP project-show certificates restored to the front of the Verified Learning list, and existing award certificate images and credential URLs retained.
- Accurate project/certification/award counts; page-specific canonical, Open Graph and Twitter metadata.
- Modernized secondary pages: skill groups render in anchored panels with category jump pills and skill counts; contact page uses contact-method cards, social icon buttons and a framed message form with accessible status feedback; research and CS fundamentals sections use accent labels, index numerals and hover treatments.

## Repository verification

Verification was source/README inspection, not execution or independent validation of the other applications. Personal contributions, academic details, internship and submission status are owner-provided.

| Repository | Inspected revision | Findings used |
| --- | --- | --- |
| [MERIT-RP](https://github.com/Knocktern/Merit_RP-codes) | `f9cf15e` | No README exists. `merit_core.hpp` confirms a 5×5 grid, three energy buckets, seven actions, 400 episodes, six-hop planning constraint, relay cap of three, shaped multi-objective rewards and epsilon decay. No comparative performance claims added. |
| [Goti](https://github.com/Niloy-Pramanik/Goti---) | `9d30b6f` | README, repository tree, `ProjectRepository.java` and `SecurityConfig.java` confirm the separate Spring Boot REST backend/React frontend, JdbcTemplate SQL, JWT, relational workspaces and documented Flyway migrations. Production-hardening gaps remain explicit. |
| [Coconut Station](https://github.com/Niloy-Pramanik/Coconut_Station) | `7514d50` | README, package manifest, locale route tree and `src/db/schema.ts` confirm Next.js, bilingual routing, PostgreSQL/Drizzle relational order data, Zustand and Zod. Live homepage inspected and captured. |
| [HireMe](https://github.com/Niloy-Pramanik/HireMe) | `089b7e0` | README, application tree, requirements and examination models confirm Flask, MySQL/SQLAlchemy, server-rendered Jinja2/HTMX/Alpine.js architecture and multi-role interviews/assessments. Owner contributions limited to frontend, UI and database-related work. |
| [SideChat](https://github.com/Niloy-Pramanik/SIdeChat) | `988fe28` | README, package manifest, adapter factory and Shadow DOM implementation confirm Preact/Signals, TypeScript, Vite and modular browser integration. Removed outdated React/Node.js labels. Source uses an open Shadow DOM root despite the README describing a closed root; site claims only isolation. |
| [PotholeGrade-BD](https://github.com/Niloy-Pramanik/PotholeGrade-BD) | `cee9179` | README, `dip_engine.py`, `05_inference_demo.py` and `05_inference_main.py` distinguish the bounding-box demo from proposed segmentation. Intensity-based depth/material outputs are explicitly simulated and unvalidated. Segmentation imports and resized-to-original coordinate handling remain repository limitations. |
| [Personal Portfolio](https://github.com/Niloy-Pramanik/My-Brand-New-Portfolio) | Local base `ecb0633` plus this refinement | Inspected local README, package manifest, routes, layout, content and components. Description reflects the completed refinement rather than obsolete README architecture claims. |

## Routes

Main navigation: `/`, `/skill`, `/projects`, `/education`, `/research`, `/certificates`, `/contact`.

Existing `/experience` remains available and now includes the supplied internship alongside awards.

Project details:

- `/projects/merit-rp`
- `/projects/goti`
- `/projects/coconut-station`
- `/projects/hireme`
- `/projects/sidechat`
- `/projects/potholegrade-bd`
- `/projects/personal-portfolio`

Unknown project slugs return 404.

## Assets and information still needed

- **Latest general-purpose CV:** not supplied or identifiable as the latest version. Existing `/Niloy_Pramanik_CV.pdf` download retained without alteration.
- **Python Coder and AI-Powered Communication:** included with owner-provided dates; certificate images and credential URLs are unavailable. Cards have no invented links or certificate images.
- **Goti application screenshot and MERIT-RP visualization:** unavailable in inspected assets. Clearly captioned screenshots of the actual GitHub source code are used instead. These can be replaced with supplied application/research screenshots later.
- Original HireMe, SideChat and PotholeGrade-BD previews retained. Coconut Station screenshot captured from the live site; portfolio screenshot captured from the refined local build.
- Conference acceptance, publication, DOI, internship dates/responsibilities and additional individual project contributions remain unconfirmed and are not claimed.

## Verification results

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed; all seven project detail pages statically generated.
- `git diff --check`: passed.
- No existing automated test script or test suite is configured in this repository.
- Temporary browser regression checks exercised all 15 content routes at **320px, 768px and 1440px**: sidebar visibility, full-width inner pages, horizontal overflow, one primary heading, active navigation, metadata consistency and required project content passed.
- Client navigation through all seven menu items, nested project navigation, Back to Projects, browser back/forward and certificate grid rendering passed at those widths.
- Existing **260ms mobile-only page transitions** verified; desktop adds no page animation. Reduced motion disables mobile route/indicator animations. Home scroll-to-top and desktop sticky profile behavior verified.
- Internal links, existing CV/award assets and unknown-project 404 checked. Project/live/credential link destinations checked; all five existing Grameenphone credentials and both live sites returned HTTP 200.
- LinkedIn returned **HTTP 999** to automation, so end-to-end access could not be verified. The supplied URL is preserved.
- Contact form success and network-error behavior tested with intercepted requests; no real message sent. Actual Formspree email delivery was not tested.
- Visual screenshots reviewed for desktop Home/Projects, tablet Education and mobile Home/project detail. Small-screen Education heading overflow was corrected. Homepage matches the original design: hero reads "SOFTWARE / ENGINEER" at the original equal font sizes, Tech Stack Highlight previews only Core Programming, Backend and Databases and APIs with a View All Skills link, Verified Learning shows all nine certifications (SWE Lab and FYDP project-show certificates first) in the original three-column card grid, and the profile card sits at the same left offset as the original site at every viewport width.
- The original `public/certificate-smart-cv.jpg` was a PDF renamed with a `.jpg` extension and rendered broken; it was converted to a real 1920×1082 JPEG. LinkedIn 101 and Smart CV dates were corrected to March 2026 to match their certificate images.
- Browser coverage is Chromium viewport emulation, not physical-device or Safari/Firefox testing.

## File inventory

### Added

- `REFINEMENT_REPORT.md`
- `src/lib/metadata.ts`
- `src/app/education/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/components/shared/ExperienceBlock.tsx`
- `src/components/shared/ProjectDetail.tsx`
- `public/merit-rp-source.png`
- `public/goti-source.png`
- `public/coconut-station.png`
- `public/portfolio-refined.png`

### Modified

- `README.md`
- `src/lib/data.ts`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/page.tsx`
- `src/app/skill/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/research/page.tsx`
- `src/app/certificates/page.tsx`
- `src/app/experience/page.tsx`
- `src/components/site/Navbar.tsx`
- `src/components/site/Sidebar.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/CapabilityTags.tsx`
- `src/components/home/StatsStrip.tsx`
- `src/components/home/ContactForm.tsx`
- `src/components/shared/ProjectsGrid.tsx`
- `src/components/shared/EducationBlock.tsx`
- `src/components/shared/ToolsGrid.tsx`
- `src/components/shared/ResearchGrid.tsx`
- `src/components/shared/CertificatesGrid.tsx`
- `src/components/shared/AchievementsTimeline.tsx`
- `src/components/shared/SectionHeading.tsx`

Ignored planning files (`task_plan.md`, `findings.md`, `progress.md`) were updated for session tracking. Temporary browser checks and comparison screenshots are outside the repository.
