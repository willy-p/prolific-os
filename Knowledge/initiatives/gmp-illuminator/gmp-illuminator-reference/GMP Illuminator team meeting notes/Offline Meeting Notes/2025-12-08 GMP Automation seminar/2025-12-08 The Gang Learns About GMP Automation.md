Attendees:
[@Alex Toda](#user_mention#75436469) [@Max Huisman](#user_mention#54118042) [@Ryan Statz](#user_mention#75456523) [@Will Paton](#user_mention#54153245) [@Madeleine Allen](#user_mention#54136065)

# Notes during overview
*   S95
*   ERP (SAP)
    *   \"we used x media, y reagent, single use assemblies, etc\" → Cost tracking
*   MES
*   Level 1 = Control system layer
    *   2 distinct types with a lot of overlap but have distinct architecture

## Level 1 - A
PCS/DCS distributed
*   more common for integrated suites
*   DCS = integrated
*   more overhead
*   Software
    *   SFC = sequencial function chart (text based graphhical system admin)
*   HMI/Scada = more efficient here
*   Control processor (self contained unit) - interface with io layer and run control logic
    *   all firmware at this level, driven by software
    *   IO Layer
        *   analog inputs / outputs
        *   IO Cards
        *   can be digital too
        *   probes or devices communication
        *   

## Level 1 - B
PLCs
*   Utility / CIP skids . TFF chromotography skid or bioreactor
*   Rockwell = most common. Siemans also common.
*   Software
    *   Can still be text based but more common = ladder logic
    *   very fast io layers
*   HMI / Scada = still inefficient here
*   IO

Fieldbus protocol
*   ethernet/IP (both)
*   profibus (DCS)
*   modbus (both)
*   foundation fieldbus (DCS)

OPC UA
*   object oriented process control unified architecure
    *   protocol to pass data between systems
    *   both systems typically use this
    *   bidirectional
        *   connect to other data sources (reading probe info etc)
*   Program Hub
    *   IPV4 / IPV6
    *   Server level identification
    *   direct data to the program hub or historian
    *   batch manager / control loop
    *   passes data
    *   requires programming on \"both sides\"
        *   Unit ID, state, assignable,
        *   write into the control block to translate data
*   probably will use OPC UA for the CLC if we do that

We would have to work with CDMO or vendor partner to provide a standard interface. Working with single use vendors (sartorius, thermo etc). \"can you provide a standard protocol interface\"
*   Optogenetic software only interface


do we need to integrate with a historian of the device? or can we have our own historian?
*   options: local data collection or API
*   local
    *   some portion of hard drive, has to pass validation (how much data, what form, how long, extraction protocol)
*   API (data protocol connection, not an external device like a USB)
    *   PI integration: push data into the data lake
    *   bypasses the historian level and sends data one level higher (level 2 instead of level 1)

have our own internet connection?
*   need to decide where to come in:
    *   Corporate or manufacturing net
    *   ethernet hub of some type / ethernet drops available
        *   hub = more admin / overhead

how smart are program hubs?
*   exposed data layer
*   sequential / real time functions
    *   PID 1st and 2nd order equations for pH control

BAS (building automation system)
*   temp humidity gasses door open / close
*   incubator and freezer farms plugged into BAS
*   could hook up to DCS, typically with restricted information passed between them

is illuminator system expected to have one of the 2 architectures and specific vendors? how do we meet their expectaions?
*   not expected to have same hardware architecture of the vendors
*   UL rating, use reliable vendors, are they known, etc
*   same goes for the software
