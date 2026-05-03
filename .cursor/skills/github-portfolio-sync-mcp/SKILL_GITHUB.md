---
name: github-portfolio-sync-mcp
description: Synchronizes only repositories containing "portfolio" in their name after user approval.
---

# Selective GitHub Portfolio Sync

## Workflow

### 1. Discovery & Filtering
- Use GitHub MCP tool `search_repositories` with the query `user:hovhannisyanlil92-alt portfolio` to fetch all public repositories.
- **Filter**: Identify only repositories whose names contain the string **"portfolio"** (case-insensitive, e.g., "my-portfolio", "Portfolio-2026").

### 2. Proposal & Permission (CRITICAL)
- Before making any changes to the code, display a list of the discovered repositories to the user.
- **Ask for Permission**: Present the list and ask: *"I found these repositories: [List]. Should I add them to your projects list?"*
- **Wait**: Do not proceed with Step 3 until the user gives explicit "Yes", "Confirm", or "Proceed" confirmation.

### 3. Data Mapping & Sync
- Once confirmed, map the selected repositories to the project interface.
- Append new projects or update existing ones based on the repository name.
- **File Update**: Open `src/components/Projects/consts.ts` and update the `PROJECTS` array with the new information.
- Ensure `PROJECTS_TEXT` and manual fields remain untouched.

## Rules
- **Name Match**: Only include repos where `name.toLowerCase().includes('portfolio')`.
- **No Build**: Do not run any build commands (pnpm build) after the sync.
- **No Silent Updates**: Never update the `projects.ts` file without showing the list and getting a "Yes" from the user first.
- **Tool Usage**: Use the GitHub MCP server tools for all fetching. 