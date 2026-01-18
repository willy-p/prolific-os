# Subcon Project Reference Document

## Overview

**Subcon** (Subunit Control) is a multi-workstream initiative at Prolific Machines focused on demonstrating optogenetic control of subunit stoichiometry in complex multi-chain proteins. The project aims to show that light-inducible gene expression can control the ratios of protein subunits in bispecific antibodies and multibody therapeutics.

**Project Manager:** Will Paton
**Technical Lead:** Shahram Misaghi
**Key Scientists:** Noreen Wauford (molecular cloning), Amritha Menon (cell line development)

---

## Project Structure

The Subcon initiative comprises three interconnected workstreams:

| Workstream | Partner | Codename | Status | Start Date | Key Deadline |
|------------|---------|----------|--------|------------|--------------|
| 1. Patent Work | Internal | Epcoritamab | Active - Pools in recovery | Oct 2025 | Sep 2026 (data due) |
| 2. Radiant Grant | Radiant Biotherapeutics | Cinnamon | Active - Vector development underway | Jan 2026 | Aug 2026 |
| 3. Lonza PoC | Lonza | Raspberry | On Hold | Apr 2026 (earliest) | TBD |

---

## Workstream 1: Patent Work (Internal)

### Summary
Demonstrating optogenetic control of individual subunits and stoichiometric control using a bispecific antibody (Epcoritamab) as the model molecule.

### Patent Details
- **Title:** "Compositions, Methods, and Systems for Controlling Complex Molecule Subunit Expression"
- **Application Number:** 63/892,131
- **Filing Date:** October 2, 2025
- **Inventors:** Victor Jones, Shahram Misaghi, Maximilian Horner
- **Data Deadline:** End of September 2026 (one year from provisional filing)

### Technical Approach
The patent covers methods for controlling multimeric protein subunit expression through optogenetic and constitutive expression systems in a combinatorial barcoded vector design.

Key claims include:
- Using optogenetic promoters to control expression of individual subunits
- Combining optogenetic and constitutive promoters on the same expression construct
- Using different wavelengths of light to control different subunits independently
- Modulating light exposure (intensity, duration, pattern) to tune expression levels

### Current Status (as of Jan 16, 2026)
- **Vectors:** Noreen has completed cloning of 4 vectors for Epcoritamab:
  - P_2061: L1-L2-OptoL2
  - P_2062: L2-L1-OptoL1
  - P_2064: H2-H1
  - P_2065: H2-H1-L1-IRES-L2-OptoL2 ("All in one")
- **Cell Line Development:** Pools are in recovery
- **First Data:** First pool production run data expected ~Feb 21
- **Beacon Timeline:** Single cell cloning targeted for Feb 9 or Feb 16, 2026

### Hosts
- Using CRY2olig optogenetic clone hosts
- 4 host clones selected
- 12 pools pre-selection, 24 pools post-selection (GS+Puro, GS+Puro+MSX)

---

## Workstream 2: Radiant Grant (Cinnamon)

### Summary
A $199,555 grant from the Bill and Melinda Gates Foundation to demonstrate optogenetic control of HIV and RSV multibody production. This is a collaboration with Radiant Biotherapeutics, who developed the multibody platform.

### Strategic Importance
1. **Gates Foundation Relationship:** Deepens relationship with BMGF, could lead to additional grants or dilutive funding through their venture arm
2. **Partner Development:** Opportunity to establish partnership with Radiant Biotherapeutics
3. **Global Health Impact:** Multibodies are highly potent therapeutics for HIV, RSV, and other infectious diseases targeting low- and middle-income countries

### Grant Details
- **Investment ID:** INV-097042
- **Grant Start Date:** December 1, 2025 (delayed)
- **Grant End Date:** August 30, 2026
- **Funding to Prolific:** $128,055
- **Funding to Radiant:** $71,500 (for purification and analytics)

### What are Multibodies?
Multibodies are highly polyvalent, multi-specific antibody structures developed by Radiant (licensed from Sick Kids Hospital):
- Multiple Fab regions and Fc region held together by ferritin
- A typical trispecific multibody has: 16 Fab1, 8 Fab2, 4 Fab3, 4 Fc subunits (32 total components)
- Up to 10,000x more potent than monoclonal antibodies
- Can target multiple epitopes simultaneously, reducing viral escape

### Project Outcomes
1. **Outcome 1:** Optogenetic decoupling of growth and production phases to enable higher titers of HIV multibodies from CHO cells
2. **Outcome 2:** Optogenetic tuning of individual subunit expression and ratios to improve CHO cell expression of HIV Multibodies

### Technical Approach
- Single-color optogenetic system (proving concept before moving to multi-color)
- Going to pools only, not clones (proof of concept scope)
- 16 vectors total, 10 pools planned
- Molecules: RSV IgG, RSV MB1, HIV IgG, HIV MB1 (monospecific), HIV MB2 & MB3 (trispecific)

### Deliverables & Timeline
| Output | Target Date |
|--------|-------------|
| Selected HIV Multabody design candidates | Dec 7, 2025 |
| Stable cell pools | Mar 15, 2026 |
| 1mg protein shipped to Radiant | May 15, 2026 |
| Analytics dataset from Radiant | Jul 15, 2026 |
| Joint final report | Aug 15, 2026 |

### Current Status (as of Jan 16, 2026)
- **Agreement Status:** Master Agreement signed; sequences received
- **Vector Development:** Underway
- **Key Decision:** Added single-vector design for one trispecific Multabody to improve chances of boosting titer for Radiant's highest-priority molecule
- **Delay:** Project delayed ~1 month due to Master Agreement negotiations

### Scope Alignment Challenges
The project kickoff was chaotic due to:
- Commercial team (Vidar, Sara) scoped work with Radiant without involving project managers
- Misalignment between Shahram, Amritha, Vidar, and Arif (Radiant) on vector designs
- Required 5 revisions of the Statement of Work with Radiant to reach alignment
- Key resolution: Agreed on dual-vector designs, specific molecule selection, and success criteria

### Key Contacts
- **Radiant:** Arif Jetha (Sr. Director of Discovery and Preclinical Development), Xinwen He
- **Gates Foundation:** Jacqueline Kirchner (Program Manager), Tod Haggard (Investment Coordinator)
- **Prolific:** Ianessa Morantte (Primary Contact), Vidar van der Meijden (Commercial Lead)

### Coordination Notes
- Will has not yet been introduced to Jacqueline and was not included on prior monthly BMGF update threads, which creates a coordination gap across the two Gates-funded projects.

---

## Workstream 3: Lonza PoC (Raspberry)

### Summary
A potential proof-of-concept project with Lonza to demonstrate optogenetic control of bispecific antibody stoichiometry using their three-chain bispecific molecule.

### Status
**On Pause** - Waiting for Prolific to complete a separate titer improvement PoC with Lonza on monoclonal antibodies.

### Why "Raspberry"?
Lonza's codename at Prolific because the partnership is not yet public.

### Technical Scope
The target molecule is a bispecific antibody with:
- Light chain (L)
- Heavy chain (H)
- Heavy chain linked to scFv (H_scFv)
- Designed with knob-in-hole approach for heterodimer formation
- Challenge: H_scFv homodimers are a problem with this molecule

### Proposed Approach
8 pools with various combinations of CMV and optogenetic promoters:
| Pool | Design | Goal |
|------|--------|------|
| 1 | All CMV | Baseline control |
| 2-5 | Mix of CMV + Opto on different chains | Control specific chain ratios |
| 6-8 | Single plasmid with CMV + Opto | Reduced heterogeneity |

### Budget
- **Phase 1 Total:** $190,000
- **Prolific Co-Investment:** $95,000
- **Cost to Lonza:** $95,000

### Timeline (if activated)
- Earliest start: April 2026
- Materials and sequences: Upon activation
- Deliverables complete: ~6 months after start

### Key Contacts
- **Lonza:** Christian Siltanen
- **Prolific:** Vidar van der Meijden

---

## Resource Allocation

### Current Team Assignments
| Role | Patent Work | Radiant | Lonza |
|------|-------------|---------|-------|
| Construct Generation | Noreen | Noreen | TBD |
| Transfection/Production | Amritha | Amritha | TBD |
| Technical Lead | Shahram | Shahram | Shahram |
| Project Management | Will | Will | Will |
| Commercial | - | Vidar, Sara | Vidar |

### Resource Constraints
- Noreen was previously split between AAV work and bispecific work; AAV wrapped up end of 2025
- Makoto overloaded with Raspberry constructs and vector working group
- AnChem team fully booked through year-end; method development for subunit characterization is challenging

---

## Analytical Methods

### Internal Capabilities
- **Titer:** BLI or ProA-HPLC (ready)
- **Aggregation:** SEC (ready by end of Jan)
- **Chain Pairing:** Method development needed; not ready for first samples
- **Western Blot:** Available (Shahram experienced)

### External Analytics (Radiant)
For Radiant project, Radiant will handle:
- Purification (ProA followed by SEC)
- SEC-MALS
- Component ratio analysis
- Hydrophobicity, aggregation profile, thermal stability
- Antigen and FcR binding assays
- Multi-clade pseudovirus neutralization assays

### Turnaround Times
- Internal: ~1 week
- Radiant: 2-3 weeks (fastest case)

---

## Risks and Mitigations

### Patent Work
| Risk | Mitigation |
|------|------------|
| Medium-strength promoter not characterized as well as strong promoter | Using proven Cry2 system |
| All-in-one vector may have decreased induction down the chain | Two-vector designs as backup |

### Radiant Project
| Risk | Mitigation |
|------|------------|
| HIV multibody designs may remain difficult to express | Testing multiple candidates including well-expressing RSV MB1 |
| Single subunit control may not be sufficient for full optimization | Demonstrating concept will inform future multi-wavelength work |
| Timeline delays | Agreement delayed ~1 month; may need to negotiate extension with Gates |
| Complex molecules may have longer pool recovery times | Building buffer into timeline |

### Lonza Project
| Risk | Mitigation |
|------|------------|
| Dependent on completing mAb titer improvement PoC first | On pause until prerequisite complete |

---

## Key Decisions Made

1. **Vector Design Strategy (Radiant):** Dual-vector designs only; single-vector designs too risky for pool heterogeneity
2. **Molecule Selection (Radiant):** RSV IgG + MB1 (well-expressing benchmark), HIV IgG + monospecific MB + 2 trispecific MBs
3. **Control Strategy:** Compare against Radiant's internal CMV data rather than creating separate CMV cell lines
4. **Scope:** Pools only, not clones (proof of concept)
5. **Shipping:** Freeze on dry ice, use WorldCourier, avoid FedEx

---

## Lessons Learned

### Project Kickoff
The Radiant project kickoff highlighted the importance of:
- Involving project managers early in commercial scoping discussions
- Clear communication between commercial, technical, and project management teams
- Defining scope and success criteria before committing to timelines

### Technical Planning
- Need to align on vector design strategy before requesting sequences
- Analytical method development should be planned in advance of sample generation
- Resource constraints should be identified and communicated early

---

## References

### Key Documents
- [Patent Provisional Application](subcon-reference/patent%20-%20ratiometric%20control.md)
- [Gates Foundation Grant Proposal](subcon-reference/2025%20-%2010-09%20Gates%20Radiant%20Grant%20Proposal.md)
- [Lonza Statement of Work](subcon-reference/2025-10-08%20Proposal%20for%20Subunit%20Ratio%20Control%20PoC%20Lonza%20v2.md)
- [Radiant Statement of Work](subcon-reference/2025-12-19%20Proposal%20for%20Subunit%20Ratio%20Control%20Radiant%20(005).docx.md)
- [Meeting Notes](subcon-reference/Subunit%20Control%20Meeting%20Notes-20260108125659.md)
- [Epcoritamab Vector Designs](subcon-reference/In-house%20bispecific%20multi-chain%20control%20cloning.md)

### Project Updates
- [SubCon Monthly Update - Jan 2026](subcon-reference/subcon-project-updates/2026-01-16-subcon-monthly-update.md) | [Slides](https://docs.google.com/presentation/d/1r1SJ0kKQVC3BBRE1iiKcLKwlSpEYXsLf4mmfPqSQfFQ/edit?slide=id.g3b84aef65f2_2_335#slide=id.g3b84aef65f2_2_335)

### External Resources
- [Gates Foundation Global Access Statement](https://www.gatesfoundation.org/about/policies-and-resources/global-access-statement)
- [Radiant Biotherapeutics](https://radiantbio.com/)

---

*Last Updated: January 16, 2026*
