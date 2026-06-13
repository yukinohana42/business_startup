# Skill: worksheet-designer

## Purpose

子供がワークに使うA4印刷前提のワークシートを作るSkill。

## Use When

- `worksheets/*.md` を作る時。
- A4印刷、PDF化、手元メモ用に整える時。
- ワークシートを4日間で積み上がる形にする時。

## Required Inputs

- `04_DELIVERABLES_SPEC.md`
- `03_FOUR_DAY_CURRICULUM.md`
- 子供向けスライド原稿

## Design Principles

- 完成度の高い事業計画書にしない。
- 考えを見える形にするメモにする。
- 空欄は短く書ける大きさにする。
- 「わからない」と書ける欄を残す。
- 最後に次の行動を入れる。
- 1ページに詰め込みすぎない。

## Process

1. その日のFinal Missionを確認する。
2. その日に必要な記入欄だけを作る。
3. Before/After欄を必ず入れる。
4. 具体的な誰かを書く欄を入れる。
5. 小さく試す、次に聞く、次に観察する欄を入れる。
6. 長文回答を求める欄を減らす。
7. A4印刷で余白があるか確認する。

## Output Format

```markdown
# DayX Worksheet: Title

## 今日のミッション
## 今日のゴール

---

## 1. Section

Instruction.

```text

```
```

## Acceptance Criteria

- 子供が迷わず書ける。
- 書く量が多すぎない。
- 4日間で成果が積み上がる。
- ワークシートだけ見ても今日やることがわかる。

## Must Not

- 大人向けの事業計画書にしない。
- 空欄を詰め込みすぎない。
- 評価シートにしない。
