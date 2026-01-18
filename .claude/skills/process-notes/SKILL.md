---
name: process-notes
description: Process meeting notes or raw thoughts into organized Knowledge files. Use when the user says "process notes", "process my notes", "here are my notes", pastes unstructured notes, or mentions notes from a meeting/call. Creates dated markdown files in the appropriate project under Knowledge/initiatives/ and extracts actionable context.
--

# Process Notes

Turn raw notes (from meetings, calls, or freeform thoughts) into structured Knowledge files stored in the correct project folder.

## Workflow

1. **Identify the project**
   - Scan the notes for project keywords (e.g., "BMGF", "subcon", "benchling")
   - Check `Knowledge/initiatives/` for existing project folders
   - If unclear, ask: "Which project do these notes belong to?"

2. **Determine note type and naming**
   - Meeting notes → `[project]-meeting-notes/YYYY-MM-DD Meeting - [Topic].md`
   - 1:1 notes → `[project]-meeting-notes/YYYY-MM-DD 1-1 [Person Name] - [Topic].md`
   - General notes → `[project]-meeting-notes/YYYY-MM-DD [Brief Topic].md`

3. **Create the notes file**
   - Location: `Knowledge/initiatives/[project]/[project]-meeting-notes/`
   - If the `[project]-meeting-notes` folder doesn't exist, create it first
   - Include a header with date and attendees (if applicable)
   - Preserve the user's original content, lightly formatted
   - Extract action items into a "## Action Items" section if present

4. **Update project context**
   - If the notes contain important decisions, key facts, or context that should inform future work, append to or create a project reference file (e.g., `[project]-reference.md` or `[project]-key-messages.md`)
   - Only add durable context—skip ephemeral details

## Example

User: "process my notes from the Gates call today"
```
talked to sarah and mike about the pilot timeline
they want to see results by march
need to send updated proposal by friday
discussed budget constraints - max 50k for phase 1
```

Creates: `Knowledge/initiatives/bmgf/bmgf-meeting-notes/2026-01-08 Meeting - Gates Pilot Discussion.md`
```markdown
# Gates Pilot Discussion
**Date:** 2026-01-08
**Attendees:** Sarah, Mike

## Notes
- Discussed pilot timeline - they want to see results by March
- Budget constraints: max $50k for Phase 1

## Action Items
- [ ] Send updated proposal by Friday
```

Updates: `Knowledge/initiatives/bmgf/bmgf-reference/` folder with durable context (if it contains key facts like budget caps)
