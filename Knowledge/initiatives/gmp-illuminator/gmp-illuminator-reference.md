# GMP Illuminator Project - Reference (As of 2026-01-13)

## Purpose (TL;DR)
Summarize the GMP Illuminator project so an AI agent can quickly orient, then drill down as needed.

## Executive Snapshot
- **Sponsor:** Max Huisman
- **Project Lead:** Will Paton
- **Project Architect:** Madeleine Allen
- **Core objective:** Define specifications and a development plan for a **modular, GMP-compatible illuminator** for single-use bioreactors (50–2,000 L) that enables optogenetic control of cell lines in customer production environments.
- **Target:** First commercial GMP batch by Q3 2027; spec lock by end of 2026.
- **Current posture:** Phase 1 (planning/specification) nearing completion; URS at Rev C, FRS in draft; Lonza site visit scheduled Feb 5, 2026.

## Project Scope

### In Scope (Phase 1)
- User, customer, and performance requirements gathering
- System requirements and specifications definition for modular GMP-compatible illuminator
- Single-use bioreactor (SUB) compatibility from 50 L to 2,000 L
- Multi-vendor SUB compatibility (universality prioritized)
- GMP certification and regulatory requirements
- Light delivery performance specs for optogenetic activation
- Workstream planning, sequencing, and high-level development roadmap

### Out of Scope (Phase 1)
- Physical builds, testing, or validation
- Regulatory certification submissions
- Large-scale bioreactor procurement

## Key Deliverables (Phase 1)
- **Illuminator specification document** (design parameters, performance needs, compliance targets)
- **High-level development roadmap** with milestone estimates
- **Draft business case** (development cost, system revenue/cost)
- **System architecture** (four main subsystems defined)
- **Workstream ownership map**
- **Risk register** with mitigations
- **Initial per-unit cost estimate**

## System Architecture
Four main subsystems:
1. **Controller subsystem:** User interface, environment management (enclosure), electronics, firmware
2. **Power subsystem:** May be separate from controller depending on final requirements
3. **Illuminator subsystem:** Light sources, environment management (enclosure), optical delivery
4. **Sensing subsystem:** Sensors (OD, fluorescence, temperature), feedback capability

Supporting infrastructure:
- **Software management:** Backend (data) + Frontend (UI)
- **Modular design:** Enables future expansion (multi-color, closed-loop control) without full redesign

## Current Status (As of Jan 2026)

### Documentation Progress
- **URS (User Requirements Specification):** Rev C completed Dec 15, 2025; minimum viable URS under review
- **FRS (Functional Requirements Specification):** Draft in progress (Rev A style)
- **System architecture:** v1.2 finalized; four subsystems defined
- **Roadmap:** Being built in ClickUp with subsystem-level detail

### External Engagement
- **Lonza:** Site visit scheduled Feb 5, 2026 in Bend, OR
  - Focus: R&D-level process, equipment, platform transfer (GMP validation out of scope for R&D attendees)
  - No fundamental unvalidatable issues identified with current designs
  - Dinner planned Thursday evening (Feb 4)
- **Consultants:** ~$10K secured for Phase 1; outreach to GMP/regulatory consultants ongoing
- **CDMO feedback:** WuXi emphasized preference for simple light patterns (limited set points) and risk management

### Technical Decisions Pending
- Optogenetic system selection (GAVPO vs. Cry2 for v1, both blue light)
- Number of wavelengths to support in v1
- Closed-loop control: scoped as upgradeable capability
- Requirements management software (JAMA expensive at ~$40K/yr; evaluating alternatives)

## Optogenetic Parameters (Critical for Design)

### Key Parameters to Define
| Parameter | Why Needed | Design Impact |
|-----------|-----------|---------------|
| **Dark reversion time** | How often cells need illumination | Surface area coverage |
| **Activation threshold** | Minimum fluence rate (FR) | Stray light tolerance, lowest control level |
| **Saturation FR/dose** | Maximum usable FR | Surface area coverage |
| **Sensitivity** | Light amount and control resolution needed | LED power, driving circuitry complexity |
| **Time to target activation** | Polling frequency | Real-time vs. cloud control |
| **Acceptable unintended activation** | Ambient light tolerance | Blackout requirements |
| **Acceptable variability** | Tolerable illumination variance | Hardware precision requirements |

### V1 Assumptions
- Cell lines will use **GAVPO or Cry2** (blue light activation)
- Dark reversion currently ~30 minutes acceptable range
- Specific use case (e.g., mAb expression induction) depends on first commercial product

### Wavelength Considerations
- **Blue:** 450-480 nm (central wavelength), bandwidth +/- 15 nm
- **Red:** 620-640 nm (future), bandwidth +/- 15 nm
- **IR:** 780-820 nm (future), bandwidth +/- 5 nm

## GMP/Regulatory Requirements

### Key Compliance Areas
- **GMP compatibility:** System must meet cGMP standards from the outset
- **21 CFR Part 11 compliance:** Electronic records, audit trails, role-based access
- **Cleanroom compatibility:** Grade B cleanroom (15-25°C, 30-60% RH)
- **IEC 62471:** Photobiological safety for LED exposure limits
- **ICH Q1B:** Light exposure guidelines

### Qualification Pathway
1. **Design Qualification (DQ):** Documentation, risk controls, GMP design requirements
2. **Installation Qualification (IQ):** Inspection, documentation review, connections verification
3. **Operational Qualification (OQ):** Performance windows defined, critical functionality demonstrated
4. **Performance Qualification (PQ):** Long-duration tests, stability established, GMP process runs

### Documentation Requirements
- Functional Requirement Specification (FRS)
- Software Design Specification (SDS)
- Hardware Design Specification (HDS)
- Factory Acceptance Test (FAT)
- Site Acceptance Test (SAT)
- IQ/OQ/PQ protocols and reports
- Extractables testing per BPOG protocol

## Risks / Bottlenecks
- **Optogenetic spec lock:** Need opto team alignment on parameters; experiments needed to finalize ranges
- **Timeline pressure:** Design freeze needed by end of 2026 for Q3 2027 delivery
- **Multi-color/closed-loop:** Decision points not yet defined; need to know hardware, bio, and business timelines
- **Jurisdictional scope:** US-only for first launch? EU requirements TBD; need consultant input
- **Requirements management:** No formal tool selected; Google Docs/spreadsheets for now
- **CDMO profile complexity concern:** WuXi prefers limited set points

## Open Questions to Resolve
- What PQAs/CQA ranges do CDMOs require?
- Is closed-loop control needed for v1, or can it be upgrade path?
- What is the minimum viable feature set for first customer?
- Which requirements management tool to use (if any)?
- US vs. US+EU regulatory scope for v1?
- Who will own requirements management long-term? (needs training)

## Timeline Overview

### Phase 1 (Current - Planning/Specification)
- Product & User requirements - Dec 2025 ✓
- Draft system specifications - Dec 2025 ✓
- Draft business case - Jan 2026 (in progress)
- Draft workstream development roadmaps - Jan 2026 (in progress)

### Phase 2+ (Rough Estimates)
- Refined requirements and business case - Q1-Q2 2026
- (Pre)GMP prototype build & validation (~50 L) - Q1-Q2 2026
- In-house prototype validation (~1kL) - Q3-Q4 2026
- Regulatory review and certification readiness - Q1 2027
- Offsite GMP prototype validation (~1kL) - Q2 2027
- **First commercial GMP batch** - Q3 2027 (earliest expected)

## Key Stakeholders / Contacts

### Internal - Core Team
- **Max Huisman** - Sponsor, strategic alignment, approvals
- **Will Paton** - Project Lead, coordination, timeline, GMP compliance workstream
- **Madeleine Allen** - Architect, system architecture, URS/FRS, user requirements
- **Taylor Hinsdale** - Optical design/specs, simulations, opto parameters
- **Pete Czerpak** - BPE consultant, GMP documentation, external consultant connections

### Internal - Stakeholders
- **Alex Toda** - Quality & BPD alignment
- **Vidar van der Meijden** - Product strategy, customer requirements
- **George Hosegood** - Ops & regulatory, bio roadmap
- **Maximilian Hoerner** - Optogenetics specs, opto team liaison
- **Declan Jones** - Data integration, AI/CLC requirements
- **Zack Harmer** - Opto point of contact (limited bandwidth)
- **Baxter Eldridge** - Illuminator subsystem owner (starting Jan)
- **Ryan** - Controller subsystem owner (post-Blastoise)

### External
- **Lonza** - CDMO partner, site visit Feb 5
- **WuXi** - CDMO feedback on profile complexity
- **Gregg Redeker** (BMGF) - Consultant network connections
- **Phil Sanders** (Watoma Bio) - Potential consultant
- **Vince Rubino** (IPS) - Potential consultant

## Source Pointers
- **URS Draft:** [GMP Illuminator URS Draft.md](gmp-illuminator-reference/GMP Illuminator URS Draft.md)
- **Opto Parameters:** [Opto-Derived GMP Illuminator Requirements (2).md](gmp-illuminator-reference/Opto-Derived GMP Illuminator Requirements (2).md)
- **Lonza Visit Notes:** [lonza-visit-reference.md](gmp-illuminator-reference/lonza-visit-reference.md)
- **Proposed Milestones:** [proposed-milestones.md](gmp-illuminator-reference/proposed-milestones.md)
- **Full Documentation:** [GMP Illuminator Documentation-20260113105056.md](gmp-illuminator-reference/GMP Illuminator Documentation-20260113105056.md)
- **Messages/Updates:** [messages/](gmp-illuminator-reference/messages/)

## Glossary
- **SUB:** Single-Use Bioreactor
- **URS:** User Requirements Specification
- **FRS:** Functional Requirements Specification
- **HDS:** Hardware Design Specification
- **SDS:** Software Design Specification
- **IQ/OQ/PQ:** Installation/Operational/Performance Qualification
- **FR (Fluence Rate):** Light power per unit area (uW/mm²)
- **GAVPO:** Light-inducible transcription system (blue light)
- **Cry2:** Cryptochrome 2 optogenetic system (blue light)
- **CDMO:** Contract Development and Manufacturing Organization
- **cGMP:** Current Good Manufacturing Practices
- **21 CFR Part 11:** FDA regulation for electronic records
