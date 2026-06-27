# Day2 Gamified v2 Lecture Prompt Packet

## Purpose

Day2当日に、親が子供たちへ話すためのレクチャースライド設計である。

v1の `slides/kids/day2_lecture_slides.md` は残す。
このファイルでは、v2の価値の種カード、探偵ノート、ケースファイルと連動させる。

Day2では、すぐに解決策を作らない。
まず、日常の中から「価値の種」を見つける。

目標は、子供が次を自分の言葉で言えること。

```text
価値の種は、困った、面倒、退屈、好き、欲しい気持ちの中にある。
具体的な誰かを見ると、価値の種が見つけやすい。
次に聞く問いは、「今どうしてる？」から始められる。
```

## Status

すでにあるもの:

- v1 Day2スライド: `slides/kids/day2_lecture_slides.md`
- v2全体対応表: `slides/kids/gamified_v2_slide_storyboard.md`
- 子供向けv2画像prompt: `infographics/kids_gamified_v2_prompt_packets.md`
- Day2カード: `cards/value_seed_cards.md`
- Day2ワークシート: `worksheets/day2_problem_hunter_worksheet.md`
- v2カード台紙仕様: `cards/gamified_v2_card_sheet_spec.md`

このファイルで追加するもの:

- Day2当日用の8枚構成。
- 1枚1メッセージのスライド設計。
- 価値の種カードとの連動。
- 各スライドのデザイン指示。
- 各スライド用のinfographic生成prompt。

## Deck Rules

- 16:9。
- 全8枚。
- 1スライド1メッセージ。
- 本文は3行まで。
- 画像生成に正確な日本語本文を任せない。
- 日本語本文は後編集で載せる。
- カードは評価、点数、勝敗に使わない。
- 親は答えを教える人ではなく、問いを出す伴走者として話す。
- 困っている人を笑いものにしない。

## Common Visual Direction

- 世界観: Value Quest。
- Day2の役割: モヤモヤハンター。
- 主役行動: 観察する、選ぶ、書く、具体化する、質問を作る。
- キャラクター:
  - ユウ: 価値探偵。日常の手がかりを観察する。
  - ミホ: クエストナビ。短い問いを出す。
  - 子供2人: 価値の種カードを選び、ノートに書く。
  - モヤモヤ: 困った、面倒、退屈、好き、欲しいなどの気持ちを表す小さな存在。
- 色:
  - Navy: 見出し、画面の締め色。
  - Yellow: 価値の種、発見。
  - Green: After、少し良くなる変化。
  - Coral: 注目点、問いカード。
  - Cream: 背景、ノート、机。
- 画面には余白を残す。
- 既存作品、既存キャラクター、特定作品の絵柄をまねない。

## Common Negative Prompt

```text
No existing anime, manga, game, movie, logo, brand, mascot, or character. No imitation of a specific artist or franchise style. No recognizable character silhouette, outfit, hair, symbol, creature, logo, or power effect from an existing work. No ranking, score, trophy, battle victory, money worship, fear-based career imagery, or mocking of people who are struggling. No dense text, no tiny captions, no aggressive game UI, no grading sheet, no shame expression.
```

## 45min Flow

| Time | Slide | Child Action |
|---|---|---|
| 0:00-0:04 | 1 | 今日のミッションを聞く |
| 0:04-0:08 | 2 | Day1の観察を1つ思い出す |
| 0:08-0:14 | 3 | 価値の種の入り口を見る |
| 0:14-0:20 | 4 | 価値の種カードを2枚まで選ぶ |
| 0:20-0:26 | 5 | 観察する場所を選ぶ |
| 0:26-0:32 | 6 | 具体的な誰かを見る |
| 0:32-0:39 | 7 | 今どうしているかを書く |
| 0:39-0:45 | 8 | 次に聞く問いを1つ作る |

## Slide Overview

| Slide | Screen Type | One Message | Linked Material |
|---|---|---|---|
| 1 | Mission Board | 日常に隠れた価値の種を見つける | Worksheet 2 |
| 2 | Detective Note | Day1の「価値は変化」を思い出す | Worksheet 1 |
| 3 | Card Table | 価値の種はいろいろな気持ちにある | VS-01 to VS-12 |
| 4 | Card Table | 種カードを選ぶと観察しやすくなる | Value Seed Cards |
| 5 | Field Map | 観察場所を1つ選ぶ | Worksheet 2-3 |
| 6 | Case File | 「みんな」ではなく具体的な誰かを見る | Worksheet 5 |
| 7 | Observation Scene | 今のやり方の中にヒントがある | Worksheet 6-7 |
| 8 | Question Card | 次に聞く問いを1つ作る | Worksheet 8-9 |

---

## Slide 1: モヤモヤハンター開始

One message:

```text
今日は、日常に隠れた価値の種を見つける。
```

On-slide text:

```text
Day2 モヤモヤハンター
日常に隠れた価値の種を見つけろ
```

Speaker line:

```text
今日はアイデアを完成させる日ではありません。まず、種を見つける日です。
```

Child action:

- 今日のミッションを聞く。
- 「価値の種」という言葉を、日常の小さな手がかりとして受け取る。

Card connection:

- 価値の種カードはまだ選ばない。
- 画面には、あとで使う種カードを伏せて置く。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Mission Board |
| 子供がすること | 今日のミッションを受け取る |
| キャラクターの行動 | ユウとミホが学校と家のフィールドマップを見ている |
| 価値の変化 | まだ不明。日常から手がかりを探し始める |
| ゲーム要素 | ミッションボード、フィールドマップ、伏せた種カード |
| 合格基準 | 子供が「今日は価値の種を探す」とわかる |

Infographic prompt:

```text
Create a 16:9 original middle-school adventure educational infographic. Scene: Yuu and Miho stand in front of a warm mission board and a school-home field map. Small glowing value seeds are hidden near a desk, club bag, smartphone, calendar, and store icon. A few face-down seed cards sit on a wooden desk. The mood is curious and active, not battle-like. Use cream background, navy outlines, yellow seed glow, green and coral accents. Leave large empty space for later Japanese title text. No readable generated text.
```

Later text:

```text
Day2 モヤモヤハンター
日常に隠れた価値の種を見つけろ
```

---

## Slide 2: Day1の発見を思い出す

One message:

```text
価値は、誰かの状態が少し良くなること。
```

On-slide text:

```text
Day1のおさらい
誰のBeforeが、どんなAfterになった？
```

Speaker line:

```text
前回見つけた仕事を、BeforeとAfterで思い出してみます。
```

Child action:

- 前回見つけた仕事を1つ言う。
- ワークシート1に、誰がどう変わっていたかを書く。

Card connection:

- Day1の価値変化カードを画面の端に小さく見せる。
- Day2の種カードへつながる橋として使う。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Detective Note |
| 子供がすること | 前回の観察を思い出す、書く |
| キャラクターの行動 | ユウがDay1のノートを開き、Before/Afterの矢印を指す |
| 価値の変化 | 仕事を人の変化として見直す |
| ゲーム要素 | 前回ログ、Before/Afterカード |
| 合格基準 | 子供が「誰がどう助かったか」を1つ言える |

Infographic prompt:

```text
Create a 16:9 detective-note recap infographic. Scene: an open notebook titled visually by icons only, showing a simple before/after arrow from Day1. Yuu points at a small value-change card while two students recall an everyday job they observed. In the background, new glowing value-seed cards wait to be used. Warm desk scene, clear hierarchy, no dense text, no readable generated text, no score or grading.
```

Later text:

```text
Day1のおさらい
誰のBeforeが、どんなAfterになった？
```

---

## Slide 3: 価値の種の入り口

One message:

```text
価値の種は、いろいろな気持ちの中にある。
```

On-slide text:

```text
困った・面倒・退屈
好き・欲しい・もっとやりたい
```

Speaker line:

```text
困りごとだけではありません。好きや、もっとやりたい気持ちも、価値の種になります。
```

Child action:

- 6つの入り口を見る。
- 最近、自分や周りにあったことを1つ思い出す。

Card connection:

- `VS-01` から `VS-06` を最初の入り口として見せる。
- まだ正解を決めず、気になる入口を探す。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Card Table |
| 子供がすること | 気になる入口を探す |
| キャラクターの行動 | ミホが6枚の種カードを机に並べる |
| 価値の変化 | 気持ちを、価値の種として見られるようになる |
| ゲーム要素 | 6枚の入口カード |
| 合格基準 | 子供が「好きや欲しいも種になる」とわかる |

Infographic prompt:

```text
Create a 16:9 card-table educational infographic. Six large value-seed cards are arranged on a warm wooden desk, each represented by an icon only: trouble cloud, tangled task, boring clock, heart spark, want sparkle, continue arrow. Miho gently points to the cards while Yuu writes notes. The cards feel like observation tools, not competitive game cards. Use yellow and green seed motifs, navy outlines, coral highlights. Leave blank space for later Japanese labels. No readable generated text.
```

Later text:

```text
困った・面倒・退屈
好き・欲しい・もっとやりたい
```

---

## Slide 4: 価値の種カードを選ぶ

One message:

```text
カードを選ぶと、日常を観察しやすくなる。
```

On-slide text:

```text
価値の種カードを2枚まで選ぶ
最近、自分や周りであったことに変える
```

Speaker line:

```text
よい悪いを決めるカードではありません。探す場所を決めるためのカードです。
```

Child action:

- `VS-01` から `VS-12` の中から気になるカードを2枚まで選ぶ。
- 選んだカードを、最近の身近な場面に変える。

Card connection:

- 使用カード: `cards/value_seed_cards.md`
- v2見た目: `cards/gamified_v2_card_sheet_spec.md`

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Card Table |
| 子供がすること | カードを選ぶ、身近な場面に変える |
| キャラクターの行動 | 子供2人が種カードを選び、ノートに短く書く |
| 価値の変化 | ぼんやりした気持ちを観察メモに変える |
| ゲーム要素 | 選べるカード。ただし点数やレア度はない |
| 合格基準 | 子供が種カードを1枚以上選び、身近な例を言える |

Infographic prompt:

```text
Create a 16:9 value-seed card selection infographic. Two middle-school students choose up to two glowing seed cards from a set of twelve on a wooden desk. The cards use icon-based prompts only: forgetful, hard to choose, hard to find, hard to continue, annoying, want. Yuu writes a short observation note beside them. The scene should show selecting and thinking, not collecting points. No rarity stars, no levels, no battle stats, no readable generated text. Warm cream, yellow, green, and coral palette.
```

Later text:

```text
価値の種カードを2枚まで選ぶ
最近、自分や周りであったことに変える
```

---

## Slide 5: 観察場所を選ぶ

One message:

```text
見る場所をしぼると、種を見つけやすい。
```

On-slide text:

```text
どこを見る？
家・学校・部活・スマホ・友達・お店
```

Speaker line:

```text
全部を見る必要はありません。今日は見つけやすそうな場所を1つ選びます。
```

Child action:

- ワークシート2で観察する場所に丸をつける。
- 選んだ種カードを、その場所にあてはめる。

Card connection:

- Slide 4で選んだ種カードを、フィールドマップの場所に置く。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Field Map |
| 子供がすること | 観察場所を1つ選ぶ |
| キャラクターの行動 | ユウがマップ上に選んだ種カードを置く |
| 価値の変化 | 広すぎる日常を、観察できる場所にしぼる |
| ゲーム要素 | フィールドマップ、場所マーカー、種カード |
| 合格基準 | 子供が今日見る場所を1つ決められる |

Infographic prompt:

```text
Create a 16:9 field-map infographic for middle-school observation. A friendly map shows six everyday zones as icons with no logos: home desk, school classroom, club bag, smartphone screen, friend conversation bench, small shop. Yuu places one selected value-seed card onto one zone. Miho holds a question card. The composition should feel like choosing a search area, not a battle map. Warm cream background, yellow seed glow, navy lines, no readable text.
```

Later text:

```text
どこを見る？
家・学校・部活・スマホ・友達・お店
```

---

## Slide 6: 具体的な誰かを見る

One message:

```text
「みんな」より、具体的な誰かを見る。
```

On-slide text:

```text
誰の種？
自分・友達・家族・部活の人・先生・お店の人
```

Speaker line:

```text
人を責めるためではありません。誰が助かるかを見つけるためです。
```

Child action:

- ワークシート5に、具体的な人を書く。
- ぴったり書けない時は「よくある場面」として書く。

Card connection:

- 種カードに「誰の種か」を足す。
- Day3の助けたい人カードにつながる下準備にする。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Case File |
| 子供がすること | 具体的な人を考える |
| キャラクターの行動 | ユウがケースファイルに人物と場面をメモする |
| 価値の変化 | ぼんやりした種が、誰かの種になる |
| ゲーム要素 | ケースファイル、人物カードの予告 |
| 合格基準 | 子供が「誰の種か」を1人または1場面で言える |

Infographic prompt:

```text
Create a 16:9 respectful case-file infographic. Left side: a vague crowd shown as soft simple silhouettes fading into the background. Right side: one specific middle-school scene as a blank case file, such as a student who often forgets club items or cannot decide where to start studying, represented by icons only. Yuu pins the selected value-seed card onto the case file. The mood is respectful and curious, not judgmental. No personal details, no readable generated text, no mocking.
```

Later text:

```text
「みんな」ではなく
具体的な誰かを見る
```

---

## Slide 7: 今どうしている？

One message:

```text
今のやり方の中に、ヒントがある。
```

On-slide text:

```text
今はどうしている？
それが変わると何がうれしい？
```

Speaker line:

```text
今のやり方を否定しません。そこに、助かるヒントがあります。
```

Child action:

- ワークシート6に「今どうしている？」を書く。
- ワークシート7にBefore/Afterを書く。

Card connection:

- 選んだ種カードを、Before/Afterにつなげる。
- 例: `忘れやすい` -> `思い出せる`。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Observation Scene |
| 子供がすること | 今のやり方と、変わるとうれしいことを書く |
| キャラクターの行動 | ユウが少し離れて観察し、ミホが問いカードを出す |
| 価値の変化 | 忘れやすい -> 思い出せる、探しにくい -> 見つけやすい |
| ゲーム要素 | 観察メモ、Before/After矢印、問いカード |
| 合格基準 | 子供が「今どうしている？」と「どう変わるとうれしい？」を言える |

Infographic prompt:

```text
Create a 16:9 respectful observation scene. A student uses a normal workaround: sticky notes, phone timer icon, scattered club items, or a messy study-start checklist. Yuu observes from the side and writes in a detective notebook; Miho holds a question card. A selected value-seed card connects to a small before/after arrow. The person is not mocked and does not look helpless. Warm, clear, everyday, no readable generated text.
```

Later text:

```text
今はどうしている？
それが変わると何がうれしい？
```

---

## Slide 8: 次に聞く問いを作る

One message:

```text
次は、相手に聞く問いを1つ持ち帰る。
```

On-slide text:

```text
次に聞く問い
今どうしてる？
何が面倒？
どうなったら楽？
```

Speaker line:

```text
相手を調べるのではなく、相手のことを少し知るために聞きます。
```

Child action:

- ワークシート8に質問を1つか2つ書く。
- Final Missionの文を完成させる。

Card connection:

- 選んだ種カードの裏面の問いを見て、聞く質問を作る。
- カードは評価ではなく、観察のきっかけとして扱う。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Question Card |
| 子供がすること | 聞く問いを作る、Final Missionを書く |
| キャラクターの行動 | ミホが空欄つきの問いカードを渡し、子供がノートに書く |
| 価値の変化 | 種を見つけただけで終わらず、相手を知る行動へ進む |
| ゲーム要素 | 問いカード、クエストログ、次回への道 |
| 合格基準 | 子供が次に聞く問いを1つ書ける |

Infographic prompt:

```text
Create a 16:9 closing question-card infographic. Miho hands a blank question card to two middle-school students. Their selected value-seed card and observation notebook are on the desk. A gentle path leads from the desk toward home, school, town, and smartphone observation icons. The mood is calm and curious, not pressure or homework punishment. No readable generated text, no personal information, no logos, no ranking.
```

Later text:

```text
次に聞く問い
今どうしてる？ 何が面倒？ どうなったら楽？
```

---

## Optional Slide 9: 価値の種ログ

Use only when running a 60min version or when there is enough time for sharing.

One message:

```text
見つけた種は、次の日のアイデア材料になる。
```

On-slide text:

```text
価値の種ログ
選んだ種・誰の種・次に聞く問い
```

Infographic prompt:

```text
Create a 16:9 quest-log summary infographic. A notebook page shows three large blank zones represented by icons only: selected seed card, specific person case file, next question card. Yuu and Miho look at the log with the students. The scene should feel like saving useful observations for tomorrow's idea-building, not scoring results. Warm stationery adventure style, no readable generated text, no trophy, no score.
```

Later text:

```text
選んだ種
誰の種
次に聞く問い
```

## Review Checklist

- `02_SOURCE_OF_TRUTH.md` と矛盾していない。
- 「起業しなければいけない」という圧がない。
- 会社員への不安を煽っていない。
- 1枚1メッセージになっている。
- 子供が各画面で何をするかが明確である。
- キャラクターがページごとに行動している。
- カードが飾りではなく、選ぶ、書く、話す行動を進めている。
- 価値の種が、困っただけでなく、好き、欲しい、もっとやりたいにも広がっている。
- 親が採点者やゲームマスターになっていない。
- 困っている人を笑いものにしていない。
- 個人情報を聞き出す構成になっていない。
- 既存作品、既存キャラクター、特定絵柄の模倣指示がない。
