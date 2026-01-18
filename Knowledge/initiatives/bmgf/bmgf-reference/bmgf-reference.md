# BMGF Project - Reference (As of 2026-01-15)

## Purpose (TL;DR)
Summarize the BMGF “Light Touch” grant project so an AI agent can quickly orient, then drill down as needed.

## Executive Snapshot
- **Sponsor / grant:** Bill & Melinda Gates Foundation (Investment ID: INV-072141)
- **Core objective:** Prove feasibility of optogenetic control of mAb expression in CHO to improve productivity/quality and lower cost of goods. Originally using with Humira (adalimumab) as primary PoC, but changed to MAM01 as target molecule in mid-2025.
- **Current posture:** Grant scope intact but timelines and deliverables are being flexed; work is shifting toward PoC demonstration and updated comparison strategy as cell line/analytics realities evolve.

## Project Scope (What’s in / out)
**In scope**
- Light-inducible vs CMV mAb production comparisons (Humira as primary comparator).
- Cell line engineering (GAVPO/UAS, CMV, opto chassis variants).
- Process development (small-scale runs; timeline includes bioreactor runs and analytics).
- Quality attributes and analytics (intact, peptide map, SEC, charge variants, glycoforms).

**Out of scope / de-emphasized**
- Perfect apples-to-apples comparisons if integration/copy number differences can’t be controlled.
- Over-investing beyond grant deliverables (leadership emphasis to focus on grant deliverables vs exploratory work).

## Grant Aims (from proposal)
- **Aim 1:** Light-inducible antibody production (Humira) with quality comparison to CMV.
- **Aim 2:** Metabolic efficiency enhancements (e.g., PYC2, Mdh1, Mpc1/2).
- **Aim 3:** Secretory capacity enhancement (e.g., BLIMP1/PRDM1beta).

## Current Status (As of 2026-01-15)

**Technical progress**
- **High leakiness issue:** GAVPO pools showing unexpectedly high leakiness (~5-10% GAVPO-positive cells). Dark vs light performance nearly on par for most constructs. Root cause: BMGF vector lacks insulators on 5'/3' ends; P65 staining shows only 15-20% positive, mAb surface staining ~15% positive → net ~4-5% of population with functional opto response.
- **MAM01 cloning:** Prolific vector cloning in progress (John H, Nora). Plasmids expected complete by late Jan for pool generation. Challenges with repeated regions and PCR; switched to digestion/Infusion assembly approach.
- **BPD record:** December run achieved 13.5 g/L external validated titer (new PM record).
- **GS stringency impact:** Higher GS copy numbers (stringent cassette) creating ammonia buildup issues; feed tuning may not translate between GS stringency changes.

**Workstreams in motion (as of 2026-01-14)**
- **GAVPO pool-of-pools (single selection):** 96-batch clone screening started 1/14. Top 24 clones → 24-DWP production run next week → AnChem submission first week of Feb. Copy number staining planned after down-selection.
- **GAVPO pool-of-pools (triple selection):** UAS pools showing 1/3 titer vs CMV counterparts. Beacon run completed 1/17 with biased distribution: 1/3 UAS-MAM01, 1/3 double-selected UAS, 1/3 CMV pools.
- **OptoChassis pools (Amritha):** 28 wells proceeding to fed-batch after contamination event (lost ~43 of 71 wells). Early readout expected d7-8, Beacon run scheduled 1/23. All have full-length SV40 promoter (~5 copies vs ~20 with stringent cassette).
- **Prolific vector CLD:** MAM01 cloning in Prolific vector context as backup/FTO path. New cloning should wrap up end Jan/early Feb.

**Project goals (confirmed 1/14)**
1. Demonstrate increased yield/quality using opto vs constitutive expression
   - Compare to matched background (opto system-expressing) AND WT CHO background
   - Decision: use best production process developed for opto cells and apply to CMV
2. Path to titers beyond 10 g/L in 14-day fed-batch (no concrete MAM01 target)
3. FTO/"global access" - maintain both GAVPO and Cry2; Prolific vector as backup

**Key program updates**
- **Leadership change:** Kiana is project architect (replaced Nessa in Dec 2025). BMGF informed.
- **Sequencing:** Use Genewiz going forward (dedicated PO coming). Separate submissions for prep and sequence verification.
- **Data sharing:** [BMGF data deck](https://docs.google.com/presentation/d/1H7aWUDHmNAKjImevFJg2PUI1KgiXhjQtpOA9rk-Lw0s/edit?usp=sharing) to be kept up to date with summary slides.

## Plan Going Forward (as of 2026-01-15)

**Immediate (Jan 2026)**
- Complete 96-batch clone screening → down-select to 24 clones → 24-DWP production run
- Beacon run results analysis from 1/17 run
- OptoChassis fed-batch readout (d7-8) → Beacon run 1/23
- Bank at least 3 vials of clones handed off to BPD
- AnChem sample submission first week of Feb (SEC, intact mass, % monomer)

**Near-term (Feb 2026)**
- BPD runs with top clones (next run 2/4-2/19)
- Prolific vector plasmids complete → pool generation
- Copy number evaluation post-Beacon

**Characterization funnel**
- 96-well batch assay: endpoint protein A, freeze time series if needed
- 24 DWP: purification, intactness, % monomer (switched from charge variants to SEC)

**Reporting**
- Grant end date originally 7/31 (lab) + 90-day reporting; multiple discussions about possible 1–3 month extension.
- Internal notes suggest award end around March with final report due end of May (verify current grant end date).

## Budget Status (As of Jan 2026)
- **Remaining balance:** $972,000 (after November 2025)
- **Monthly spend rate:** ~$142,000 through 2025
- **Direct costs + benefits:** Underspending at 17-18% vs budgeted 31%
- **Indirect cost rate:** 15% (included in monthly invoices)
- **Accounting partner:** Engine Room (Julienne Riveong, Diana Pham)
- **Issue to correct:** $57K double-counted in Period 1 (indirect costs counted twice); needs adjustment in next reporting cycle
- **December close:** Jan 22, 2026 (final info needed by Jan 19)

## Risks / Bottlenecks
- **High leakiness in GAVPO pools:** Only ~4-5% of cell population has functional opto response. BMGF vector lacks insulators. Mitigating via Beacon selection for light-responsive clones.
- **GS stringency/ammonia buildup:** Higher GS copy numbers (stringent cassette) causing ammonia issues; feed tuning may not translate between vector iterations.
- **Cell line stability & integration:** HET/HOM line stability, integration fidelity, and copy number complicate strict comparisons.
- **Contamination events:** OptoChassis work lost ~60% of wells to fungal contamination (Jan 2026).
- **Beacon illumination reliability:** Recent illumination failure risk; mitigation is morning starts with 5-6 hour monitoring.
- **Timeline pressure:** Original end date vs realistic experimental cycles; potential NCE required.

## Open Questions to Resolve
- What PQAs and CQA ranges does GMRI require for MAM01?
- Can BMGMRI provide reference molecule/glycoform expectations?
- Is a reduced scale (250 mL) acceptable vs 2 L for final comparisons?
- What is the updated grant end date and reporting window after NCE?

## Historical Context (Outdated but Useful)
**Why this matters:** Prior setbacks shaped current risk posture and process expectations.
- Early opto chassis handoff (mid-2024) occurred with limited production data and no formal go/no-go criteria.
- Incubator failure forced a restart, compressing timelines and reducing available characterization data.
- UAS/GAVPO stable expression issues led to a pivot away from the original chassis and increased emphasis on selection pressure, parallel strategies, and earlier functional testing.
- Root-cause framing emphasized system/process gaps (handoffs, readiness criteria, cross-team alignment), not individual performance.

## Team Dynamics (Recent)
- Leadership change was a shock to the team; Sasha was the most upset given close collaboration with Nessa since joining Prolific about a year ago.
- Will is actively supporting Kiana’s transition and re-alignment across workstreams.
 - Comms gap: Will has not been introduced to Jacqueline Kirchner and was not included on prior monthly BMGF update emails, which makes cross-project coordination harder.

## Key Stakeholders / Contacts
- **Internal:** Kiana Mohajeri (Head of SynBio, project architect), Will Paton (program ops), Sasha Howes (bioprocess engineer), Brandon (bioprocess Sr. RA), John Resngit (SynBio RA), John Haliburton (molecular cloning), Basanta Dahal (TC/CLD), Amritha Menon (TC/CLD), Shahram Misaghi (copy number/staining), Max Hoerner (Beacon strategy), Ian Ronningen (Head of Analytical Chem), Brenna Pleitner (Analytical Chem principal scientist), Nora Hany (SynBio Sr. RA, molecular cloning).
- **External:** BMGF (Jacqueline Kirchner – program manager; Tod Haggard), GMRI (MTA + analytics).

## Source Pointers

### Local Files
- Grant application: `Knowledge/initiatives/bmgf/bmgf-reference/BMGF-grant-application.md`
- Meeting notes (local): `Knowledge/initiatives/bmgf/bmgf-meeting-notes/`
- Ops notes: `Knowledge/initiatives/bmgf/bmgf-reference/will-kiana-notes/`
- Timeline (local): `Knowledge/initiatives/bmgf/bmgf-reference/BMGF MAM01 timeline.csv`

### ClickUp
- **BMGF Folder:** https://app.clickup.com/36217409/v/f/90113349964/60195904
- **2026 Meeting Notes:** https://app.clickup.com/36217409/v/dc/12h8j1-50151
- **2025 Meeting Notes:** https://app.clickup.com/36217409/v/dc/12h8j1-36311
- **2025 Offline Meeting Notes:** https://app.clickup.com/36217409/v/dc/12h8j1-50171
- **Current Timeline:** https://app.clickup.com/36217409/v/li/901111238843
- **Key Project Docs:** https://app.clickup.com/36217409/v/dc/12h8j1-43011
