---
name: pnpm-debugger-pro
description: Autonomous skill to fix build/lint errors and ensure deployment readiness using pnpm.
---

# PNPM Build & Debug Skill

## Workflow
1. **Diagnostics**: Execute `pnpm exec tsc --noEmit`. This checks for TypeScript errors without building the project.
2. **Analysis**: Read terminal output to identify the exact file, line, and error type.
3. **Action**: 
   - Open the problematic file.
   - Apply a clean fix (no hacks, no eslint-disable).
   - Re-run `pnpm exec tsc --noEmit` to verify the fix.
4. **Finality**: Continue until the TypeScript check finishes without any errors.

## Reporting Requirements
After the fix, provide a summary:
- **Detected**: What was the error?
- **Fixed**: What change was made?
- **Status**: Confirm that `tsc` check is now passing 100%.

## Rules
- Use `pnpm` for all operations.
- **No Build**: Do not run `pnpm build`. Use `tsc --noEmit` for validation.
- Never use `// @ts-ignore`. Fix the underlying type instead.
- Ensure all changes follow the `code-style.mdc` rules.