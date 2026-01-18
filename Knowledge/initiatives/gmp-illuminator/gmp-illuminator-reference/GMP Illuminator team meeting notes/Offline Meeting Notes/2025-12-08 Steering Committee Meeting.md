## Attendees:
[@Will Paton](#user_mention#54153245) [@Madeleine Allen](#user_mention#54136065) [@Alex Toda](#user_mention#75436469) [@Max Huisman](#user_mention#54118042) [@Maximilian Hoerner](#user_mention#60202561) [@Vidar van der Meijden](#user_mention#54091421) [@Victor Jones](#user_mention#54153244)
## Agenda (45 min):
*   Biology resourcing for scale-up experiments (enabling GMP Illuminator design lock) - [@Will Paton](#user_mention#54153245), 10 min
    *   [2025-2026 Bio Resourcing Tool](https://docs.google.com/spreadsheets/d/1-1L_U4V1dApz7pTbL1-YCZsEiOK21gMZ68tJPumqNMw/edit?usp=drive_web&ouid=107219103470409924072) - this is currently listed as priority #9
    *   hard to estimate resourcing before knowing what questions need to be answered → which experiments need to be run
    *   once cell line is selected, that enables experimentation to be done
        *   lots of this experimentation should be done by process development team
    *   can learn a lot about many cell lines at small scales → define envelope of opto specifications
    *   opto team is already doing experimentation about opto chassis lines to inform scale-up
    *   Taylor is currently drafting a list of questions for opto team
        *   Opto team can share information on what they currently collect - what is the delta between what the HW team needs?
        *   [@Max Huisman](#user_mention#54118042) to provide input on priority
        *   [@Vidar van der Meijden](#user_mention#54091421) to provide input on products that this will support
    *   What kinds of products do we need to support with this illuminator?
        *   most likely: GA, Raspberry mAbs
    *   [@Vidar van der Meijden](#user_mention#54091421) to validate whether cells need to be protected from ambient light for first product / when we need to make a decision
    *   [@Victor Jones](#user_mention#54153244) to assess feasibility of culturing cells under ambient light in seed train
        *   e.g. do we need a chemical repressor or do we need to run experiments to test whether light-sensitive cells can be cultured under ambient light then put into a light-induced process?
    *   [@Alex Toda](#user_mention#75436469) to launch a scale-up working group / program:
        *   We're missing a cohesive group, ownership & accountability for process scale-up (overall product, process - incl. cells & hardware). Should a working group or program be set up to own this?
*   Overview of current design ideas - [@Max Huisman](#user_mention#54118042), 10 min
    *   
*   Review proposed milestones (see below for cross-functional milestones) - [@Will Paton](#user_mention#54153245) [@Madeleine Allen](#user_mention#54136065), 10 min
*   Biology roadmap update - [@Victor Jones](#user_mention#54153244) & [@Max Huisman](#user_mention#54118042), 5 min
    *   Biology roadmap to be developed in January
    *   [@Vidar van der Meijden](#user_mention#54091421) to own roadmap for cell lines that could be used for first GMP batch (GA, raspberry)

# Milestones

**Cross-functional dependencies are highlighted in yellow**

## Decisions
*   Opto-related
    *   What opto-system will be used
    *   No. of wavelengths supported
    *   Closed-loop control needed?
*   Form Factor locked (a.k.a. illuminator embodiment)
    *   **Dependent on validation of opto system & process performance with form factor selection** (e.g. acceptable duration between illuminations)
*   Prototype levels set
    *   _e.g. what prototypes will be made and what will be tested at each stage_
    *   Which phases will be run (POCs, alphas, betas)
    *   Entry/exit criteria and deliverables for each phase
    *   Lock scope so team knows what \"done\" means at each level
*   Subsystem design decisions
*   Supplier / components selected
*   Certification decisions
*   Data governance
    *   _e.g. will we host any customer data (in which case we'd need SOC 2 compliance)?_
*   Architectural decisions
    *   Form factor decided
    *   Output optical configuration selected
    *   Control architecture decided
    *   power architecture decided
    *   material selection finalized
    *   mounting strategy finalized
    *   communication protocols selected
    
## Product Dev Process
*   *   Freeze Product Development Process phases
        *   _i.e. what are the exact phases (alpha, beta, etc.) that need to be delivered?_
*   *   Bioreactor compatibility requirements finalized (volumes, vessel, etc)
    *   Specification Documents Finalized Internally
        *   User Requirements Spec (URS)
        *   Functional Requirements Spec (FRS)
        *   Software Requirements Spec (SRS)
*   *   Specification Documents Accepted by Customer
    *   Design inputs for GMP environment documented
    *   design / eng
        *   design freeze for each subsystem
        *   final design freeze
*   *   verification / validation
        *   VTP approved
        *   VMP approved
*   *   Finalize BOM (for each phase)
    *   Design freezes (each subsystem)
    *   Validation Docs approved
    *   Product documentation (Manuals, SOPs, etc.) approved

## Resource / Expertise
*   *   Go/no-go: engaging consultants versus FTEs
    *   Potential experts needed:
        *   Software engineer (scoped post-raise)
        *   MechE (scoped post-raise)
        *   Head of HW (scoped post-raise)
        *   **Quality (definite need)**
        *   Industrial design
        *   Supply chain / procurement
        *   Manufacturing engineer
        *   Automation
        *   Ergonomics / human factors
*   *   internal resource
        *   program team staffed
        *   documentation / control systems established
        *   budget approved
        *   Physical Space (facilities)
            *   required for production and testing
        *   Chain of custody management for components
*   *   external resource
        *   external team aligned on
        *   consultant (GMP) signed
        *   consultant (CDMO) signed
        *   contract manufacturer signed
        *   key component suppliers qualified
        *   long-lead component risk assessment completed
*   *   infrastructure
        *   test equipment procured
        *   1kL test reactor (?)
## User / Customer
*       *   User discovery
        *   first CDMO signed
        *   first CDMO site identified
        *   Bioreactor lock: specific model, scale (volume)
        *   URS signed by first CDMO
*       *   feedback integration
        *   specifics of CLC, multiplexing etc → feedback from CDMOs integrated
        *   validation of embodiment from multiple CDMOs
        *   light output validated via CDMO requirements
        *   dark validated via CDMO requirements
        *   human factors review complete
*       *   Customer approval
        *   System design
        *   Software functionality
        *   Specification documents (URS, FRS, SRS)
        *   SOPs
*       *   customer qualification
        *   pilot units deployed with key CDMO(s) for testing
## Feasibility
*       *   Proof of Concepts determined
        *   optical feasibility POCs
        *   thermal management POCs
        *   electrical / control feasibility
        *   mounting feasibility
        *   manufacturing feasibility
        *   gmp compatibility feasibility
*       *   Proof of Concepts completed
        *   optical output meets requirements
        *   thermal meets requirements
        *   controls meet requirements
        *   uniformity/reproducibility meets requirements
        *   firmware functionality meets requirements
        *   mounting requirements met
*       *   Cost Feasibility
    *   Cell Line embodiment simulated illumination feasibility
    *   Alpha Testing Completion
    *   Beta Testing Completion
## Qualification
*       *   Design (DQ)
        *   DQ documentation finalized / approved
        *   risk controls / gmp design requirements verified
*       *   Installlation Qualification
        *   IQ protocol developed
        *   test units validated in simulated gmp environment
*       *   Operational Qualification
        *   performance windows defined
        *   OQ execution complete
        *   All critical functionality demonstrated under defined ranges
*       *   Performance Qualification
        *   Long-duration lighting tests complete
        *   Stability over time established
        *   PQ run in actual GMP process complete (with partner facility if applicable)

# Biology Roadmap

# Granola Notes
# **GMP Illuminator Steering Committee**
Mon, 08 Dec 25 · [c\_1885rna4eud5ogq4milutho5cqiso@resource.calendar.google.com](mailto:c_1885rna4eud5ogq4milutho5cqiso@resource.calendar.google.com), [max@prolific-machines.com](mailto:max@prolific-machines.com), [max.hoerner@prolific-machines.com](mailto:max.hoerner@prolific-machines.com), [victor@prolific-machines.com](mailto:victor@prolific-machines.com), [madeleine@prolific-machines.com](mailto:madeleine@prolific-machines.com), [vidar@prolific-machines.com](mailto:vidar@prolific-machines.com), [alex.toda@prolific-machines.com](mailto:alex.toda@prolific-machines.com)
### **Context**
The GMP Illuminator Steering Committee met to address critical decisions and coordination needs for the GMP Illuminator project development. The session focused on three key areas: biology resourcing requirements for scale-up experiments that will inform illuminator design specifications, current hardware design concepts, and milestone planning across functional areas. The meeting also aimed to align biology roadmap development with hardware timelines for the first commercial product.
### **Notes**
### **Biology Resourcing for Scale-Up Experiments**
*   Currently listed as priority #9 out of 19 high-priority items in the 2025-2026 Bio Resourcing Tool
*   Resourcing estimates difficult without knowing specific experimental requirements
    *   Taylor is drafting questions for the opto team to determine what experiments need to be run
    *   Once cell line is selected, this will enable targeted experimentation
    *   Much of the experimentation may be handled by the process development team rather than opto team
*   Opto team already collecting relevant data on chassis lines for scale-up decisions
    *   Light sensitivity measurements, dark reversion kinetics, temperature sensitivity
    *   Leakiness characteristics at different temperatures
    *   Can learn significant information at small scales (96-well) without requiring large-scale experiments
*   Key specification questions need business input rather than just technical measurements
    *   Which products the illuminator must support (likely Green Apple and Raspberry mAbs)
    *   Level of light control precision required
    *   Whether multiple colors need simultaneous support
    *   Acceptable leakiness levels from background light
### **Ambient Light Protection Requirements**
*   Critical decision needed: whether cells require protection from ambient light during culture
    *   Impacts both illuminator design complexity and facility requirements
    *   Room light repression not feasible on current timeline for implementation
    *   Cryptochrome-based systems with tetracycline might provide solution
    *   Local interventions (foil covering reactors) may be sufficient for 50L and larger reactors
*   Different requirements across reactor sizes
    *   50L glass reactors can be easily covered
    *   Larger reactors already mostly enclosed with jacketing
    *   Sub-scale reactors present fewer challenges for light shielding
### **Current Illuminator Design Concepts**
*   Three design concepts under development, two similar enough for single invention disclosure filing
*   Slab design: Modular hexagonal units in protective casing mounted to reactor side
    *   Magnetic attachment not viable for most bioreactors
    *   Requires mounting system for even surface protection
*   Rod design: Modular units with LED rods extending from top mount
    *   Potentially flatter profile, easier top mounting
    *   Similar control architecture to slab design
*   Light guide design: LEDs positioned remotely with light guide distribution
    *   Flattest possible profile
    *   Taylor (optics expert) concerned about light intensity limitations
    *   More difficult height adjustment and mounting
    *   Potential advantage for blackout applications
*   All designs share common system architecture, light sources, and sensor integration
*   Universal compatibility prioritized over reactor-specific optimization
    *   Walls provide more consistent mounting surfaces than tops/bottoms
    *   Bag modifications explicitly avoided due to regulatory complexity
### **Cross-Functional Milestone Categories**
*   Decision milestones: Opto system selection, color requirements, control precision needs
*   Product development: Customer specification acceptance at key stages
*   Resources and expertise: Some roles scoped (top three), others requiring decisions on hiring vs. external support
*   User/customer requirements: Dependent on product and commercial team input
*   Feasibility studies: Optical validation throughout development process
*   Qualification: Alpha/beta testing with opto and bioprocess development support
### **Biology Roadmap Development Status**
*   Biology roadmap development delayed, likely starting early 2026
*   Most critical element: timeline for cell lines intended for first commercial product
    *   Green Apple and Raspberry mAb cell lines most likely candidates
    *   Current Green Apple line may need re-engineering
    *   FTO discussion has been accelerated and reprioritized
    *   Three cell lines discussed as primary candidates with potential for higher dark requirements
### **Scale-Up Coordination Gaps**
*   No cohesive group currently owns overall scale-up strategy connecting product, cell line development, process development, and hardware
*   Example communication failure: temperature shift from 37°C to 34°C development impacted illuminator specifications
*   Need for regular communication of seemingly minor technical changes that could affect hardware specifications
*   Expensive hardware corrections make specification accuracy critical
### **Key Takeaways**
*   Biology resourcing for GMP Illuminator scale-up experiments requires approximately one person’s effort, with exact scope dependent on business decisions about product support requirements
*   Three viable illuminator design concepts identified, with slab and rod designs preferred over light guide due to intensity concerns
*   Critical decision point needed on ambient light protection requirements, as this significantly impacts both hardware design complexity and facility modification needs
*   Missing coordination structure for scale-up activities across cell line development, process engineering, and hardware teams creates communication and specification alignment risks
### **Risks Flagged**
*   **Specification Lock-In Risk**: Limited biology resourcing may force narrow specifications that only support first customer, potentially requiring costly redesign for future applications
*   **Timeline Misalignment**: Biology roadmap development delayed until early 2026 while hardware development needs cell line specifications for design decisions
*   **Communication Gaps**: Lack of systematic information sharing between biology and hardware teams has already caused specification mismatches (temperature requirements)
*   **Regulatory Complexity**: Any modifications to bioreactor bags would create significant regulatory hurdles and slow implementation timelines
*   **Light Guide Intensity Limitations**: Taylor’s concerns about achieving required light intensities through light guide design may eliminate this option despite space advantages
### **Decisions & Action Items**
**Decisions Made:**
*   Provisionally allocate approximately one person’s biology resourcing for GMP Illuminator scale-up experiments, with monthly reassessment capability
*   Avoid any bioreactor bag modifications due to regulatory complexity
**Action Items:**
1. **Vidar van der Meijden**: Validate whether cells need protection from ambient light for first product and establish timeline for this decision
2. **Victor Jones**: Assess feasibility of culturing cells under ambient light in seed train, including evaluation of chemical repressor needs and light-sensitivity experiments
3. **Max Hoerner**: Provide input on prioritization for Taylor’s experimental question list to help scope biology resourcing requirements
4. **Alex Toda**: Establish scale-up working group to own coordination between cell line development, process development, and hardware teams
5. **Will Paton**: Participate in scale-up working group establishment
6. **Vidar van der Meijden**: Own roadmap development for cell lines that could be used for first GMP batch (Green Apple, Raspberry mAbs)
7. **Will Paton**: Schedule workshop later this week to combine Taylor’s experimental questions with business priority input for resourcing decisions
8. **Will Paton and Madeleine Allen**: Circulate detailed roadmap before January meeting for review and feedback
