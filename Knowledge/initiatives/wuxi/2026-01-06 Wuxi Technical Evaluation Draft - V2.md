# Optogenetic Control for Complex Biologics

*A Small-Scale Technical Evaluation with WuXi Biologics*

### **1\. Executive Summary**

WuXi Biologics and Prolific Machines propose a small-scale technical evaluation to assess whether optogenetic control of gene expression can deliver reliable, quantitative improvements in the manufacturability of mAbs and complex biologics that have challenged conventional CHO-based expression systems.

This Proof of Value (PoV) is positioned for initial deployment within WuXi’s existing platform for specific complex/challenging projects, with the longer-term option to evolve into a platform extension should technical value and operational compatibility be demonstrated. Importantly, this PoV is not intended to replace or disrupt WuXi’s core platform technologies. Instead, it evaluates optogenetics as a modular, selectively deployable control layer that is fully compatible with WuXi’s proprietary cell lines and standard CLD workflows, as well as WuXi’s scale-out, single-use manufacturing strategy.

In fact, WuXi’s scale-out approach is particularly well suited to optogenetic enablement: illumination elements can be installed external to the single use bag on existing single-use bioreactors, which remain fully compatible with conventional cell lines, and illumination elements can be entirely disabled during standard manufacturing runs. As such, optogenetic capability can be added without altering baseline platform behavior.

Successful completion of this PoV would enable:

- Tactical, program-level deployment for high-value, high-difficulty assets  
- An informed yes/no decision on further technical investment  
- Independent technical validation to support potential strategic investment discussions with Prolific Machines

Accordingly, this PoV will focus on:

- A technical demonstration of the value of the technology at small scale (tube spin)  
- Demonstrating ≥1.5x titer improvement at the clone level versus a CMV baseline for difficult-to-produce proteins  
- Achieving successful expression \>0.5 g/L where historical performance was \<0.2 g/L  
- Validating that optogenetic control can enable accelerated bispecific CLD timelines and/or improved performance 

The results will allow WuXi to determine whether, where, and how optogenetic control could be selectively integrated into its broader platform for complex biologics.

### **2\. Strategic Rationale for WuXi**

Optogenetics introduces a new, orthogonal control dimension into cell line development, bioprocessing, and manufacturing processes: dynamic, reversible, and tunable control of gene expression using light. This technology allows direct control over what matters most, the target protein(s), during these processes.

From WuXi’s perspective, this capability enables:

- Selective deployment for particularly challenging or high-risk programs  
- A potential foundation for future platform differentiation, including:  
  - Complex and multispecific biologics  
  - PTM control and product quality tuning  
  - Accelerated or de-risked CLD workflows for bispecific and multispecific modalities  
- Reinforcement of WuXi’s positioning as a leader in advanced CRO/CDO services

From an operational standpoint, higher yields also translate directly into manufacturing flexibility and cost efficiency. For example, at \~2x yield, a 6 kL single-use bioreactor could achieve output comparable to a 12 kL stainless-steel system with conventional cell lines, enabling WuXi’s scale-out strategy to be even more competitive to conventional large scale stainless steel manufacturing and improving return on invested capital. Likewise, the ability to match or improve product quality attributes enables WuXi to generate desired cell lines and appropriate processes for manufacturing and delivery of customer projects.

### 

### **3\. Scope Overview**

The PoV consists of two parallel, independent workstreams, enabling WuXi to assess both immediate technical value and future strategic optionality.

## Workstream A: Difficult-to-Produce Proteins

### **Objective**

Demonstrate robust, quantitative improvements in expression performance for molecules that have historically underperformed in CHO under conventional CMV-driven expression, using a controlled, head-to-head comparison between standard and optogenetically enabled cell lines.

### **Molecule Selection**

Two to four molecules will be nominated by WuXi, comprising:

- One to two client-derived molecules with known expression challenges  
- One to two internal WuXi R\&D stress-tested molecules constructs

Target molecules should ideally exhibit one or more of the following characteristics:

- Toxicity that has led to CLD failure or  Historically failed or shelved CHO programs  
- Challenging expression profiles leading to yields \<0.2g/L  
- Challenging expression profiles (e.g. folding, secretion, or yieldstability limitations)  
- Fc-containing or tagged molecules preferred for ease of analytics, but not required

This selection strategy balances commercial relevance (client molecules) with platform benchmarking (WuXi internal constructs).

### **Experimental Design and Cell Line Strategy**

For each target molecule, two cell lines will be generated to enable a controlled, head-to-head comparison:

1. **CMV Reference:** a conventional CMV-driven cell line serving as the reference  
2. **Optogenetic:** optogenetic cell line enabling light-controlled expression.

The workstream will consist of two phases: 

* Phase 1: Vector & Pool generation, with read-out at the pool level   
* Phase 2: Clonal isolation, with read out at the clone level 

In between the two phases there will be a Go/No-Go meeting. Success criteria to continue from phase 1 to phase 2 are a \>1.5x improvement in titer or on-target product of the optogenetic pool over the CMV pool for at least one moleculeof the pools. 

Cell lines will be developed in the CHOZN® Elite GS-KO background to ensure comparability.

- The CMV reference line will be generated using the wild-type CHOZN® Elite GS-KO host.  
- The optogenetic lines will be generated using Prolific’s optogenetically enabled CHOZN® Elite GS-KO host, in which the optogenetic transactivator is stably integrated.

This design isolates the impact of optogenetic control while maintaining consistency in host background, selection system, and CLD workflow across conditions, consistent with prior Prolific evaluation agreements.

### **Success Criteria (per molecule)**

A molecule will be considered successful if **either** of the following criteria is met at the clone level:

- ≥2x titer improvement for the Prolific cell line relative to the CMV control, or  
- Successful expression \>0.5 g/L where historical performance was \<0.2 g/L

While Prolific expects to meet the success criteria across all molecules, partial success across a subset of targets is considered informative and valuable, supporting selective deployment for high-risk or high-value programs.

## Workstream B: Bispecific / Multispecific Antibodies

### **Objective**

Evaluate whether optogenetic control of subunit expression can improve manufacturability of bispecific or multispecific antibodies by enabling improved control over chain pairing, reducing mispaired species, and potentially accelerating CLD timelines by approximately 4 weeks.

### **Molecule Selection**

One to two bispecific or multispecific antibody formats will be nominated by WuXi, ideally exhibiting:

- Known chain pairing, assembly, or stoichiometry challenges  
- Extended or complex CLD timelines relative to standard IgGs  
- Strategic relevance to WuXi’s growing multispecific portfolio

Preferred (but not required) characteristics include:

- Asymmetric chain architectures  
- Prior evidence of homodimer formation, chain imbalance, or purification complexity

### **Experimental Design**

For each selected molecule, two cell line conditions will be generated in the **CHOZN® Elite GS-KO background**:

1. **Control:** conventional CMV-driven expression of all chains  
2. **Prolific:** optogenetic control applied to one or more chains to enable temporal, quantitative tuning of expression

Optogenetic control parameters will be selected based on the specific pairing or assembly challenge under investigation.

The workstream will consist of two phases: 

* Phase 1: Vector & Pool generation, with read-out at the pool level   
* Phase 2: Clonal isolation, with read out at the clone level 

In between the two phases there will be a Go/No-Go meeting. Success criteria to continue from phase 1 to phase 2 is a demonstration at the pool level of the feasibility of a significant shift of the stoichiometry. 

### **Success Criteria**

Success will be evaluated based on one or more of the following outcomes:

- Maximizing correct chain pairing by reducing the levels of LC mispairs \>50% relative to CMV control  
- Reduction in levels of mispaired or incomplete species by 25-50%, demonstrating streamlined and \>25% improved purification yield(s)  
- Comparable or improved titer relative to CMV control  
- Evidence of CLD acceleration potential (e.g. faster identification of acceptable clones)

### 

### **4\. Technical Approach**

## Workstream A: Difficult-to-Produce Proteins

#### **WuXi Responsibilities**

WuXi will provide the following inputs:

- Protein and signal peptide sequences for selected target molecules  
- DNA sequences for gene expression constructs to be cloned into Prolific’s plasmid backbone, including coding sequences, signal peptide, and any constitutive promoters or regulatory elements required for control constructs  
- Historical small scale (shake flask, tube-spin, or Ambr) fed-batch performance data for each molecule in WuXi systems, where available, including:  
  - Titer  
  - VCD   
  - Viability  
  - Productivity  
  - Production scale  
  - Culture duration  
  - Temperature shift strategy  
  - Aggregation data  
- Reference protein standard to support analytics

WuXi involvement beyond data provision will be limited to periodic technical review meetings.

#### **Prolific Machines Responsibilities**

Prolific will execute all experimental work, including:

PHASE 1:   
**Vector Construction and Pool Generation**

- Cloning of expression constructs for each target under either CMV or optogenetic promoter control in Prolific’s plasmid backbone  
- Two plasmids per molecule (CMV and Opto), for a total of 4–8 plasmids  
- Stable integration via transposon into:  
  - Unmodified CHOZN® Elite GS-KO cells (CMV condition)  
  - Optogenetic CHOZN® Elite GS-KO chassis (Opto condition)  
- Generation of 4–8 stable pools using Prolific’s established selection protocols

**Pool-Level Evaluation**

- Fed-batch production runs (24-deep well plate or equivalent)  
- Dark versus light comparison (3-4 conditions per pool)  
- Culture duration: 7-14 days

PHASE 2:   
**Clonal Selection and Screening**

- Parallel clonal expansion from all (4-6) pools using Beacon  
- Select and screening based on:  
  - Pool performance  
  - Doubling time  
  - TargetAntibody production under light versus dark conditions (on-chip)  
- Selection of the top 10 clones per pool  
- Total scope:  
  - \~2,000 clones analyzed  
  - \~40–80 clones expanded

**Clone-Level Evaluation**

- First clone-level data set (top 10 clones per pool):  
  - Titer and aggregation data  
  - 7-14 day fed-batch runs  
  - 2-3 light conditions  
- Final clone-level data set (top 2 clones per pool; approximately 10 clones total):  
  - Titer and aggregation data  
  - Demonstration of growth–production separation  
  - Demonstration of light-tuning impact on titer (4-6 light conditions)  
- Copy number analysis of antibody expression cassette for final clones

### **Analytics and Data Outputs**

- Titer via Protein A HPLC (if suitable for chosen molecule; alternative assays to be discussed if necessary)  
- Aggregation via SEC  
- Viable cell density and viability at a minimum of four timepoints per run

## Workstream B: Bispecific / Multispecific Antibodies

#### **WuXi Responsibilities**

WuXi will provide the following inputs to support execution of this workstream:

- Protein and signal peptide sequences and molecular architecture information for the selected bispecific or multispecific formats  
- DNA sequences for bispecific expression constructs (including signal peptides), where available, to be cloned into Prolific’s plasmid backbone  
- Historical small scale (shake flask, tube-spin, or Ambr) performance data, if available, including:  
  - Titer  
  - CLD timelines  
  - Known pairing, mispairing, or assembly challenges  
  - Relevant aggregation or quality data

WuXi involvement beyond data provision will be limited to periodic technical review meetings.

#### **Prolific Machines Responsibilities**

Prolific will execute all experimental work, including:

PHASE 1:   
**Vector Construction and Pool Generation**

- Cloning of individual chains into Prolific’s plasmid backbones  
- Construction of multiple expression configurations, including:  
  - Fully CMV-driven control designs  
  - Hybrid CMV / optogenetic designs  
  - Predominantly optogenetic designs for selected chains  
- Generation of approximately 6–8 stable pools per molecule using Prolific’s established selection protocols

**Pool-Level Evaluation \- chain ratio tunability**

- Fed-batch production runs in 24-deep well plates or equivalent  
- Dark versus light (2-3 conditions) comparisons under defined illumination regimes to assess tunability of chain ratio  
- Culture duration: 7-14 days

PHASE 2:   
**Clonal Selection and Screening \- titer**

- Parallel clonal expansion from selected pools using Beacon  
- Screening based on:  
  - Growth characteristics  
  - Production performance under defined light versus dark conditions  
  - Ability to shift chain pairing and product quality attributes  
- Selection of top clones per pool for further evaluation

**Clone-Level Evaluation**

- Demonstrate clonal selection based on titer   
- Clone-level fed-batch production runs (7-14 days)  
- Assessment of:  
  - Titer  
  - Assembly and pairing outcomes  
  - Impact of light tuning on both product quality and productivity

### **Analytics and Data Outputs**

- Titer via Protein A HPLC  
- Aggregation via SEC  
- Chain pairing and assembly analysis via LC-MS (e.g. intact mass)  
- Viable cell density and viability at a minimum of four timepoints per run

###  

### **5\. Deliverables**

#### **Workstream A: Difficult-to-Produce Proteins**

Prolific will deliver a comprehensive data package for each target molecule, including:

- Head-to-head comparison of Prolific optogenetic and CMV control cell lines at the pool and clone levels  
- Clone-level titer distributions for all evaluated pools  
- Titer and monomeraggregation data (SEC) for:  
  - Top 10 clones per pool (initial evaluation)  
  - Top 2 clones per pool (final evaluation)  
- Demonstration of separation of growth and production for final clones  
- Quantitative assessment of the impact of light tuning on productivity for final clones  
- Copy number analysis of the antibody expression cassette for final clones  
- Summary of key findings and interpretation relative to predefined success criteria

All results will be compiled into a joint WuXi–Prolific technical evaluation report, including clear recommendations regarding the suitability of optogenetic control for selective deployment in difficult-to-produce programs.

#### **Workstream B: Bispecific / Multispecific Antibodies**

Prolific will deliver a structured technical data package for each evaluated bispecific or multispecific format, including:

- Pool-level comparison of CMV control and optogenetic expression configurations under defined illumination regimes  
- Quantitative assessment of subunit stoichiometry and assembly outcomes, including:  
  - Fraction of correctly assembled species  
  - Levels of homodimeric and mispaired species  
- Titer and aggregation data (SEC) for all evaluated pools and selected clones  
- Clone-level confirmation of assembly control and robustness, where applicable  
- Demonstration of light-dependent tunability of subunit expression and pairing outcomes  
- Summary of implications for manufacturability and CLD efficiency

Results will be consolidated into a joint technical evaluation report, including an assessment of whether optogenetic subunit control warrants further evaluation, follow-on studies, or integration into WuXi’s bispecific CLD workflows.

###  

### 

### **6\. Commercial and IP Framework**

- Fixed-fee technical evaluation  
- Joint ownership of resulting data, Prolific gets the right to publish anonymized data and use data for its platform development, WuXi gets the right to use the data for internal analysis, benchmarking, research and decision making  
- Prolific retains all optogenetics-related platform IP  
- No exclusivity, lock-in, or strategic obligation implied  
- Openness to enabling WuXi’s preferred bioreactor vendors and addressing concerns related to hardware or process dependency

### **7\. Potential Next Steps**

Subject to outcomes, WuXi may elect to pursue:

- Larger-scale (e.g. 50 L) pilot demonstration  
- In-WuXi validation for select programs  
- Expanded evaluation into PTM control or multispecific platforms  
- Program-specific selective deployment discussions

### **8\. Summary**

This Proof of Value is designed to provide WuXi with:

- Clear, quantitative technical signal  
- Minimal operational disruption  
- A defensible internal narrative  
- A low-risk path to future differentiation in complex biologics

We believe this approach aligns strongly with WuXi’s platform philosophy and strategic priorities.