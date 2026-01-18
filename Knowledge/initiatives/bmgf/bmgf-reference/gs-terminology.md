# GS Cassette Terminology - BMGF Team Lexicon

*Draft: 2026-01-15 | Author: Will Paton | Status: For review*

## TL;DR

| Term | What it means | Copy number | Titer potential | Ammonia risk |
|------|---------------|-------------|-----------------|--------------|
| **Full-length SV40 / GA** | Weaker GS expression → cells need fewer copies to survive | ~5 copies | Lower ceiling | Lower |
| **Stringent GS / truncated SV40** | Weaker GS activity → cells need more copies to survive | ~20 copies | Higher ceiling | Higher |

---

## The Logic

CHO cells require glutamine synthetase (GS) to produce glutamine for survival. By engineering GS cassettes with different promoter strengths, we can control how many copies of the transgene cells need to integrate:

### Full-length SV40 promoter (GA cassettes)
- **Strong promoter** → more GS enzyme activity per copy
- Cells need **fewer copies** (~5) to produce enough glutamine for survival
- Lower transgene copy number limits theoretical titer ceiling
- Less internal glutamine production → lower ammonia buildup in culture

### Truncated/stringent SV40 promoter (new vectors)
- **Weak promoter** → less GS enzyme activity per copy
- Cells need **more copies** (~20) to survive GS selection
- Higher transgene copy number → higher theoretical titer potential
- More internal glutamine production → higher ammonia buildup
- Feed tuning may not translate between GA and stringent cassettes

---

## Why This Matters for BMGF

1. **OptoChassis pools** currently use full-length SV40 (~5 copies). The team believes this is limiting titer.

2. **Prolific vector** cloning (John H, Nora) uses more stringent GS cassette, which should drive higher copy numbers.

3. **Process development impact:** Sasha has observed that higher-copy clones (stringent cassette) show more ammonia production. GA clones hit ~20 mM ammonia with viability drop-off. Feed tuning from GA clones may not translate to stringent cassette clones.

4. **Comparison fairness:** When comparing opto vs CMV lines, need to account for GS cassette differences—not apples-to-apples if one uses GA and the other uses stringent.

---

## Quick Reference

| Vector / Cassette | Promoter | GS stringency | Expected copies | Notes |
|-------------------|----------|---------------|-----------------|-------|
| BMGF vector (current) | Full-length SV40 | Less stringent | ~5 | Used in current optochassis |
| Prolific vector (new) | Truncated SV40 | More stringent | ~20 | Being cloned for MAM01 |
| GA cassettes | Full-length SV40 | Less stringent | ~5 | Historical nomenclature |

---

## Open Questions

- [ ] Should we standardize on one GS cassette type for final comparisons?
- [ ] How do we normalize titer comparisons across different copy numbers?
- [ ] What is the ammonia threshold we can tolerate before process changes?

---

*Feedback? Corrections? Share in the BMGF Slack channel.*
