# Skill: qa-reviewer

## Purpose

成果物全体の整合性、トーン、要件適合、禁止表現、ファイル構成をレビューするSkill。

## Use When

- 成果物を提出する前。
- 大きな修正後。
- PDF、PPTX、PNGへ変換する前。

## Required Inputs

- `01_PROJECT_REQUIREMENTS.md`
- `02_SOURCE_OF_TRUTH.md`
- `05_ACCEPTANCE_CRITERIA.md`
- 変更対象ファイル

## Review Categories

1. Requirements fit.
2. Source of truth alignment.
3. 4-day consistency.
4. Kids tone.
5. Parent tone.
6. Visual learning fit.
7. Forbidden expression check.
8. Deliverable completeness.
9. File hygiene.

## Process

1. 必須成果物があるか確認する。
2. 旧構成の残りを検索する。
3. 禁止表現を検索する。
4. 中学生向けに難しすぎる言葉を検索する。
5. 親が採点者になっていないか確認する。
6. スライドとワークシートが同じ方向を向いているか確認する。
7. 修正が必要な箇所を一覧にする。

## Output Format

```markdown
# QA Review

## Verdict
pass / needs_fix

## Missing Deliverables

## Issues
| Severity | File | Problem | Fix |

## Forbidden Expressions Found

## Recommended Next Steps
```

## Acceptance Criteria

- 具体的なファイルパスと修正内容がある。
- 合格/不合格が明確。
- 曖昧な総評だけで終わらない。

## Must Not

- 問題を見つけても放置しない。
- 「良さそうです」だけで終わらない。
