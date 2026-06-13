# Gamified v2 Card Sheet Spec

## Purpose

v1のカード文面は残す。
v2では、カードの見た目を「選びたくなる冒険カード」にする。

カードは、能力評価や勝敗のためには使わない。

## Common Layout

- A4縦。
- 1ページ8枚または9枚。
- 1カード1メッセージ。
- 上部: カードタイプ。
- 中央: 画像またはアイコン。
- 下部: 短い問い。
- 角: ID。レア度や点数は入れない。

## Card Types

| Card Set | Frame Color | Visual Motif | Prompt Source |
|---|---|---|---|
| 価値変化カード | Green + Coral | モヤモヤが光の種に変わる | `infographics/card_art_gamified_v2_prompt_packets.md` |
| 価値の種カード | Yellow + Green | 日常に隠れた光の種 | `infographics/card_art_gamified_v2_prompt_packets.md` |
| 助けたい人カード | Blue + Cream | ケースファイル | `infographics/card_art_gamified_v2_prompt_packets.md` |
| 欲しいサインカード | Green + Yellow + Soft Red | サインレーダー | `infographics/card_art_gamified_v2_prompt_packets.md` |
| ピッチ質問カード | Navy + Coral | クエストナビの問い | `infographics/card_art_gamified_v2_prompt_packets.md` |

## Text Rules

- 表は短く。
- 裏または下部に問いを1つ。
- 「使う人」「助けたい人」「変わること」を入れる。
- 文字を画像生成に任せない。

## Example Card Structure

```text
[Card Type]

[Generated original illustration]

Front:
困った -> 助かった

Prompt:
だれが、何に困っていた？

ID:
VT-01
```

## Print Check

- A4で切りやすい。
- 机に並べた時に種類が見分けられる。
- 小さい文字が多すぎない。
- 色だけに頼らず、形やアイコンでも種類がわかる。
- 既存作品のカードゲーム風に見えすぎない。

## Do Not

- レア度を付けない。
- 強さ、攻撃力、HP、レベルを入れない。
- 点数化しない。
- 勝敗に使わない。
- 既存作品に似た枠、記号、キャラクター、モンスターを使わない。
