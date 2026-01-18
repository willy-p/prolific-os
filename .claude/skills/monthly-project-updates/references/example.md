---
project: "Green Apple"
month: "2026-01"
update_date: "2026-01-16"
owner: "Emily G."
architect: "Kiana"
customer_engagement: "Vidar / Emily G. / Sara"
required_reviewers: "Vidar, Victor, Max Ho."
links:
  - name: "Project wiki"
    url: "<Project wiki link>"
  - name: "Green Apple data deck"
    url: "<Green Apple data deck link>"
---

# Green Apple — Monthly Update (Jan 16, 2026)

## Slide 1 — Executive Summary (Key progress & wins)

### Narrative (1–2 sentences)
- Illumination testing in fed-batch plate scale produced **~0.5 g/L (unpurified) Day 10** BLI titers, and identified an apparent tradeoff where **more light boosts output early but reduces viability later** (days 7–10), suggesting **reduced illumination post–temp shift** is favorable.
- Clone **21_G_8** reached **high density (>25M cells/mL)** and appears to benefit from **pulsed / reduced duty-cycle illumination** vs constant light.

### Key progress & wins
- Illumination test resulted in (unpurified) **Day 10 BLI titers around ~0.5 g/L**.
- **21_G_8** (UBC-Cry2 clone #8, PM GA codon op, bALA SP) achieved **>25M cells/mL max VCD** during 10-day fed-batch in 24DWP.
- 21_G_8 achieved **higher titer** with **“medium off”** (Time off = **169m or 239m**) than with constant illumination.

### Key challenges (optional)
- **Long-term illumination** shows a **dose-dependent drop in viability** between days **7–10**, which may constrain late-run productivity and/or product quality unless managed with illumination strategy.

### Data highlights
#### Figure A — Day 10 ProA BLI titers at 24DWP scale (illumination test)
- **Source:** “ProA BLI titer, 24DWP” (data deck entry)
- **Setup:** Constant illumination for 10 days at varying intensities; 3M cell/mL seed; 34°C temp shift on day 3.
- **Result:** Top conditions achieved **~0.5 g/L (unpurified) Day 10**.
- **Interpretation / so what:** Data supports continued illumination/process optimization, with emphasis on post–temp shift illumination modulation.

#### Figure B — Impact of illumination intensity on titer, Qp, viability
- **Source:** “Impact of illumination intensity on titer, Qp, viability” (data deck entry)
- **Result:** Increasing intensity is associated with a **dose-dependent viability decline** late-run (days 7–10).
- **Interpretation / so what:** **0.14–0.5** intensity conditions “look best” post–temp shift; consider illumination scheduling as a primary lever.

---

## Slide 2 — Key risks & key decisions

### Key risks (Risk register)
| Risk | Potential impact on milestone/KR | Mitigation |
|---|---|---|
| Round 1 attempt of clone generation does not result in top-performing clones reaching titer/quality goals | `low` — target now requires reaching **1.5 g/L by mid-2026**; failure would delay customer goal | Mitigation: (1) Re-engineer pools + generate more clones incorporating learnings (copy number, GS strength, cassette variations). (2) Process optimization + promotion of top lines to DASbox to help reach goal. |
| Current top-performing clones use opto system **without FTO** | `medium` — goal is now an **FTO line reaching 1.5 g/L by mid-2026**; licensing/commercialization risk | Mitigation: Include both top 2 opto systems in Round 2 re-engineering; prioritize license negotiations as relevant. |
| Incubator/illuminator capacity + Octet/NOVA/cell counter capacity constraints | `low` (could become high without mitigations) — could throttle experimental throughput and delay milestones | Mitigation: More DX2s released; new Kuhner installation pending; bottlenecks raised in CPRM/bio strategy; CEDEX coming online for titer + glucose measurements. |
| Project resourcing (lean / under-resourced) | `medium` — delays, inability to parallelize (esp. process optimization + STRIDE work) | Mitigation: Jaren joined (helpful); continue intentional deprioritization/push-out of opportunistic work (e.g., GA STRIDE) until resourcing improves. |

### Key decisions (Decision log)
| Decision | Status | Proposal / path forward |
|---|---|---|
| Promote one or more GA cell lines to the DASbox for a run in March or April | `upcoming` | Decide by **early Feb**. Cross-functional alignment ongoing (BPD, Hardware, Opto, Product); discuss candidate lines with BPD next week; final call by end of month. |
| ProA purify subset of samples from each production run and quantify using A280 absorbance and/or HPLC (use BLI only on crude samples) | `inform` | Proceed with plan; note purification + additional analytics are outside original scope but improve measurement quality. |
| Develop intact LC–MS method to assess proteoform distribution vs reference | `inform` | Use method to investigate discrepancies observed in AnChem traces; validate clones produce consistent proteoforms vs reference. |
| Complete a third round of cell engineering applying most promising strategies/learnings suitable for customer handoff/commercialization | `inform` | Rapidly kick off final engineering round; strategy aligned with Opto/Hardware/Legal/BPD/Product to maximize chance of handoff-ready line midyear. |

---

## Slide 3 — Company OKRs & Project Milestones

> Status enum: `de-scoped/paused | off track | blocked/delayed | issue | on track | planning stage | done`

| Company & customer objective | Workstream | Milestone | Customer view | Previous status | Current status | Notes |
|---|---|---|---|---|---|---|
| Prolific OKR Objective 2: Demonstrate undeniable value to our target customers; GA goal: create OG cell line achieving **>1.5 g/L** titer (TS/DASbox) and **>3×** vs conventional | Top clone(s) follow-up | Tube spin fed-batch production runs on top clones (CM sent to GA; titer + characterization) | Nov 30 | done | done | Completed. |
| (same) | Top clone(s) follow-up | Process optimization at 24DWP and tube spin scale | N/A | ongoing | ongoing | Continues; resourcing noted as a risk. |
| (same) | Top clone(s) follow-up | Testing/optimization of illumination conditions and additives | N/A | ongoing | ongoing | Illumination test produced ~0.5 g/L unpurified Day 10; optimize post–temp shift illumination. |
| (same) | Accessory phenotype (STRIDE) | Molecular cloning of accessory protein plasmids + stand-up stress reporting assays | Oct 17 | on track (Oct 17) | ongoing | Assay stand-up + cloning in progress. |
| (same) | Accessory phenotype (STRIDE) | Run stress reporting assays on minipools to identify intervention (deprioritized; opportunistic) | Jan 12 | TBD | TBD | Explicitly deprioritized; run opportunistically. |
| (same) | Accessory phenotype (STRIDE) | Engineer accessory proteins into top clones | Mar 4 | Mar 4 | Mar 4 | Planned; depends on resourcing. |
| (same) | Accessory phenotype (STRIDE) | Production runs + illumination optimization | Mar 31 | Mar 31 | Mar 31 | Planned. |
| (same) | CLD Round 2 | Cell engineering, selection, confirmation of target production | Dec 5 | done | done | Completed per plan. |
| (same) | CLD Round 2 | Beacon loading, clone isolation, outgrowth, banking | Jan 23 | Jan 23 | Jan 23 | Scheduled/ongoing. |
| (same) | CLD Round 2 | Fed-batch clone screen | Feb 13 | Feb 13 | Feb 13 | Planned. |
| (same) | CLD Round 2 | Fed-batch production runs + process optimization with top clones | Mar 31 | Mar 31 | Mar 31 | Planned. |
| (same) | CLD Round 3 | Molecular cloning + plasmid prep | N/A | planning stage | Feb 27 | New workstream kicked off. |
| (same) | CLD Round 3 | Pool engineering + GS selection | N/A | planning stage | Mar 27 | New workstream kicked off. |

---

## Slide 4 — Project timeline

### Timeline (high-level)
- **Now (Jan):** Illumination + process condition testing; Round 2 Beacon activities underway; Round 3 design/cloning kicking off.
- **Next (Feb–Mar):** Round 2 clone screen; begin production runs applying Round 1 learnings; Round 3 pool engineering + GS selection.
- **Later (Apr–Jul):** Round 3 Beacon run/outgrowth; select top performers; production runs applying learnings across rounds.

### Timeline detail (derived from internal view)
| Phase / Workstream | Start | End | Notes |
|---|---:|---:|---|
| Illumination + process condition testing | Dec | Mar | Ongoing optimization; late-run viability vs illumination is a key lever. |
| Round 2 CLD — Beacon run/outgrowth | Jan | Feb | Clone isolation/outgrowth/banking followed by clone screen. |
| Round 2 CLD — clone screen + production runs | Feb | Apr | Select top performers; production runs applying learnings from Round 1. |
| Round 3 CLD — design → cloning → plasmid prep | Jan | Feb | Brainstorm design; finalize; begin cloning; prep plasmids. |
| Round 3 CLD — pool engineering + GS selection | Feb | Mar | Start pool engineering; continue selection. |
| Round 3 CLD — Beacon run/outgrowth → screen → bank | Apr | Jul | Additional shots on goal for handoff-ready line. |

---

## Slide 5 — Upcoming data / deliverables

### Upcoming data / deliverables
| Deliverable | OKR / milestone | Date & status | Aligned spec / requirements |
|---|---|---|---|
| Next round of results from illumination testing collaboration with data team | Customer goal (intermediate step) | ~2026-02-04 — `on track` (BLI data ready; AnChem handoff) | Initial 10-day fed-batch production run with 2 top GA clones in both 24DWP and 96DWP to determine correlation between scales. |
| Round 3 clone screening off the Beacon | Customer goal (intermediate step) | TBD — `planning stage` | (Details TBD) |

### Upcoming handoffs / cross-deliverables
| Deliverable | Producer → Recipient | Date & status | Aligned spec / requirements |
|---|---|---|---|
| Handoff of Round 2 pools for Beacon run + additional clone generation | GA (Seesha) → CLD | done — `done` | Round 2 pools planned for Beacon; include mitigation plan: load previous Round 1 pool if needed to generate more clones (backup). |
| Ship crude conditioned media (CMV, OptoChassis, All-in-one) to GA for testing | Prolific → GA | paused — `de-scoped/paused` | Ship frozen crude (or possibly ProA-purified) media containing ~1–2 mg target per condition; include detailed sample metadata. Paused until later-round material exists. |
| Purification + SEC HPLC testing and/or HPLC quant + analysis | Opto → AnChem (Ian) | ongoing — `on track` | Determine % monomer vs fragments via SEC HPLC; ProA purify subset; quantify via A280 and/or HPLC. |
