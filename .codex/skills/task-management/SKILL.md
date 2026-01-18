---
name: task-management
description: Create and manage task files in Tasks/ using the project's Tasks/README.md format (including YAML frontmatter, categories, priorities, statuses, and goal alignment).
---

# Task Management Skill

Use this skill when the user asks to create, update, or manage tasks in `Tasks/`.

## Sources of Truth
- Always read `Tasks/README.md` for the current task format and field definitions.
- Use `GOALS.md` to align tasks to current goals in the **Context** section.

## Core Workflow
1. Read `Tasks/README.md` to confirm the required frontmatter fields and accepted values.
2. Create or update task files in `Tasks/` using the project template.
3. Set `priority`, `category`, and `status` correctly, and include a clear **Context** that ties to a goal in `GOALS.md`.
4. Add concrete **Next Actions** with checkboxes.
5. Append a timestamped **Progress Log** entry for creation or major updates.

## Conventions
- File name: `YYYY-MM-DD-short-task-name.md`.
- `created_date` and `due_date` use `YYYY-MM-DD`.
- Keep content concise and action-oriented.

## Example Task (Template)
```markdown
---
title: Send BMGF meeting agenda
category: outreach
priority: P0
status: n
project: bmgf
created_date: 2026-01-05
due_date: 2026-01-05
resource_refs:
  - Knowledge/initiatives/bmgf/bmgf-reference.md
  - GOALS.md
---

# Send BMGF meeting agenda

## Context
Supports the GOALS.md focus area "BMGF Project" and today’s stakeholder coordination.

## Next Actions
- [ ] Draft agenda with key decisions, data updates, and owners.
- [ ] Send agenda to the BMGF meeting channel and invitees.

## Progress Log
- 2026-01-05: Task created.
```

## When tasks are ambiguous
- If a task lacks a clear next step, priority, or goal alignment, ask the user for clarification before creating it.

## Backlog processing
- If the user requests backlog processing, follow `AGENTS.md` instructions and use the backlog tools (e.g., `process_backlog_with_dedup`).
