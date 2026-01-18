# 2026-01-15 GMP Illuminator <> Opto Meeting Notes

**Date:** Thursday, January 15, 2026
**Attendees:** Taylor Hinsdale, Max Horner, Madeleine, Zack Harmer
**Related doc:** [Requirements Document](https://docs.google.com/document/d/12hrPbdzPas41xLGcF3mSqiIb3LjkEBZ-5KBDTCn_I7c/edit?tab=t.0)

---

## GMP Illuminator Requirements Overview

- Project timeline: 18 months for final delivery, need specs within next year
- Primary application: separation of growth and production (likely Green Apple)
- Key challenge: many parameters are context-dependent (optosystem, cell line, temperature)
- Goal: identify most important parameters and required accuracy levels

## Parameter Priorities & Context Dependencies

- Dark reversion time depends on:
  - Optosystem type
  - Cell line/clone selection
  - Temperature (37°C vs temperature shift conditions)
  - Measured endpoint (photoreceptor vs downstream protein production)
- Current measurement limitations:
  - Only measuring downstream outputs, not direct photoreceptor activity
  - Time ranges: minutes to hours depending on system
- Sensitivity and activation threshold similarly context-dependent
  - Will vary significantly between different optosystems
  - Need to establish ranges rather than precise values

## Design Constraints & Trade-offs

- Key question: how many illuminator modules needed for specific bioreactor?
- Current design concept: vertical sticks deployed around reactor
  - Modular approach allows scaling between reactor sizes
  - Surface area coverage limited by bioreactor geometry
- Critical design drivers:
  1. Maximum light intensity before cell toxicity/bag damage
  2. Minimum light threshold for activation (impacts shielding requirements)
  3. LED power limitations and availability constraints
- Pulsatile vs constant illumination equivalence still unknown

## Experimental Priorities

- Most important parameters requiring immediate investigation:
  1. Activation threshold (for light shielding design)
  2. Saturation dose limits (cell viability vs activation efficiency)
  3. Pulsatile response characteristics
- Secondary priorities: wavelength optimization
  - Current LEDs: 460-465nm, could explore 450-490nm range
  - Trade-off between peak activation (440-450nm) and reduced phototoxicity
  - Potential solution: long-pass filters to remove toxic shorter wavelengths

## Wavelength Optimization Opportunity

- Photoreceptor optimal range: ~440-450nm (not current 470nm)
- Current approach uses higher wavelengths to reduce toxicity
- Unexplored option: use 450nm LEDs with long-pass filters
  - Could achieve optimal activation with reduced toxicity
  - May require fewer LEDs overall
  - Especially valuable for high-volume reactors with light extinction issues

## Next Steps

- Taylor/Zack: review parameter document and add comments on context dependencies
- Will: expand "design lever" column with specific use cases for each parameter
- Team: develop experimental roadmap focusing on top 3 priorities
- Add experiments section below parameter table
- Schedule follow-up meeting after document review to clarify measurement definitions and experimental approaches

---

**Granola chat transcript:** [Link](https://notes.granola.ai/t/334f81d2-ad68-4baa-9bd9-fc5a7e667ee1-00demib2)
**ClickUp source:** [GMP Illuminator Documentation](https://app.clickup.com/36217409/v/dc/12h8j1-49171/12h8j1-119931)
