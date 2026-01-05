# BMGF Project - Reference (As of 2026-01-05)

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

## Current Status (Most recent signals)
**Technical progress**
- GAVPO lines show strong expression; CMV lines underperforming in past periods.
- Quality analytics capability improving (microdroplet reaction, intact/peptide mapping/SEC/charge variants).
- Light sensitivity and media degradation under blue light remain active constraints.
- Analytical findings show a high F(ab')2 vs intact ratio in some ExpiCHO runs, so non-specific titer readouts can be misleading.

**Key program updates**
- **6/2025:** MAM01 AA sequence received; recloning underway due to single AA mismatch; MTA with GMRI still pending.
- **Progress report:** Submitted ~4/1 (as of 6/12/2025 still awaiting review and NCE discussion).
- **Board/leadership data need:** CMV vs light-inducible Humira titer + glycosylation by late July/August.
- **Leadership change (most significant recent development):** Nessa (original project architect) was removed after recurring technical issues and poor cross-lead collaboration; Kiana is now the project architect. BMGF has been informed. The transition was a shock to the team; Kiana was up to speed by the week of 12/15, and work is restarting post-holiday with Will supporting the handoff.

## Plan Going Forward (from timeline + notes)
**Near-term (mid-2025)**
- Finish MAM01 construct work, integrate into opto chassis, start screening.
- Resolve MTA and analytics alignment with GMRI; confirm PQAs and reference material needs.
- Prioritize data that leadership and BMGF can use (relative titer + quality comparison).

**Mid-term (late 2025 – early 2026)**
- **Aim 1: Cell line generation** in progress; handoff milestones for clones and BPD in Jan–Feb 2026.
- **Aim 1: Process development** in progress; scheduled bioreactor runs and production runs through Q1 2026.
- **Aim 2:** Cell line generation currently **on hold** (timeline shows Oct 2025 dates).
- **Aim 3:** Cell line generation planned; shake flask PoC only (no bioreactor runs).

**Workstreams in motion (as of 2025-12-19)**
- **Optochassis CLD:** Pools in top GAVPO + Cry2 clones; testing double selection. Pool production run informs Jan Beacon load (target 3–5 pools; tentative 1/9–1/23, coordinate with Raspberry).
- **156 background CMV clones:** 24DWP run completing; data review + AnChem (SEC, intact mass). TPP run planned in early 2026 to down-select for dasbox.
- **All-in-one CLD:** CMV and Opto clones post-Beacon sort growing; plan for January clone screen runs aligned with Sasha’s media/feed approach.
- **Super all-in-one CLD:** MAM01 cassette + selectable GAVPO (blasticidin) to start after plasmid availability.
- **Prolific vector CLD:** MAM01 in latest Prolific vector (FTO), parallel CMV and Opto pools; staggered behind, not a gating path for BPD scale-up.
- **Aims 2/3:** BLIMP1/PYC2 testing underway in CMV-Humira (STRIDE); plan to extend to CMV-MAM01 once a strong clone is selected.
- **Additional CMV/GAVPO arms:** Triple-selection CMV-MAM01 lines in 156 background (24DWP data pending). GAVPO pool double-selection arm is early-stage (pools still in selection).

**Reporting**
- Grant end date originally 7/31 (lab) + 90-day reporting; multiple discussions about possible 1–3 month extension.
- Internal notes suggest award end around March with final report due end of May (verify current grant end date).

## Risks / Bottlenecks
- **Cell line stability & integration:** HET/HOM line stability, integration fidelity, and copy number complicate strict comparisons.
- **Analytics throughput:** Ambr15 access, purification capacity, and glycoform turnaround are potential constraints.
- **Quality interpretation:** Fragmentation vs intact protein makes titer readouts unreliable unless validated.
- **Timeline pressure:** Original end date vs realistic experimental cycles; potential NCE required.
- **Chassis readiness risk:** Historical handoffs lacked formal readiness criteria (low stability data, limited functional validation).

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

## Key Stakeholders / Contacts
- **Internal:** Kiana Mohajeri (Head of SynBio, project architect), Will Paton (program ops), Sasha Howes (bioprocess engineer), Brandon (bioprocess Sr. RA), John Resngit (SynBio RA, now full-time), Ian Ronningen (Head of Analytical Chem), Brenna Pleitner (Analytical Chem principal scientist), Nora (SynBio Sr. RA), Ianessa Morantte (CLD).
- **External:** BMGF (Jacqueline Kirchner, Tod Haggard), GMRI (MTA + analytics).

## Source Pointers
- Meeting notes: `Knowledge/initiatives/bmgf/BMGF Meeting Notes.md`
- Grant application: `Knowledge/initiatives/bmgf/BMGF-grant-application.md`
- Ops notes: `Knowledge/initiatives/bmgf/will-kiana-notes.md`
- Timeline: `Knowledge/initiatives/bmgf/BMGF MAM01 timeline.csv`
