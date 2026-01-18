## Opto-derived GMP Illuminator Requirements

**Purpose**: Align Opto \+ Hardware on the *key optical/biological parameters* we need (with units \+ definitions) so we can (a) draft a prioritized experiment plan to estimate them and (b) identify dependencies that block finalizing illuminator optical specs for end-of-2026 design freeze.

**Desired Outcome:** This is a working list of parameters that will ultimately need numbers/ranges to finalize GMP illuminator specs. The next step is to turn this into a prioritized experiment list with Opto, and to flag any blocked-by dependencies (e.g., first product / acceptable activation ranges).

**Timeline:** Ship illuminator in \~18 months (Q3 2027); we likely need specs locked within 9–12 months (by end of 2026), so we want a high-level plan for experiments needed to finalize those specs by the end of January.

**Context:** We have multiple optogenetic approaches we could support, but to ship a GMP illuminator on our timeline we need to converge on a bounded near-term operating envelope (systems, wavelengths, and light “dose/fluence rate” ranges) that we can validate and support reliably in customer facilities. 

For v1, we’re assuming a cell line will use GAVPO or Cry2 (blue light), with the specific process use case (e.g., induction of mAb expression) dependent on the first commercial product. 

The goal of this document is to identify the minimum set of opto parameters that map directly to illuminator design decisions (e.g., wall coverage, power budget, shielding, and control complexity), so we can jointly draft a prioritized experiment plan and surface any dependencies/blockers (e.g., product requirements) that prevent us from finalizing specs.

To ship on schedule, v1 requires a clearly bounded operating envelope that we can validate and support in GMP. We will likely have to make hard choices and compromises when it comes to optogenetics systems and pick a cell-line/system that is good enough on average to satisfy our customer’s most critical needs, while falling short in some aspects that would be ideal for us and/or the customer. 

The following text sets forward a list of parameters that need to be defined so that we can design an illuminator that meets our user needs. In addition to meeting our user needs, answering these questions will help with everyday engineering challenges such as, how much ambient light intrusion can our systems tolerate and how robust do our blackout systems need to be in customer facilities?

**Terms Definition**:

* **Fluence Rate** **(FR)**: Light power per unit area (uW/mm^2) integrated over all directions. This is equivalent to the commonly used intensity when light is coming from a single direction. 

**Optogenetic systems**: What are the main optogenetic systems that we expect to use?

* **N switches**

* **M promoters**

* **L cell lines**

* **K other mechanisms**

The above list makes a potentially NxMxLxK length set of systems that must be designed for. Each system has the following characteristics.  ↓↓

| Measurable Parameters |  |  |  |
| ----- | :---- | :---- | :---- |
| **Parameter** | **Why we need it** | **Design lever(s) impacted** | **Desired output format** |
| **Dark reversion time**  | Establishes how often cells need to see the illuminator.  | Will determine  the surface area coverage of our illuminators.  | Min/Max expected dark reversion time (minutes) |
| **Sensitivity (response vs irradiance/dose slope)** | Establishes how much light and how much resolution on control is needed.  | Will determine the required LED power and the complexity  of our illuminator driving circuitry.  | % of full activation/time/avg FR |
| **Activation threshold** | Establishes the minimum FR needed to activate the opto-systems.  | Will determine allowable stray light that can enter the reactor and the lowest level of control needed.  | Min FR (uW/mm^2) |
| **Saturation FR/dose** | Establishes the maximum FR we can use in our illuminators.  | Will determine  the surface area coverage of our illuminators.  | Max FR (uW/mm^2) |
| **Time to reach target activation** | Will determine the polling frequency of activate controls and quantifies the time resolution | Can delineate between real time/cloud based control.  | @optimal FR the time to full activation (minutes) |
| **Pulse response (duty cycle/frequency dependence)** | Optosystems may respond differently to pulsatile illumination. This parameter affects how quickly a setpoint is reached for a given reactor/illuminator embodiment | Will determine  the surface area coverage of our illuminators.  | Time to full activation as a function of duty cycle for the optimal average FR |
| **Group Variance in an Experiment (within experiment noise)** | In a single experiment we need to know the width of the activation histogram @ the optimal FR to bound how precise our illumination controls need to be.  | Determines illuminator surface area coverage, power requirements,  mechanical, and controls design | In a Deoxys experiment @ optimal FR, what is the FWHM  of the activation distribution. Units are in % of full activation.  |
| **Standard Error of Experiments (run-run repeatability/robustness)** | Over many experiments we need to know the spread in the average activation @ the optimal FR to bound how precise our illumination controls need to be.  | Determines illuminator surface area coverage, power requirements,  mechanical, and controls design | Standard Error of the Mean of the activation histogram of N repeated trials at the optimal FR.  Units are in % of full activation.   |
| **Design Parameters** |  |  |  |
| **Parameter** | **Why we need it** | **Design lever(s) impacted** | **Desired output format** |
| **Acceptable unintended activation (ambient light tolerance)** | See activation threshold.  | Will determine allowable stray light that can enter the reactor and the lowest level of control needed.  | Mean and variance of the dark expression of opto-system (Titer?)  |
| **Required activation range (dynamic range used)** | If implementing activate controls, we will need to know the min/max FR and resolution | Determines illuminator surface area coverage, power requirements,  mechanical, and controls design | Acceptable % min. and max. activation for use cases (e.g. 2% acceptable background activation; 95% total activation acceptable)  |
| **Acceptable variability in activation** | Establishes how much variability in illumination conditions opto-systems can tolerate.  | Hardware/electronic/and reactor constraints will limit how precisely and accurately we can deliver light.  | See group variance and  standard error of experiment means |

The optogenetic systems will also influence the number of wavelengths that we support. Many wavelengths will likely be common between systems so this will not translate to an NxMxLXK list of options. ↓↓

**Wavelengths (nm)**: What are the primary wavelengths that we expect to use? We can likely only support one wavelength per color. All examples below are suggestions. 

* **Central Wavelength**

  * Blue: 465, 450,480

  * Red: 620, 630, 640

  * IR: 780, 805, 820

* **Bandwidth**

  * Blue: \+/- 15 nm

  * Red: \+/- 15 nm

  * IR: \+/- 5 nm

    

The last piece of the puzzle is how much control do we desire. 

**Desired Control**: Will we largely be dealing with long dark reversion, highly sensitive switches for the next 2 years? If so, more complex temporal, wavelength, and power control schemes are probably not necessary. If we will need more control:

* **Dynamic multiplexing** (Zack’s intensity based multiplexing)

* **Color Multiplexing**

* **Feedback enabled illumination**

* **Etc**..

**Next steps:** 

If you’re aligned, let’s do a 60–90 min working session in January to draft a high-level plan to answer these questions and identify key dependencies.

Opto will bring:

* Current best-estimate parameter ranges (even if confidence is low)

* \[What other info would you need to make this productive?\] 

  * List of proposed experiments to answer these questions

Hardware will bring:

* Candidate designs

* Ballpark amount of power that we can deliver

* Simulations?

