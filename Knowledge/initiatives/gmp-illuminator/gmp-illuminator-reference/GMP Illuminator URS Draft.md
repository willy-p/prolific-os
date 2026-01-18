# **User Requirements Specification (URS) for Single Use Bag Bioreactor Illuminator System** {#user-requirements-specification-(urs)-for-single-use-bag-bioreactor-illuminator-system}

Additional points to discuss: 

* What is the expected lifecycle of the first device?   
  * Return to service form \- how easy will it be for someone to perform maintenance?  
* Closed loop control \- what is needed for this to be “supported” (hardware / software)- aka even if it is not implemented, what do we need to include for the machine to be capable in the future  
* Clarify: What is considered an HMI?  
  * Is an HMI strictly a large touchscreen device? Or can a set of buttons and switches with a screen be considered an HMI?

Revision C

Dec 15, 2025

# Document Revision History {#document-revision-history}

| Rev | App. Date | Written by | Revised by | Approved by | Revision Summary |
| ----- | ----- | ----- | ----- | ----- | ----- |
| A | \- | Madeleine | Alex, Pete, Will | \- | Initial Draft |
| B | 1 Dec 2025 | Madeleine | Pete | \- | Changes from Initial Draft |
| C | 15 Dec 2025 | Madeleine | Pete, Alex, Will, Baxter |  | Revised for First Release |

# Table of Contents {#table-of-contents}

[**User Requirements Specification (URS) for Single Use Bag Bioreactor Illuminator System	1**](#user-requirements-specification-\(urs\)-for-single-use-bag-bioreactor-illuminator-system)

[**Document Revision History	1**](#document-revision-history)

[**Table of Contents	1**](#table-of-contents)

[**1 Purpose and Scope	2**](#1-purpose-and-scope)

[**2 Area of Application	3**](#2-area-of-application)

[**3 Responsibilities	3**](#3-responsibilities)

[**4 Process	4**](#4-process)

[**5 Requirements	4**](#5-requirements)

[5.1 Product Quality Critical Assessment	4](#5.1-product-quality-critical-assessment)

[5.2 General Requirements	5](#5.2-general-requirements)

[5.3 Functional Requirements	6](#5.3-functional-requirements)

[5.4 Cleaning, Sanitization, and STERILIZATION Requirements	8](#5.4-cleaning,-sanitization,-and-sterilization-requirements)

[5.5  Utility Requirements	9](#5.5-utility-requirements)

[5.6 Automation Requirements	9](#5.6-automation-requirements)

[5.7 Metrology Requirements	12](#5.7-metrology-requirements)

[5.8 Electrical Requirements	13](#5.8-electrical-requirements)

[5.9 Health, Safety, and Environment	14](#5.9-health,-safety,-and-environment)

[5.10 Maintenance Requirements	14](#5.10-maintenance-requirements)

[5.11 Flexibility	15](#5.11-flexibility)

[5.12 Scope of required documentation	15](#5.12-scope-of-required-documentation)

[**6 Abbreviations and Acronyms	17**](#6-abbreviations-and-acronyms)

[**7 Attachments and References	17**](#7-attachments-and-references)

# 1 Purpose and Scope {#1-purpose-and-scope}

The purpose of this User Requirements Specification (URS) is to specify the Illuminator System equipment requirements for unit operations in accordance with its technical requirements and applicable current local and regulatory, health, safety, and automation standards. 

The intent is to define the critical attributes on which the system design and qualification will be based. This document also details performance requirements and various design criteria for the equipment to be used in the biopharmaceutical environment under cGMP conditions. However, it is not the intent of this document to detail all mechanical, electrical and control requirements. The vendor shall supply all subordinate components necessary to meet the performance requirements established herein. 

The hardware/software embodiment that is used to project light for the purpose of controlling cell functions is referred to as "System" in this document. The system will be used in a production process for the manufacture of biopharmaceutical products (e.g. monoclonal antibody production). The system will be used for a (whatever size the customer has)\-Liter (Single Use Bag)process over a range of titers. The system will operate for seventeen (17) days. The equipment will be installed in a cGMP environment, specifically in a non-hazardous clean room up to Grade B with temperature control (15-25°C) and humidity control (30 to 60% RH, except for CNC areas).

This document describes general requirements, including cleaning, automation, metrology, electrical, health/safety/environment, and operating requirements that are typically expected.. 

# 2 Area of Application {#2-area-of-application}

This URS applies to the following systems: 

| Item | Description | Tag Number |
| :---- | :---- | :---- |
| 1 | Single User Bag Suspension Illuminator | NA |

# 3 Responsibilities {#3-responsibilities}

| Function | Purpose of Signature |
| :---- | :---- |
| Local User | I am signing on behalf of the user and confirm that this document accurately reflects the technical user requirements. |
| Project Engineering | I am signing/authorizing this document and agree that the technologies specified in this document are correct and in line with current technical concepts and that each requirement is specific and measurable for requirements affecting Product Quality. |
| Automation | I am authorizing this document and agree that the automation requirements specified in this document are correct and in line with current technical concepts. |
| Health, Safety and Environment | I am authorizing this document and agree that the requirements specified in this document are in line with current health, safety and environmental standards. |
| Quality | I am signing on behalf on the Quality Unit and confirm that the content of this document is compliant with relevant internal and external cGMP standards. |
| Hardware |  |
| Project Management |  |
| Data |  |
| Quality |  |
| R\&D |  |

# 4 Process {#4-process}

A bioreactor-vendor agnostic manufacturing of cGMP biopharmaceuticals with a scale of a 50 Liter \- 2,000 Liter (Single Use Bag).  The  process is applicable over a range of titers using light to control cell function including protein expression and molecular structuring.

# 5 Requirements {#5-requirements}

## 5.1 Product Quality Critical Assessment {#5.1-product-quality-critical-assessment}

An assessment has been performed to determine which requirements listed in this specification are critical to product quality. Where a requirement is deemed to be product quality critical, “Yes” is stated. If a requirement has been determined \- as non-critical to product quality, one of the following justifications is provided as its rationale:

(1) Health, safety, and environment critical (for personnel and/or equipment only).

(2) Business critical (productivity, operations, process efficiency).

(3) Technical requirement with indirect or no impact on product quality, patient safety, and CGMP data integrity.

(4) Non-product contact (applies to equipment that is not in direct contact with the product).

(5) Critical but quality critical requirement is covered by another requirement in this URS. Reference is provided to the critical requirement.

The justifications (1 to 5\) above are applicable for the entire document. At least one justification shall be stated per requirement.

## 5.2 General Requirements {#5.2-general-requirements}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
| GEN-001 | The illuminator system shall not impair the bioreactor system's ability to control any critical process parameters. |  |  |
|  | The illuminator system shall not raise the culture temperature by more than X °C above baseline, as measured by the native bioreactor temperature sensor. |  |  |
|  | The illuminator assembly shall not cause excessive heat transfer to the bioreactor bag or its contents under normal operating conditions. |  |  |
|  | The illuminator and all materials in contact or close proximity to the bioreactor bag shall be compatible with standard single-use bag films whatever bioreactor the customer has ~~(e.g., Sartorius, Thermo Fisher, Cytiva)~~ and shall not cause measurable degradation, discoloration, or leachable release under expected illumination conditions. |  |  |
|  | The system design shall maintain sufficient visibility to allow visual inspection of the bioreactor bag and culture during installation, operation, and removal, without requiring additional equipment or disassembly. |  |  |
|  | The illuminator system shall allow installation and removal without irreversible modifications to the bioreactor, bag, or support hardware. |  |  |
|  | The illuminator system shall maintain sterile boundaries and not compromise bioreactor asepsis during installation, operation, or removal. |  |  |
|  | System must be GMP-compliant |  |  |
|  | System must be 21 CFR Part 11 compliant |  |  |
|  | System must be cleanroom-friendly |  |  |
|  | Change control: Must have a documented process for controlled updates to hardware or software components. |  |  |
|  | ~~The illuminator system shall not occupy additional floor space in the GMP suite beyond the existing bioreactor footprint.~~ |  |  |
|  | System mounting shall be fully compatible with all normal bioreactor operations. |  |  |
|  | Comply with customer fab standardization requirements |  |  |
|  | ~~The illuminator system and optogenetic cell lines shall operate within performance specifications without requiring changes to facility lighting or room light conditions.~~ |  |  |
|  | The system shall be designed for high availability and minimal downtime, ensuring continuous operation during bioreactor operation and rapid recovery from any fault or interruption. |  |  |
|  | ~~User error robustness \- i.e. any components that need to be regularly moved/manipulated can survive being put on the floor. or dropped from some height~~ |  |  |
|  | System must be operable with cleanroom PPE (gloves, goggles, reduced dexterity) |  |  |

## 5.3 Functional Requirements {#5.3-functional-requirements}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
| FUN-001 | Photobiological safety: Must comply with IEC 62471 for LED/laser exposure limits. |  |  |
|  | The illuminator system shall be capable of illuminating in X number of colors at Y wavelengths, with a step resolution of Z between defined minimum and maximum power levels. |  |  |
|  | The system shall allow programmable illumination on/off cycles with a defined time resolution “T,” enabling precise control of opto-switch activation during cell-culture processes. |  |  |
|  | The system shall provide independent and grouped control of illumination zones, enabling spatially and temporally programmable light delivery. |  |  |
|  | The system architecture shall natively support future multi-color illumination and additional sensors, enabling independent control and monitoring of additional spectral channels without redesign of core hardware or software. |  |  |
|  | ~~The system shall be designed for field-replaceable components such that replacement of designated modules (e.g., LEDs, fans, sensors, power supplies) does not require system recalibration or re-qualification, provided approved spare parts and installation procedures are used.~~ |  |  |
|  | The device shall use electrical and data connectors that are compatible with existing process equipment (pinouts and mating standards) and are suited for GMP environments (specified IP ingress rating and sterilizable/cleanable over-molds). Any deviation requires documented justification and an adapter plan. |  |  |
|  | The maximum allowable light leakage into the reactor environment shall be defined and controlled within validated limits. |  |  |
|  | protocols for visual cell culture inspection must be aligned with optogenetic properties of cells |  |  |
|  | ability to install and use filters, port tubing, sample ports on SU bag without interference |  |  |
|  | ~~Installation should be safely accomplishable by manufacturing staff during the normal bag setup procedure.~~ |  |  |
|  | The system shall withstand transport, installation, and operational vibration without loss of function, drift, or mechanical damage, and shall maintain performance within specification during and after exposure to qualified vibration profiles. |  |  |
|  | Illuminator must deliver an average set point Fluence Rate within \+/- X % across all reactor types and all configs. |  |  |
|  | Illuminator must follow ICH Q1B guidelines |  |  |
|  | The system shall define and maintain a specification for the average light dose and the spatial distribution of light received by cells within a given reactor size and working volume. |  |  |
|  | The illuminator must deliver sufficient, stable optical output (intensity, wavelength, pulse pattern) to activate the opto-switch mechanisms used during the cell-culture process. |  |  |
|  | The device shall sustain continuous maximum-power illumination for \[X duration\] without causing (a) unacceptable effects on the bioreactor/process (thermal, optical, or EMI-related) or (b) degradation of the illuminator itself (derating, drift, faults). Compliance shall be demonstrated by defined limits on culture/bioreactor conditions and on LED stability, with full telemetry and post-test verification. |  |  |
|  | Suitable interlocks to ensure safe operation according to the bioreactor master controller |  |  |
|  | System must provide ~~predictive~~ maintenance alerts when LED output drifts toward tolerance limits before failure. |  |  |
|  | Mounting and alignment must be visually verifiable without disassembly |  |  |
|  | Illumination system must account for the optoswitch being used. |  |  |
|  | The device shall support closed-loop illumination control driven by inline (real-time) or offline (batched) optical/biological feedback—including fluorescence signals—providing validated sensor interfaces, bounded response times, and audit-ready records. |  |  |
|  | Capable of illuminating a 2,000L (?) bioreactor at standard cell densities for suitable opto-receptor activation. |  |  |

## 5.4 Cleaning, Sanitization, and STERILIZATION Requirements {#5.4-cleaning,-sanitization,-and-sterilization-requirements}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
| CLN-01 | The system shall be designed in such a way (minimum ledges, non-shedding, sealed, crevice free) that it can be easily and efficiently cleaned. | Y |  |
| CLN-03 | The system product contact surfaces shall be compatible with site-specified cleaning agent (ex: 1.0N NaOH) |  |  |
|  | The illuminator and mounting assembly shall be compatible with standard GMP cleaning practices without requiring special tools or modifications to the bag or reactor. |  |  |
|  | Material selections must not generate particulates or fibers under normal use (cleanroom classification alignment) |  |  |
|  | All exposed materials, cabling, and connectors must be chemically compatible with common cleanroom disinfectants (e.g., IPA, VHP) and resist corrosion/degradation. |  |  |
|  | The illuminator and its materials of construction shall be resistant to all approved GMP cleaning and sterilization procedures such that no cleaning cycle or disinfectant exposure causes performance degradation, calibration drift, or material damage beyond validated limits. |  |  |
|  | Cleaning procedures must be defined and compatible with customer's typical cleaning procedures. |  |  |
|  | External metallic parts/surfaces shall be compatible(chemically resistant, nonpermeable) with cleaning and sanitization agents specified (e.g. sporicidal agents, peracetic acid, 70% IPA). |  |  |
|  | The system shall be delivered clean and free of residue. (Suppliers shall be required to submit cleaning procedure documentation.) |  |  |
|  | ~~Support frames/cabinets/housings shall be made of 304, 316, or 316L stainless steel and have adjustable feet or sufficient standoffs for cleaning under all horizontal components~~ Potential replacements: “stainless steel or other material which meets cleaning requirements and do not generate particulates” “From a list of cleanroom compatible materials of construction”  |  |  |

## 5.5  Utility Requirements {#5.5-utility-requirements}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

 

## 5.6 Automation Requirements {#5.6-automation-requirements}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
|  | The control software shall allow users to create, save, and recall custom illumination profiles with time-based events and intensity ramps. |  |  |
|  | Software must support closed-loop control using inline or offline optical/biological feedback (e.g., fluorescence readout). |  |  |
|  | ~~The system shall optionally support secure remote monitoring and control via VPN or validated cloud portal.~~ |  |  |
|  | The controller shall detect, log, and report functional interruptions and recover into a safe, known state with traceable event logging. |  |  |
|  | The system shall support local offline data logging with export via removable media (USB/SD) or secure service interface. |  |  |
|  | The system shall maintain strict separation between low-level firmware control (real-time illumination, safety interlocks) and higher-level GUI/software (user interface, scheduling). Firmware must execute illumination processes autonomously without requiring host software intervention. |  |  |
|  | The illuminator system must be able to run fully offline (no cloud dependency) with local control, monitoring, and data logging capabilities. |  |  |
|  | Illumination plans must be uploadable via ~~removable media~~ and/or secure remote update, with verification and audit trail for all updates. |  |  |
|  | ~~The controller shall provide interfaces to common bioreactor or plant control systems using standard industrial communication protocols (e.g., OPC-UA, Modbus) for monitoring and/or control.~~ Capable of having data “historized” either online or physically. |  |  |
|  | ~~The system shall be designed for future bi-directional data exchange with bioreactor systems and Manufacturing Science & Technology (MSAT) data platforms.~~ |  |  |
|  | The system shall support sensing modules (e.g., OD, fluorescence, temperature) via standardized module protocol and connectors, which may use internal Prolific standards if no external standard applies. |  |  |
|  | The system must record and retain all critical process data, including illumination parameters, control steps, and sensor readings with defined logging frequency and precision for every batch run. |  |  |
|  | All software and firmware components shall implement role-based access control, audit trails, and cybersecurity measures to prevent unauthorized access, data modification, or system misuse. |  |  |
|  | The system shall execute a defined minimum number of illumination steps per run, with specified time resolution and total run length. |  |  |
|  | Prolific Machines shall not have access to customer data without explicit authorization (e.g., via written service agreement). |  |  |
|  | ~~The HMI must maintain a latency of ≤ X ms between user input and system response under normal operating conditions.~~ Potential rephrasing: Controller or HMI must maintain a minimally acceptable latency so as to not affect system user monitoring and response. |  |  |
|  | Illumination profiles must include a checksum or cryptographic signature to detect and prevent execution of corrupted or tampered plans. |  |  |
|  | ~~The system shall detect and log any external illumination exposure.~~ |  |  |
|  | Firmware, software, and hardware revisions must be tracked and documented. |  |  |
|  | Audit logs must include firmware version, configuration changes, plan uploads, user actions, time‑synchronized events and error messages. |  |  |
|  | Clock/timestamp synchronization (NTP or hardware RTC) must persist through outages to maintain traceability |  |  |
|  | Provide clear indicators to users for operational state, fault conditions, and power integrity (including prototype‑specific diagnostics). |  |  |
|  | Controller must be expandable to LTE and/or Ethernet for sites where Wi‑Fi is disallowed; all remote access must be authenticated and encrypted. |  |  |
|  | ~~HMI must provide start/stop and status indicators aligned with industry accepted  GMP color standards; if nonstandard colors are used, ensure noted in documentation~~  The system must have a clear visual indicator of current system status |  |  |
|  | The illuminator shall provide automated self-tests (at power-on and pre-run, with optional periodic online checks) that verify hardware, timing, calibration, safety interlocks, storage, and logging integrity. The device shall block or warn before starting a run if required checks fail and shall record a signed, time-stamped self-test report. |  |  |
|  | The device shall detect, classify, and report critical faults that degrade illumination performance, including but not limited to LED/driver malfunctions, optical path issues, thermal faults, and power anomalies. Faults shall be detected within a defined latency, trigger alarms and safe behavior, and be recorded with time-stamped diagnostics. |  |  |
|  | Must have alarms to alert operators when something is going wrong |  |  |
|  | The system shall include sufficient onboard memory and data storage to support all control functions, logging, and audit trail requirements for continuous operation and data retention under GMP, without data loss or overwriting. Minimum capacity and data retention shall be defined by run length, sampling rate, and regulatory record-keeping requirements. |  |  |
|  | The system shall monitor and alarm faults with the following (to be adjusted for our specific process needs)( : 1\. Network communications 2\. Process status 3\. Field instrumentation 4\. PID control loops 5\. Alarms \- (Arrival, Acknowledgement & Departing)6. Process pause and stop7. E-stop activated~~8\. Loss of instrument air~~ |  |  |
|  | The system shall generate the following electronic records: reports, parameters (including recipes),process trends, alarms, warnings, messages. |  |  |
|  | The system will be compatible with the plant operation standards and will provide controlled access based on user permission levels to system modes.   ~~The following modes of operation shall be provided:1. Automatic Mode \- The system is acquiring data,handling alarms and performing Audit Trailmanagement. The system is actively controlling the process in this mode by running the relevant process/sequences, monitoring and controlling all equipment. Semi Automatic Mode \- The system is acquiring data, handling alarms and performing Audit Trail management. Sequence step transitions are manually validated in this mode. The system is monitoring and controlling all equipment?3. Maintenance Mode \- The system is acquiring data, handling alarms and performing Audit Trail management. The HMI is used to manually control the individual actuators. This operation mode requires Engineer access privileges.~~ |  |  |
|  | Alarms shall have a configurable parameter that defines the type of alarm as absolute alarm or deviation alarm. |  |  |
|  | Alarms shall have a configurable parameter that defines alarm set points for the following monitoring levels: low-low, low, high, and high-high. |  |  |
|  | Alarms shall have a configurable parameter that defines alarm deadband to configure an alarm to turn on at one value and clear at another. |  |  |
|  | Alarm messages, acknowledgements and other events shall be able to be included in Reports. |  |  |
|  | ~~Data logging intervals shall be configurable.~~ |  |  |

## 5.7 Metrology Requirements {#5.7-metrology-requirements}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
| MET-01 | All critical process and measurement devices (ex: optical output, temperature) shall be calibratable. | Y |  |
| MET-02 | Cable-lengths and installation of measuring instruments shall ensure easy calibration (cable loops and easy removal) to allow calibration ~~at floor level~~. | N | 3 |
| MET-03 | All instruments shall be delivered calibrated (dated no more than three months before installation date). |  |  |
| MET-04 | All relevant transmitters (ex: controller, temperature sensor) shall be calibrated to NIST traceable standards.  Where possible a three- point calibration shall be performed: 0%, 50%, and 100% of the scale. |  |  |
| MET-05 | Instrument cabling and transmitters shall be designed to ensure minimal impact on signal robustness and accuracy. |  |  |
|  | Sensor calibration must be traceable and logged (pre/post) with calibration status exposed in the  ~~HMI and~~ records. |  |  |
|  | Must include a traceable calibration method for light intensity (flurence rate), uniformity, and wavelength accuracy. |  |  |
|  | ~~Device does not need to be manually user-calibrated in the field~~ Calibration is verifiable after installation. |  |  |

## 5.8 Electrical Requirements {#5.8-electrical-requirements}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
|  | Must not introduce EMI with process equipment or sensors. |  |  |
|  | The device must meet the appropriate regulatory standards for electrical safety, power quality /harmonics, power supply safety/EMC, energy efficiency, grounding/wiring, and equipment validation |  |  |
|  | System shall be compatible with site electrical utilities. |  |  |
|  | The equipment shall be furnished with all wiring, controls, motor starters, motor control devices and circuits, etc. for operation of the complete system, and shall comply with NFPA 70 “National Electrical Code” and International Electrical Code. |  |  |
|  | A lockable disconnect switch shall be included on the device to cut power to the entire device. This disconnect shall be included in the enclosure that accepts the single connection for external power. |  |  |
|  | ~~If applicable, panel enclosures shall be NEMA 4X.~~ |  |  |
|  | All engineered wiring systems and their components shall be UL listed or recognized and labeled as such or shall be certified by an approved electrical inspection facility. |  |  |

## 5.9 Health, Safety, and Environment {#5.9-health,-safety,-and-environment}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
|  | During normal operation, the illuminator system shall not exceed X dBA at 1 m distance, measured according to ISO 3744 or equivalent. |  |  |
|  | Built-in light containment shall prevent accidental light exposure to operators or nearby personnel. Maximum acceptable light leakage and exposure limits will be defined per IEC 62471 or equivalent. |  |  |
|  | The system shall have an emergency stop that stops the operation in a safe manner and is accessible to operators" |  |  |
|  | Safety and equipment protection logic shall be processed continuously, where applicable |  |  |
|  | ~~Individual subsystems must be \< 30 lbs for user-friendliness.~~ |  |  |
|  | Ergonomic design requirements (e.g., viewing angles, adjustments) for ~~HMI and console~~ regular system operation |  |  |

## 5.10 Maintenance Requirements {#5.10-maintenance-requirements}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
|  | Any required hand tools must be GMP-suitable, or system must be toolless |  |  |
|  | Wear-out components must have defined replacement intervals and visible end-of-life indicators (physical or digital) |  |  |
|  | All major components shall be tagged and fully traceable to the subsystem assembly drawings |  |  |
|  | Recommended preventive maintenance and calibration shall be identified in the technical documentation, with their suggested frequency. |  |  |
|  | ~~Support frames shall be made of 304, 316, or 316L stainless steel and have adjustable feet.~~ |  |  |
|  | Equipment shall be able to be removed from the clean area / be accessible for maintenance. |  |  |

## 5.11 Flexibility {#5.11-flexibility}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
|  | Core modules and controller should be reusable across future illuminator generations to minimize re‑validation. |  |  |
|  | The illuminator system shall demonstrate compatibility with bioreactor bags made from ~~the top 10 most common~~ customer bioreactor (whichever unit this is) single-use bag materials across major vendors, verified through fit and material interaction testing. |  |  |
|  | Product contact systems shall be capable of operating in environments as high as grade C and as low as CNC |  |  |

## 5.12 Scope of required documentation {#5.12-scope-of-required-documentation}

| ID | Requirement | Product Quality Critical (Yes/No) | Comments |
| :---- | :---- | :---- | :---- |
| DOC-01 | The standard scope of technical documentation should include: 1\.  2\. Layout installation drawings including: (a) general arrangement drawing, (b) 3D model drawing. 3\. Technical documentation and Bill of Material of all built-in elements, components, instruments and equipment. 4\. Certificates and declarations of built-in materials and equipment parts 5\. Wiring diagram 6\. Power panel general assembly drawing 7\. Electrical connections 8\.  9\. Software and hardware documentation for: (a) Software Functional Specification (FS), (b) Hardware design specification (HDS).  programming for complete operation of equipment. 10\. Spare parts list 11\. EC Declarations and certificates to all applicable EC directives (PED, Machinery Directive, EMC, etc.) 12\. Factory Calibration Certificate (original; NIST traceable) | N | 3 |
| DOC-02 | The following instruction manuals are to be included: 1\. Installation of Equipment 2\. Routine Operation of the Equipment 3\. Maintenance of the Equipment 4\. Calibration Procedures for Measuring Instruments | N | 3 |
| DOC-03 | The following quality and validation documents should be available (possibly at additional charge to customer)- 1\. Functional Requirement Specification (FRS) 2\. Software Design Specification (SDS) 3\. Hardware Design Specification (HDS) 4\. Design Qualification (DQ) 5\. Factory Acceptance Test (FAT) 6\. Site Acceptance Test (SAT) 7\. Installation Qualification (IQ) 8\. Operational Qualification (OQ) | Y |  |
| DOC-04 | Extractable test report consistent with BPOG extractable protocol. | Y |  |
| DOC-05 | Documentation package should be submitted as: 1\. one (1) set of documentation as hardcopy, At a minimum, a table of contents, tabs separating each section with the section title appearing on each tab, and page numbers corresponding to the page numbers defined within the table of contents are required. 2\. one (1) copy of other documents in PDF format on a suitable medium (e.g. CD/DVD/US) |  |  |
| DOC-06 | The FS should include the following information, as a minimum: control system hardware and software standards; system architecture; alarm list; I/O list; sequence of operations including all safety interlocks. |  |  |
| DOC-07 | The Detailed Design Spec (DDS) should include the following information, in addition to the final version of all documents included in the FS, as a minimum: I/O list, Alarm list, Interlock list, final hardware drawings, including bill of materials; detail wiring diagrams; operations and maintenance manuals for all components |  |  |
|  |  |  |  |

# 6 Abbreviations and Acronyms {#6-abbreviations-and-acronyms}

| Abbreviation / Acronym | Description |
| :---- | :---- |
| URS | User Requirement Specifications |
| cGMP | Current Good Manufacturing Practices |
| GMP | Good Manufacturing Practices |
| POL | Process Orchestration Layer |
| DNP | Discover/Negotiate/Pair technology |
| MTP | Modular Type Package |
| PEA | Process Equipment Assembly (currently as per VDI/VDE/NAMUR 2658, Sheet 1\) |
|  |  |

# 7 Attachments and References {#7-attachments-and-references}

