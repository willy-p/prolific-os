**Agenda:**
**20min** - review technical progress updates
**10min** - review handoffs & previous action items
**5min** - today's _special_ topics
*       *   [SubCon Data Deck](https://docs.google.com/presentation/d/1EctZdB3rG7VwWSSYWVQhMSWbKa26THjFfYlvtHZK3C4/edit?usp=drive_link)
    *   

**Announcements:**
*   For all HappiLabs purchases related to the `Radiant` project, please use Project code `GATES097042 (Radiant)`  to ensure that they are reported correctly. Thanks!

**Progress updates - Epcoritamab:**
Cell line generation - molbio/molecular cloning [@Noreen Wauford](#user_mention#75485130)
*   All handed off, no further cloning planned for now
*   [@Noreen Wauford](#user_mention#75485130) ask for higher concentration in final plasmid preps. Request maxiprep instead of midiprep (lead times TBD)
Cell line generation - TC [@Amritha Menon](#user_mention#81541323)
*   pools still in recovery. clean!
*   currently 24 pools - at most 48 samples for anchem.
    *   Ian's strategy: take more interesting samples, thaw, run them through method strategy. once higher certainty, then run more samples
    *   just need ranking at first

Project management [@Will Paton](#user_mention#54153245) [@Shahram Misaghi](#user_mention#81541324)

IP/Patent [@Shahram Misaghi](#user_mention#81541324) [@Victor Jones](#user_mention#54153244)

**Progress updates - Radiant:**
Cell line generation - molbio/molecular cloning [@Noreen Wauford](#user_mention#75485130)
*   Parts ordered- compatible with both GAVPO and Cry2 designs
*   Based on suggestion from Shahram- planning to clone "drop in" backbones so the CDS can be inserted as a single-insert Golden Gate (not a blocker- parts are compatible with existing GG pipeline)
*   Waiting on Raspberry pool results to decide on GAVPO vs Cry2
    *   [@Amritha Menon](#user_mention#81541323) any thoughts to add?
    *   
*   [Link to vector progress tracking sheet](https://docs.google.com/spreadsheets/d/1gweCvD61SGA59hrXS2nE-kVk0LQ1EVY_bw3nVsS7NEA/edit?gid=0#gid=0)
*   Approximate timing:
    *   twist fragment received in 1 week
    *   2-3 weeks of cloning
    *   

Cell line generation - TC [@Amritha Menon](#user_mention#81541323)

Project management [@Will Paton](#user_mention#54153245) [@Shahram Misaghi](#user_mention#81541324)
[@Will Paton](#user_mention#54153245) circle back next week with [@Noreen Wauford](#user_mention#75485130) [@Amritha Menon](#user_mention#81541323) [@Irfan Tahir](#user_mention#75479285) re: resource needs for Epcoritamab FB run (once fragments get here - [@Noreen Wauford](#user_mention#75485130) make timeline estimates for cloning)

Commercial [@Vidar van der Meijden](#user_mention#54091421) [@Sara Kemppainen](#user_mention#75390516)

IP/Patent [@Shahram Misaghi](#user_mention#81541324) [@Victor Jones](#user_mention#54153244)

1- I believe we need to request some reference materials from them for each of these molecules from them to run SDS-PAGE on pools with and without light induction to confirm changes in subunits.
[@Shahram Misaghi](#user_mention#81541324) draft request for Radiant on reference material aliquots (volume, concentration, any other info) and whether multiple freeze-thaws is ok.
Shahram: Concentrations at 0.1-1 mg/ml should suffice. If we have 100-200 ul that would be helpful. Will the sample have issues for SDS-PAGE if it is freeze thawed a couple of times. If so, it would be good to have them aliquoted in 10 uL samples by Radiant, otherwise, we can do it at Prolific. How much do you run for SDS-PAGE normally?
2- Reference materials need to be aliquoted and it would be good if they can do it at their end so that we don't have to freeze thaw but we can do it as well! Let's discuss.
3- We need to get the SDS-PAGE protocol from them to make sure we have all the materials needed in house.
[@Will Paton](#user_mention#54153245) to include this in email to Radiant
4- Very unlikely to happen but it would be great to get the AnChem input on what assay(s) will be able to tell us what would be a more throughput assay.
Goal: high-throughput assay to screen multabody-producing clones (for next phase of project)
with current infrastructure: multi-affinity assay (Fc, Fab, ferritin) - these exist in 96-well format
start with A280 then go to SDS
can we outsource SDS? yes but >$100/sample
Ian has high-throughput system on Capex budget for 2026, contingent on fundraise

1. Based on their prioritization of titer as most important I think we should consider making a single-vector design for the trispecific multibodies (allows us to use medium GS to boost copy number)
    1. implications:
        1. potentially challenging cloning - would find out during last step
            1. can do two-vector approach in parallel
        2. adds a pool
            1. Amritha likes having a single vector. often easier to work with
    2. **Decision:** move ahead with single-vector design for Trispecific MB A (Du)
2. (Minor point)- one of their GS linker designs (in Du025 Fab2-HFerr- I highlighted the extra residue) has one AA inserted compared to the others, I think it would be nice to email them and check that this is intentional
3. 

**List of handoffs over the next ~2 weeks:**

**Previous actions:**
*   **Action:** [@Amritha Menon](#user_mention#81541323) to follow up with Sasha re: pool data with 50/50 ActiPro/FB media
    *   Sasha shared results - we will try to follow protocol as closely as possible (her data had high seeding densities >3M c/mL, so we likely won't have enough cells to do this.
    *   We may not have enough media with trace elements in time - [@Shahram Misaghi](#user_mention#81541324) meeting today regarding media eval.
*   **Action:** read [https://docs.google.com/document/d/1k4TAkQl6v9JVhxxkpoyBT9eKUQSKIAzTeMNpFzEcG20/edit?tab=t.0#heading=h.qzsrn1ff1rm0](https://docs.google.com/document/d/1k4TAkQl6v9JVhxxkpoyBT9eKUQSKIAzTeMNpFzEcG20/edit?tab=t.0#heading=h.qzsrn1ff1rm0)
    *   titer ~~and~~ ~~SEC~~ should be ready by end of Jan, but chain pairing method will not
        *   No SEC method development has been planned
        *   decision: use existing methods on first samples. if those methods don't work well, we can discuss whether resourcing will be needed
*   **Action** [@Will Paton](#user_mention#54153245) talk to Ian:
    *   how much material they need to develop the chain pairing method
        *   when can this method development happen?
    *   what is turnaround time for titer and SEC for first samples of epco?
    *   how many samples can they handle?
> \>250 ug of material is to be handed over at a concentration of >1mg/mL in a suitable buffer
*   Evelyn would do concentration -- we have to make sure to culture at sufficient scale to produce enough material

**Today's special topic(s):**
[@Noreen Wauford](#user_mention#75485130)
*   Single vector version of trispecific MBs could yield higher titers- is this worth trying and would it require additional conversation with Radiant?

**Decisions:**
We will move ahead with single-vector design for Trispecific MB A (Du) in order to try to get higher titers (in convo yesterday, learned that high titers is priority for Radiant as well as this molecule)

**Actions (in meeting notes):**
*   [@Will Paton](#user_mention#54153245) [@Amritha Menon](#user_mention#81541323) [@Shahram Misaghi](#user_mention#81541324) [@Noreen Wauford](#user_mention#75485130) please take 15-30 min to fill out the [SubCon Risk Register](https://docs.google.com/spreadsheets/d/1tLT_jhOgBNq5q0PBF44nc2JllqMt5sCv7tEmk_Or5dk/edit?gid=1216737423#gid=1216737423) prior to our next meeting
*   [@Will Paton](#user_mention#54153245) follow up with Radiant via email:
    *   Share [sequence doc](https://docs.google.com/document/d/1EZavA3ZRrmYjtrobi_KTopkuGfpucJd18qMOYsDgrLE/edit?tab=t.0) and ask for annotations
        *   Please double check with Radiant about additional AA in GSLinker for Du025 Fab2-HFerr (additional AA highlighted in red on [Shaham's sheet](https://docs.google.com/document/d/1EZavA3ZRrmYjtrobi_KTopkuGfpucJd18qMOYsDgrLE/edit?tab=t.0))
    *   Request SDS-PAGE protocol
    *   Share request for reference material
        *   Concentrations at 0.1-1 mg/ml should suffice. If we have 100-200 ul that would be helpful. Will the sample have issues for SDS-PAGE if it is freeze thawed a couple of times. If so, it would be good to have them aliquoted in 10 uL samples by Radiant, otherwise, we can do it at Prolific. How much do you run for SDS-PAGE normally?
    *   Share decision to move ahead with single-vector design for Trispecific MB A (Du)
*   [@Will Paton](#user_mention#54153245) circle back next week with [@Noreen Wauford](#user_mention#75485130) [@Amritha Menon](#user_mention#81541323) [@Irfan Tahir](#user_mention#75479285) re: resource needs for Epcoritamab FB run
    *   (once fragments get here - [@Noreen Wauford](#user_mention#75485130) make timeline estimates for cloning)
*   [@Noreen Wauford](#user_mention#75485130) ask for higher concentration in final plasmid preps. Request maxiprep instead of midiprep (lead times TBD)

**Parking lot topics:**