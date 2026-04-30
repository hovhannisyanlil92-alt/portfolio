---
name: pnpm-debugger-pro
description: Autonomous skill to fix build/lint errors and ensure deployment readiness using pnpm.
---

# PNPM Build & Debug Skill

## Workflow
1. **Diagnostics**: Execute `pnpm exec tsc --noEmit` and `pnpm build`.
2. **Analysis**: Read terminal output to identify the exact file, line, and error type.
3. **Action**: 
   - Open the problematic file.
   - Apply a clean fix (no hacks, no eslint-disable).
   - Re-run the command to verify.
4. **Finality**: Continue until `pnpm build` finishes with success.

## Reporting Requirements
After the fix, provide a summary:
- **Detected**: What was the error?
- **Fixed**: What change was made?
- **Status**: Confirm `pnpm build` is now passing 100%.

## Rules
- Use `pnpm` for all operations.
- Never use `//@ts-ignore`. Fix the underlying type instead.
- Ensure all changes follow the `code-style.mdc` rules.