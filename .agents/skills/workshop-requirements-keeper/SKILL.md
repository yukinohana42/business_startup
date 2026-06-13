# Skill: workshop-requirements-keeper

## Purpose

4日間版プロジェクトの要件、固定方針、禁止表現、成果物範囲を守るためのSkill。

## Use When

- 新しい教材、スライド、ワークシート、プロンプトを作る前。
- 既存の旧構成を4日間版に直す時。
- 成果物が要件から外れていないか確認する時。
- ユーザーの意図を再確認して、固定情報源に反映する時。

## Required Inputs

- `01_PROJECT_REQUIREMENTS.md`
- `02_SOURCE_OF_TRUTH.md`
- `03_FOUR_DAY_CURRICULUM.md`
- `04_DELIVERABLES_SPEC.md`
- `05_ACCEPTANCE_CRITERIA.md`

## Process

1. まず全日程が4日間であることを確認する。
2. 必須成果物がすべて含まれているか確認する。
3. 目的が「起業の押し付け」になっていないか確認する。
4. 「会社員は危ない」など不安を煽る表現がないか確認する。
5. 価値、仕事、お金、PMF、小さな実験の言い換えが統一されているか確認する。
6. 子供向け、親向け、Codex向けのトーンが混ざっていないか確認する。
7. 不足があれば、修正案を具体的なファイルパス付きで出す。

## Output Format

```markdown
# Requirements Review

## Summary
- 判定: pass / needs_fix

## Fixed Requirements Checked
- [ ] 4日間構成
- [ ] 必須成果物
- [ ] 起業押し付けなし
- [ ] 不安煽りなし
- [ ] 中学生向け言い換え
- [ ] 親の役割

## Findings
| File | Issue | Required Fix |
|---|---|---|

## Next Action
```

## Acceptance Criteria

- 4日間版で統一されている。
- 必須成果物の抜けがない。
- 禁止表現を検出できている。
- どのファイルをどう直すかが明確。

## Must Not

- 旧構成を標準として残さない。
- 起業を正解として扱わない。
- 子供を不安で動かす表現を許可しない。
