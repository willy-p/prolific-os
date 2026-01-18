![](https://t36217409.p.clickup-attachments.com/t36217409/8d76e7b3-750f-4e64-819a-6a459a36adb1/A8974F99-C897-4709-91F0-6EB8D97F4022.jpg)

*   ERP: enterprise resource planning
    *   cost tracking
*   MES: mfg execution system
    *   more common in biopharma these days. mostly for integrated mfg suite
*   PCS: process control system / DCS: distributed control system
    *   more common for integrated suites
    *   vendors: emerson, honeywell, schneider
    *   usually cloud or local server
*   PLC: programmable logic conroller
    *   similar architecture to DCS
    *   typically point-of-use, attached to utility skids
    *   can also be on a bioreactor. less overhead on PLC vs DCS
    *   most common: Rockwell, Siemens

# Granola Notes
### Control System Architecture Overview
*   Two main types: DCS (Distributed Control System) vs PLC (Programmable Logic Controller)
    *   DCS: Integrated manufacturing suites, vendors like Emerson/Honeywell
        *   Better for multiple bioreactors (7+ reactors typical)
        *   More integrated software layers from ground up
        *   Uses Sequential Function Charts (SFC) for batch control
    *   PLC: Point-of-use systems, Rockwell/Siemens dominant
        *   Individual skids (TFF, chromatography, single bioreactor)
        *   Separate applications, more overhead to integrate
        *   Ladder logic programming, faster I/O (microsecond level)
*   Both provide end-to-end solutions from control processors down to I/O cards
*   All major vendors use standardized protocols (Ethernet IP, Profibus, Foundation Fieldbus)
### Integration Strategy for Prolific Systems
*   Recommended approach: Start standalone, avoid early integration complexity
    *   Local installation like ATF systems initially
    *   Operator manually controls when to start/stop illumination
    *   Only requires SOP documentation, maximum flexibility
*   Integration pathway via OPC UA protocol
    *   Software-based, runs over Ethernet (not hardware bus protocols)
    *   Bi-directional communication standard across all modern systems
    *   Interfaces at program hub level, not control processor level
*   Customer expectations: Reliable vendors, UL-rated electrical panels, standard components
    *   Don’t need same hardware architecture as major automation vendors
    *   Focus on functionality and standard performance criteria
### Data Management & Compliance
*   Two compliant data collection options:
    1. Local data storage with validation requirements
        *   Must quantify storage duration, format, extraction methods
    2. External data lake connection (preferred modern approach)
        *   API to PI historian or cloud data lake
        *   Bypasses local historian complexity
*   Internet connectivity generally acceptable in modern GMP facilities
    *   Must pass cybersecurity validation process
    *   Ethernet drops typically available, avoid USB connections
*   Remote troubleshooting capability seen as advantage vs. liability
### Technical Implementation Considerations
*   OPC UA implementation: Software-only, no special hardware ICs needed
    *   Existing OPC server experience with capacitance probes applicable
    *   RJ45 ethernet connection to microcontroller sufficient
*   Control logic decisions:
    *   Expose controller with state machine directly vs. separate computer for OPC UA
    *   Need start/stop/hold commands from master controller
    *   Consider fault recovery states (resume vs. restart illumination)
*   Safety systems remain external electrical interlocks, not software-based
### Next Steps
*   Ryan to define system architecture, then reverse presentation for Alex’s feedback
*   Consider low-hanging fruit OPC UA implementation with Sartorius bioreactor
*   Evaluate what data formats match regulatory expectations
*   Engage validation company for software validation package when ready
*   Focus on maintenance-friendly electrical panel design with logical arrangement
