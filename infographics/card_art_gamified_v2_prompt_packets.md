# Card Art Gamified v2 Prompt Packets

## Purpose

既存のカード文面は残す。
このファイルは、カードをよりワクワクする見た目にするための画像生成promptである。

カードは評価や点数化に使わない。
子供が選び、並べ、組み合わせるための道具にする。

## Common Style

- Original adventure-card illustration.
- 2.5:3.5 card ratio or A4 card sheet crop-ready.
- Clean frame, large icon/scene area, small blank label zone.
- No readable generated Japanese text. Text will be added later.
- Use color by card type.
- No rarity stars, no levels, no points, no ranking.

Common negative prompt:

```text
No existing anime, manga, game, movie, logo, brand, mascot, or character. No imitation of a specific artist or franchise style. No recognizable creature, costume, symbol, attack effect, logo, or card-game layout from an existing work. No rarity stars, no HP, no attack points, no score, no ranking, no trophy, no money worship, no dense text.
```

Save candidate images under:

```text
assets/generated/gamified_v2/cards/{card_set}/candidates/
```

---

## 1. 価値変化カード

Visual role: Before/Afterを選ぶカード。

Color: Green and coral.

Prompt:

```text
Create an original adventure learning card frame for a "value transformation" card. The central art shows a small moyamoya cloud on the left transforming through a glowing arrow into a helpful light seed on the right. Include subtle before/after split composition, friendly middle-school quest aesthetic, clean border, blank label space at bottom, no readable text, no score, no rarity, no existing franchise references.
```

Use with:

- 困った -> 助かった
- 面倒 -> ラク
- 退屈 -> 楽しい
- わからない -> できそう

Review checklist:

- 変化がひと目でわかるか。
- バトルカードに見えすぎないか。
- 点数や強さの表現がないか。

## 2. 価値の種カード

Visual role: 日常の中にある種を探すカード。

Color: Yellow and green.

Prompt:

```text
Create an original adventure learning card frame for a "value seed" card. The central art shows a glowing seed hidden in an everyday middle-school scene: desk, club bag, smartphone, calendar, or notebook. A small magnifying-glass icon and soft quest-map texture appear in the background. Clean border, blank label space, no readable text, no rarity, no score.
```

Use with:

- 困った
- 面倒
- 好き
- 欲しい
- 続けにくい
- 決めにくい

Review checklist:

- 日常から探す感じがあるか。
- 種が価値のヒントに見えるか。
- レアカード風になっていないか。

## 3. 助けたい人カード

Visual role: 具体的な人を考えるカード。

Color: Blue and cream.

Prompt:

```text
Create an original case-file learning card frame for a "specific person to help" card. The central art shows a respectful case file with a silhouette of a middle-school student in a concrete situation, such as test prep, club preparation, scheduling, or presentation nerves. Include notebook clips and soft evidence-board lines. Blank label area, no readable text, no personal data, no mocking, no existing franchise references.
```

Use with:

- テスト前に迷う中2
- 朝練前に忘れ物が多い部活生
- 文化祭準備で忙しい係
- 発表前に緊張する人

Review checklist:

- 「みんな」ではなく具体的な場面に見えるか。
- 困っている人を笑っていないか。
- 個人情報っぽくないか。

## 4. 欲しいサインカード

Visual role: 反応を見るカード。

Color: Green, yellow, and soft red.

Prompt:

```text
Create an original learning card frame for a "want signal" card. The central art shows a small radar device detecting gentle signal lights from a paper prototype being used by a student. Signals are feedback lights, not scores. Include icons for trying, asking, using again, and telling a friend. Blank label space, no score, no ranking, no battle UI.
```

Use with:

- 欲しいと言う
- 使ってみたいと言う
- もう一回使う
- 自分から質問する
- 反応が薄い

Review checklist:

- サインが評価点に見えないか。
- フィードバックとして見えるか。
- 赤信号が罰に見えないか。

## 5. ピッチ質問カード

Visual role: 聞き手が問いを返すカード。

Color: Navy and coral.

Prompt:

```text
Create an original quest navigator question card frame. The central art shows a friendly navigator holding a question card, with a small stage and value-change board in the background. The mood is supportive, not judgmental. Include a blank label zone for the question text. No score sheet, no judge table, no trophy, no existing franchise references.
```

Use with:

- だれが助かる？
- 何に困っている？
- どう変わる？
- 最初にどう試す？
- 赤信号ならどこを変える？

Review checklist:

- 聞き手が採点者に見えないか。
- 問いを返す道具に見えるか。
- 発表勝負に見えないか。
