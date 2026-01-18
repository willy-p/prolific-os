# **GMP Illuminator Requirements Review + Downselection**
Mon, 10 Nov 25 · [c\_1886bkqp25l48gc9mohbsoag264k0@resource.calendar.google.com](mailto:c_1886bkqp25l48gc9mohbsoag264k0@resource.calendar.google.com), [max@prolific-machines.com](mailto:max@prolific-machines.com), [madeleine@prolific-machines.com](mailto:madeleine@prolific-machines.com)
### **System Architecture Definition**
*   Agreed on 4 main subsystems for modular illuminator (attached)
    [GMP Illuminator Architecture - Draft 1 - Draft 2.pdf](https://t36217409.p.clickup-attachments.com/t36217409/01b3d4cd-513a-4610-bdaa-b6ff2910d2a4/GMP%20Illuminator%20Architecture%20-%20Draft%201%20-%20Draft%202.pdf)
    *   Controller subsystem: user interface, environment management (enclosure), electronics, firmware
    *   Power subsystem: may be separate from controller depending on requirements
    *   Illuminator subsystem: light sources, environment management (enclosure)
    *   Sensing subsystem: separate from illuminator
    *   Software management subsystem: backend (data) and frontend (UI)
*   Architecture enables clear ownership assignment to team members
    *   Baxter: illuminator subsystem (starting January)
    *   Ryan: controller subsystem after Blastoise completion
    *   Taylor: sensors and optical simulation work
### **Requirements Prioritization Framework**
*   Three critical focus areas identified - in order to learn about requirements with major timeline implications ASAP - this will help us to identify the big chunks of time in our technology roadmap.
    *   **User requirements**: human interaction, CDMO validation processes, installation needs, reliability specs
    *   **GMP compliance:** 21 CFR standards, audit infrastructure, testing protocols
    *   **Opto requirements:** \"what questions do we need to answer to build the illuminator? What do we need to know now vs. later? What is the impact on timelines of changing opto specs? What subsystems are the opto specs related to?\"
![](https://t36217409.p.clickup-attachments.com/t36217409/9da85000-3edc-4f86-a276-6b29702234ad/IMG_7652.jpg)
*   Timeline-critical requirements take priority over implementation details
*   James (Mytos) advised: don’t over-engineer for GMP compliance in prototypes
    *   Focus on building functional device first
    *   Add GMP compliance iteratively
    *   Self-reporting model in US reduces certification burden
### **GMP Compliance Strategy**
*   Senior mechanical engineer should own GMP specifications (Baxter role)
*   Key unknowns requiring external consultation
    *   IQ/OQ/PQ qualification processes and timelines
    *   Data storage and audit trail requirements
    *   Validation methodology for customer onboarding
*   Lonza meeting Friday: opportunity to understand CDMO validation expectations
*   User Requirement Specification (URS) format research needed for industry standards
### **Optical Specifications Coordination**
*   Max and Taylor to engage opto team on critical design parameters
    *   Reversion kinetics (currently ~30 minutes acceptable range)
    *   Sensitivity requirements (expect similar or better than current systems)
    *   Multiplexing and wavelength requirements timing
*   Need two-way conversation before opto team finalizes selections
*   Modular design provides flexibility for range of specifications
### **External Consultation Plan**
*   Budget: couple thousand dollars available for consultant hours
*   Consult Pete and Alex first for recommendations and free initial guidance
*   Focus areas for paid consultation
    *   GMP regulatory compliance timeline implications
    *   User requirement specification development
    *   Industry standard validation processes
*   Prepare draft materials before engaging consultants for maximum value
### **Resource Allocation and Timeline**
*   January target for work stream assignments
    *   Baxter freed up after Palkia installations
    *   Ryan available after Blastoise completion
    *   Taylor’s CFD simulation workload TBD
*   Requirements mapping to subsystems needed before team handoff
*   Prototype development parallel to requirements gathering
    *   Don’t wait for complete specifications
    *   Focus on modular patch-style approach (lowest regulatory risk)
### **Action Items**
*   [@Will Paton](#user_mention#54153245) : share architecture diagram and subsystem buckets with team
*   All: map assigned requirements into defined subsystems
*   **User requirements:** [@Madeleine Allen](#user_mention#54136065) (with support from [@Vidar van der Meijden](#user_mention#54091421) )
    *   [@Madeleine Allen](#user_mention#54136065) : lead user requirements research, develop URS draft, engage GMP consultants
    *   [@Will Paton](#user_mention#54153245) to own list of questions for Lonza meeting on Friday
*   **GMP Compliance:** [@Will Paton](#user_mention#54153245) (with support from [@Pete czerpak](#user_mention#75430545))
    *   [@Will Paton](#user_mention#54153245) consolidate GMP-related requirements and create prioritized list of questions that need to be answered.
*   **Opto specifications:** [@Taylor Hinsdale](#user_mention#75430548) (with support from [@Max Huisman](#user_mention#54118042) )
    *   [@Max Huisman](#user_mention#54118042) : schedule meeting with Opto team re: early design thinking
    *   [@Max Huisman](#user_mention#54118042) [@Taylor Hinsdale](#user_mention#75430548): coordinate with opto team on specification requirements and timeline impact (see example questions above)
*   [@Madeleine Allen](#user_mention#54136065) : develop cost estimates
