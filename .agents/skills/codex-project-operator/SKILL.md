# Skill: codex-project-operator

## Purpose

Codexが安全にファイル作成、編集、レビュー、commit準備を行うための運用Skill。

## Use When

- プロジェクト作業を開始する時。
- ファイルを追加・変更する時。
- commit前チェックをする時。
- docs-only作業と教材生成作業を分ける時。

## Required Inputs

- `AGENTS.md`
- `TODO.md`
- `MANIFEST.md`

## Start Procedure

1. `pwd` でproject rootを確認する。
2. `git branch --show-current` を確認する。
3. `git rev-parse HEAD` を確認する。
4. `git status --short` を確認する。
5. `git remote -v` を確認する。
6. `02_SOURCE_OF_TRUTH.md` を読む。
7. 対象タスクのpromptを読む。

## File Safety

Never include:

- `.env`
- Cookie
- Login Data
- Cache
- Crashpad dump
- Browser profile
- Secret keys
- Personal credentials

Do not use `git add .`.

Stage only explicit paths.

## Docs-only Work

Docs-only作業では、画像、PDF、PPTX、HTML/CSS生成物を混ぜない。

## Material Generation Work

教材生成作業では、生成物の種類ごとにcommitを分ける。

例:

- Markdown slides only.
- Worksheets only.
- Prompt packets only.
- Rendered PNG only.

## Output Format

```markdown
# Operator Report

## Environment
- root:
- branch:
- head:
- remote:
- status:

## Files Changed

## Safety Check
- [ ] no secrets
- [ ] no browser profile
- [ ] no generated files in docs-only work
- [ ] no git add .

## Next Command Suggestion
```

## Acceptance Criteria

- 作業前の状態が記録されている。
- 変更ファイルが明確。
- 安全チェックがある。

## Must Not

- 背景作業を約束しない。
- 不明なファイルを一括stageしない。
- 秘密情報を含めない。
