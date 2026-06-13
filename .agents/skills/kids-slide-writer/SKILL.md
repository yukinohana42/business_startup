# Skill: kids-slide-writer

## Purpose

中学2年生向けのレクチャースライド原稿を作るSkill。

## Use When

- `slides/kids/day*_lecture_slides.md` を作る時。
- スライドをMarp、PPTX、HTMLへ変換できるMarkdownに整える時。
- 文字量を減らす時。

## Required Inputs

- `DESIGN.md`
- `03_FOUR_DAY_CURRICULUM.md`
- `docs/visual_learning_system.md`
- 対象Dayのワークシート

## Slide Rules

- 1スライド1メッセージ。
- 1スライド本文3〜5行まで。
- 問いを入れる。
- 例は身近なものにする。
- 難しい言葉は言い換える。
- ワーク指示は短く明確にする。
- 親の補足説明は台本側に逃がす。

## Process

1. その日のFinal Missionを確認する。
2. スライド枚数を8〜12枚にする。
3. 導入問いを1枚目または2枚目に入れる。
4. 概念説明は必ずBefore/Afterで見せる。
5. ワークに入るスライドを作る。
6. 共有とまとめのスライドを作る。
7. 長い文を削る。
8. Zoomで読めるか確認する。

## Output Format

Markdown slide形式。スライド区切りは `---`。

```markdown
# DayX Lecture Slides

---

# Slide Title

Short message.

Question.
```

## Acceptance Criteria

- 子供向けの言葉になっている。
- 文字量が少ない。
- 身近な例がある。
- ワークに自然につながる。
- 価値を相手の変化として扱っている。

## Must Not

- 大人向けビジネス用語を並べない。
- 抽象的な教訓だけで終わらせない。
- スライドに長い台本を入れない。
