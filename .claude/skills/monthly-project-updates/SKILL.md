---
name: monthly-project-updates
description: Creates executive-level monthly project updates in markdown format suitable for slide deck conversion. Use when the user asks for a monthly update, project status report, executive summary, or needs to prepare slides for leadership. Reviews project notes, experiments, risks, and decisions to produce a standardized update with key wins, risks, milestones, timeline, and deliverables.
---

# Monthly Project Updates

Create high-signal executive updates from project notes.

## Quick Start

1. Gather inputs: project notes, meeting notes, experiment logs, last month's update
2. Copy the workflow checklist below and track progress
3. Use the template in [references/template.md](references/template.md)
4. See [references/example.md](references/example.md) for a complete example

## Workflow Checklist

Copy this and check off as you progress:

```
Monthly Update Progress:
- [ ] Step 1: Collect inputs (notes, experiments, risks, decisions)
- [ ] Step 2: Draft suggested content per slide
- [ ] Step 3: Populate markdown template
- [ ] Step 4: Run sanity checks
- [ ] Step 5: Save output file to project's monthly-updates folder
- [ ] Step 6: Draft Slack message for #project-updates channel
```

## Step 1: Collect Inputs

Identify from project notes:
- Reporting month and project name
- Company/customer objectives supported
- Current workstreams
- Experiments and results this month
- Risks introduced/changed
- Decisions made/needed

## Step 2: Draft Suggested Content

For each slide, propose:
- **Include**: bullets, charts, tables that change decisions or trajectory
- **Omit**: details that don't affect decisions
- **Narrative**: 1–2 sentence takeaway for execs

## Step 3: Populate Template

Use template from [references/template.md](references/template.md).

Key principles:
- Clear bullets, short tables
- Strong "so what" statements tied to milestones
- For experimental results: setup → result → interpretation → source reference

## Step 4: Sanity Checks

Verify before finalizing:
- Every risk has owner (if known) and mitigation state
- Every decision has status and concrete next step
- Every milestone has **previous** and **current** status
- All status values use exact enums below

## Step 5: Save Output

Save to the project's `monthly-updates/` subfolder as: `YYYY-MM <project_name> monthly update.md`

Example path: `Knowledge/initiatives/<project>/monthly-updates/2026-01 Green Apple monthly update.md`

## Step 6: Draft Slack Message

Draft a message for #project-updates channel with key highlights. See [references/slack-examples.md](references/slack-examples.md) for tone and format.

Structure:
- Header with emoji + project name + emoji (e.g., `:star::green_apple:Green Apple Update:green_apple::star:`)
- Brief team shoutout (1-2 sentences)
- "Recent highlights include:" followed by 3-4 bullet points with emoji
- Tag required reviewers at the end

---

## Status Enums

### Milestone/Deliverable Status
`de-scoped/paused` | `off track` | `blocked/delayed` | `issue` | `on track` | `planning stage` | `done`

### Decision Status
`urgent` | `needs review` | `inform` | `upcoming`

### Risk Impact
`low` | `medium` | `high` — plus 1 sentence on milestone/KR impact

### Mitigation State
Start mitigation cell with one of:
- `Mitigation:` planned actions to reduce likelihood/impact
- `Containment:` active actions (risk is "live")
- `Realized:` risk occurred; describe response

---

## References

- **Template**: [references/template.md](references/template.md) — canonical markdown structure
- **Example**: [references/example.md](references/example.md) — complete Green Apple update
- **Slack examples**: [references/slack-examples.md](references/slack-examples.md) — tone and format for channel announcements
