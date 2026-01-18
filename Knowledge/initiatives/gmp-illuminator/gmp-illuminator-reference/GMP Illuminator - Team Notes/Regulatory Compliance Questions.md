### Compliance Requirements
*   System must be GMP-compliant
    *   Any required hand tools must be GMP-suitable, or system must be toolless
    *     
        
*   System must be 21 CFR Part 11 compliant
    *   Audit logs must include firmware version, configuration changes, plan uploads, user actions, time‑synchronized events and error message.
*   System must be cleanroom-friendly
    *   Material selections must not generate particulates or fibers under normal use (cleanroom classification alignment)
*   Firmware, software, and hardware revisions must be tracked and documented.
*   Sensor calibration must be traceable and logged (pre/post) with calibration status exposed in the HMI and records.
*   Record of traceability documentation from vendors, components, subsystems etc.
*   component traceability and subvendor quality systems
*   Change control: Must have a documented process for controlled updates to hardware or software components.
*   Assembly and packaging in clean environment to not introduce contamination into cleanroom
*   Clock/timestamp synchronization (NTP or hardware RTC) must persist through outages to maintain traceability

### GMP Compliance
*   The system must comply with applicable GMP regulations and standards.
*   The system shall require only GMP-suitable hand tools for operation, or the system shall be designed to be toolless.
*   The system shall maintain and provide documentation for the traceability of all vendors, components, and subsystems.
    *   The system must ensure all critical component suppliers follow quality management systems suitable for GMP manufacturing.
*   A change control process for all updates to hardware, firmware or software components shall be documented and implemented.
    *   All firmware, software, and hardware revisions shall be tracked and documented.

### Electronic Records and Audit Trail
*   The system must comply with 21 CFR Part 11 for electronic records and signatures.
    *   The system shall generate audit logs capturing the following: firmware version, configuration changes, plan uploads, user actions, time-synchronized events, and error messages.
    *   The system shall log sensor calibration events, capturing pre- and post-calibration status, and display calibration status in the HMI and associated records.
    *   The system shall maintain clock and timestamp synchronization that persists through outages to ensure record traceability.

### Cleanroom Suitability
*   The system shall be suitable for operation in cleanroom environments.
    *   All system assembly and packaging shall occur in a clean environment to prevent contamination introduction into a cleanroom.
    *   Material certifications and operational protocols shall explicitly prevent introduction of particulates, fibers, or contaminants.
    *   The system’s materials must not generate particulates or fibers under normal use and must align with cleanroom classification requirements.

### Questions:
*   What category of GMP does this device fall under? (medical device or other?)
*   Which regulations may apply to our device ? Any specifics for the illumination subsystem?
    *   we have identified the 21 CFR 11 and 211 requirements for electronics and data but there could be other things we don't yet know.
*   when is the best time to engage regulatory experts in these specific domains

Advice category
*   where do first-time teams usually get wrong about the compliance element of development?

#
