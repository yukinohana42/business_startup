# Skill: infographic-prompt-designer

## Purpose

スライド代替または補助として使える複数枚インフォグラフィックのprompt packetを作るSkill。

## Use When

- `infographics/*.md` を作る時。
- 画像生成AIへ渡すprompt packetを作る時。
- スライド化が難しい概念を視覚化する時。

## Required Inputs

- `DESIGN.md`
- `docs/visual_learning_system.md`
- `docs/image_generation_manual_handoff.md`
- 対象スライド原稿

## Prompt Packet Fields

Each prompt packet must include:

1. Page number.
2. Purpose.
3. Visual message.
4. Scene description.
5. Character action.
6. Before/After if relevant.
7. Diagram elements.
8. Style.
9. Text handling.
10. Negative prompt.
11. Later-added Japanese text.
12. Review checklist.

## Process

1. スライドを4〜6枚の視覚ストーリーへ分ける。
2. 各ページを1メッセージに絞る。
3. 人物の行動を決める。
4. 価値の変化をBefore/Afterで決める。
5. 日本語本文は後編集前提にする。
6. 既存IP模倣がないようにする。
7. 保存先とレビュー観点を書く。

## Acceptance Criteria

- 1ページ1メッセージ。
- 文字量が少ない。
- キャラクターが行動している。
- 価値が相手の変化として見える。
- Promptだけで画像生成担当者が迷わない。

## Must Not

- 1枚に全情報を詰め込まない。
- 正確な日本語本文を画像生成に任せすぎない。
- 特定アニメ風、特定漫画家風、既存キャラ風を指定しない。
