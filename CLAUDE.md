# Project rules

## Language

All code is written in English: variable names, function names, type
names, component names, file names, and commit messages.

All user-facing content is written in Portuguese and lives in
`src/config/`. Config keys are in English, config values are in
Portuguese.

Never mix languages inside a single identifier.

## Code style

Do not write comments. None. If a block needs a comment to be
understood, rewrite the block instead of explaining it.

The code must be readable by someone who has never seen this project:

- Descriptive, fully spelled out names. `formattedPrice`, not `fp`.
  `ServicesSection`, not `Section1`.
- Each function does one thing and its name says which.
- Components above 150 lines must be split.
- Maximum nesting depth of 3. Prefer early returns.
- No invented abbreviations. No generic names like `data`, `item`, or
  a `utils.ts` used as a dumping ground.
- Complex conditionals become named variables before the `if`.

The only allowed exceptions to the no-comment rule are tool directives
such as `eslint-disable` or `@ts-expect-error`, and only when there is
no alternative. If a decision needs to be explained, write it in the
README, not in the code.

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS.
Editable content is centralized in `src/config/`.

## Definition of done

Every task must pass, with no errors:

    npm run lint
    npm run typecheck
    npm run build

## Boundaries

- Never install new dependencies without asking.
- Never change project config files without asking.
- Never refactor code outside the requested scope.
- Never create new image files. Reuse what exists in `public/images`.
