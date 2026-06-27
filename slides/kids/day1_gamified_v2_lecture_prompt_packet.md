# Day1 Gamified v2 Lecture Prompt Packet

## Purpose

Day1当日に、親が子供たちへ話すためのレクチャースライド設計である。

v1の `slides/kids/day1_lecture_slides.md` は残す。
このファイルでは、v2のカード、探偵ノート、ミッション画面と連動させる。

目標は、子供が次を自分の言葉で言えること。

```text
仕事とは、誰かのBeforeをAfterに変えること。
価値とは、相手の状態が少し良くなること。
お金は、価値が届いたことへの対価。
```

## Status

すでにあるもの:

- v1 Day1スライド: `slides/kids/day1_lecture_slides.md`
- v2全体対応表: `slides/kids/gamified_v2_slide_storyboard.md`
- 子供向けv2画像prompt: `infographics/kids_gamified_v2_prompt_packets.md`
- Day1カード: `cards/value_transformation_cards.md`
- v2カード台紙仕様: `cards/gamified_v2_card_sheet_spec.md`

このファイルで追加するもの:

- Day1当日用の8枚構成。
- 1枚1メッセージのスライド設計。
- 価値変化カードとの連動。
- 各スライドのデザイン指示。
- 各スライド用のinfographic生成prompt。

## Deck Rules

- 16:9。
- 全8枚。
- 1スライド1メッセージ。
- 本文は3行まで。
- 画像生成に正確な日本語本文を任せない。
- 日本語本文は後編集で載せる。
- カードは点数や勝敗に使わない。
- 親は答えを教える人ではなく、問いを出す伴走者として話す。

## Common Visual Direction

- 世界観: Value Quest。
- 主役行動: 観察する、選ぶ、並べる、書く、話す。
- キャラクター:
  - ユウ: 価値探偵。Before/Afterを見つける。
  - ミホ: クエストナビ。短い問いを出す。
  - 子供2人: カードを選び、ノートに書く。
- 色:
  - Navy: 見出し、画面の締め色。
  - Coral: 注目点、矢印。
  - Green: After、価値が届いた状態。
  - Yellow: 手がかり、光の種。
  - Cream: 背景、ノート、机。
- 画面には余白を残す。
- 既存作品、既存キャラクター、特定作品の絵柄をまねない。

## Common Negative Prompt

```text
No existing anime, manga, game, movie, logo, brand, mascot, or character. No imitation of a specific artist or franchise style. No recognizable character silhouette, outfit, hair, symbol, creature, logo, or power effect from an existing work. No ranking, score, trophy, battle victory, money worship, fear-based career imagery, or mocking of people who are struggling. No dense text, no tiny captions, no aggressive game UI.
```

## 45min Flow

| Time | Slide | Child Action |
|---|---|---|
| 0:00-0:04 | 1 | 今日のミッションを聞く |
| 0:04-0:09 | 2 | 仕事のイメージを1つ出す |
| 0:09-0:15 | 3 | Before/Afterを見る |
| 0:15-0:20 | 4 | ラーメン屋の変化を言う |
| 0:20-0:24 | 5 | お金が何への対価か考える |
| 0:24-0:31 | 6 | 価値変化カードを1枚選ぶ |
| 0:31-0:39 | 7 | 身近な仕事を1つ書く |
| 0:39-0:45 | 8 | 一文を完成して次回観察を決める |

## Slide Overview

| Slide | Screen Type | One Message | Linked Material |
|---|---|---|---|
| 1 | Mission Board | 今日は仕事とお金の正体を見破る | Worksheet 1 |
| 2 | Detective Note | まず自分の仕事イメージを出す | Worksheet 1 |
| 3 | Evidence Board | 仕事は誰かのBeforeをAfterに変える | Value Transformation Cards |
| 4 | Case File | 価値は身近な仕事の変化で見える | Worksheet 2-4 |
| 5 | Evidence Board | お金は価値が届いたことへの対価 | Worksheet 6 |
| 6 | Card Table | 価値変化カードを選んで考える | VT-01 to VT-12 |
| 7 | Detective Note | 身近な仕事を価値の変化で調査する | Worksheet 2-5 |
| 8 | Quest Log | 自分の言葉で価値を説明する | Worksheet 7-8 |

---

## Slide 1: 価値クエスト開始

One message:

```text
今日は、仕事とお金の正体を見破る。
```

On-slide text:

```text
Day1 価値探偵
仕事とお金の正体を見破れ
```

Speaker line:

```text
今日は正解を当てる時間ではなく、探偵みたいに見つける時間です。
```

Child action:

- 今日やることを聞く。
- 「仕事」「お金」「価値」の3つを手がかりとして見る。

Card connection:

- まだカードは配らない。
- 画面内に、あとで使う価値変化カードの影だけを見せる。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Mission Board |
| 子供がすること | 今日のミッションを受け取る |
| キャラクターの行動 | ユウがノートと虫眼鏡を持って町の地図を見る |
| 価値の変化 | まだ不明。手がかりを探し始める |
| ゲーム要素 | ミッションボード、現在地マーカー |
| 合格基準 | 子供が「今日は仕事とお金を見る」とわかる |

Infographic prompt:

```text
Create a 16:9 original middle-school adventure educational infographic. Scene: Yuu, an original value detective student, stands in front of a warm Value Quest mission board. On the board are three simple clue icons: work, money, and value, with blank spaces for later Japanese text. A friendly navigator, Miho, points to the board. A town map, notebook, magnifying glass, and a few face-down value-change cards sit on a wooden desk. Warm cream background, navy and coral accents, clean composition, enough empty space for title text, no readable generated text.
```

Later text:

```text
Day1 価値探偵
仕事とお金の正体を見破れ
```

---

## Slide 2: 仕事って何？

One message:

```text
まず、自分の今のイメージを出す。
```

On-slide text:

```text
仕事って何？
お金？ 会社？ 人を助けること？
```

Speaker line:

```text
今の考えでOKです。あとで見方が変わってもOKです。
```

Child action:

- 仕事のイメージを1つ言う。
- ワークシート1に短く書く。

Card connection:

- カードはまだ選ばない。
- 仕事の見方が変わる前の「Before」として扱う。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Detective Note |
| 子供がすること | 仕事のイメージを言う、書く |
| キャラクターの行動 | ユウが空の探偵ノートを開く |
| 価値の変化 | ぼんやりした見方から、観察する見方へ進む |
| ゲーム要素 | 最初の手がかりメモ |
| 合格基準 | 子供が1つでも自分の考えを出す |

Infographic prompt:

```text
Create a 16:9 educational adventure infographic. Scene: an open detective notebook on a desk with three blank thought bubbles represented by icons: coins, office building, helping hand. Yuu invites two middle-school students to write their first idea with pencils. The mood is safe and curious, not a quiz. Use warm cream paper, navy outlines, coral highlights, and wide blank space for later Japanese question text. No dense text.
```

Later text:

```text
仕事って何？
まず自分の考えでOK
```

---

## Slide 3: 仕事はBeforeをAfterに変える

One message:

```text
仕事は、誰かの状態を少し良くすること。
```

On-slide text:

```text
仕事 =
誰かのBeforeをAfterに変えること
```

Speaker line:

```text
価値は、すごい言葉ではなく、人がどう変わったかで見ます。
```

Child action:

- 画面のBeforeとAfterを見比べる。
- 何が変わったかを1つ言う。

Card connection:

- 価値変化カードの考え方を初めて見せる。
- 例として `わからない -> できそう` を見せる。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Evidence Board |
| 子供がすること | Before/Afterの違いを探す |
| キャラクターの行動 | ユウが価値変化カードを矢印でつなぐ |
| 価値の変化 | わからない -> できそう |
| ゲーム要素 | 変化カード、矢印、証拠ボード |
| 合格基準 | 子供が「価値は変化」と言える |

Infographic prompt:

```text
Create a 16:9 original educational adventure infographic showing a respectful before/after evidence board. Left side: a middle-school student looks stuck before starting test study, with small soft moyamoya shapes around the desk. Right side: the same student has a simple first-step checklist and looks a little relieved. Yuu connects both sides with a value-change card arrow. The change is modest and realistic, not magical success. Clean layout, warm colors, no mocking, no readable generated text, large space for later headline.
```

Later text:

```text
価値 = 相手の変化
わからない -> できそう
```

---

## Slide 4: ラーメン屋で見る

One message:

```text
価値は、身近な仕事にもある。
```

On-slide text:

```text
ラーメン屋の価値
お腹がすいた -> おいしく食べられた
```

Speaker line:

```text
すごい発明でなくても、相手が少し良くなれば価値です。
```

Child action:

- ラーメン屋で助かる人を言う。
- BeforeとAfterを言う。

Card connection:

- `困った -> 助かった` または `欲しい -> 手に入った` のカード例を見せる。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Case File |
| 子供がすること | 身近な仕事の変化を探す |
| キャラクターの行動 | ユウがラーメン屋のケースファイルを指す |
| 価値の変化 | お腹がすいた -> おいしく食べられた |
| ゲーム要素 | ケースファイル、価値変化カード |
| 合格基準 | 子供が「誰がどう助かったか」を言える |

Infographic prompt:

```text
Create a 16:9 friendly town case-file infographic. Scene: a simple local ramen shop with no brand logo. A school student before eating looks hungry and tired; after eating the student looks a little warmer and more energetic. Yuu pins two case-file cards on an evidence board: before icon and after icon. Include a value-change card with an arrow, but no readable text. Warm evening town colors, respectful and everyday, not dramatic, no logo.
```

Later text:

```text
ラーメン屋の価値
お腹がすいた -> おいしく食べられた
```

---

## Slide 5: お金はありがとうのサイン

One message:

```text
お金は、価値が届いたことへの対価。
```

On-slide text:

```text
お金 =
価値が届いたことへの対価
```

Speaker line:

```text
お金は偉さや勝ち負けではなく、助かったことへのありがとうが形になったものです。
```

Child action:

- 「何にありがとうなのか」を考える。
- ワークシート6に一言で書く。

Card connection:

- Slide 4のBefore/Afterに戻し、「何が届いたから払うのか」を見る。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Evidence Board |
| 子供がすること | お金が何への対価か考える |
| キャラクターの行動 | ミホが価値の矢印とありがとうの戻り矢印を示す |
| 価値の変化 | 助かった状態になったので対価が戻る |
| ゲーム要素 | 双方向の流れ、ありがとうトークン |
| 合格基準 | 子供が「お金は価値が届いた対価」と言える |

Infographic prompt:

```text
Create a 16:9 original educational infographic. Scene: a simple value flow on a desk. On the left, a student gives a helpful item or service card to another student; on the right, the helped student returns a small glowing thank-you token, not luxury money. Soft arrows show value going forward and thanks returning. Miho points to the flow with a question card. Warm cream, green, and coral palette, no greed, no rich imagery, no ranking, no readable generated text.
```

Later text:

```text
お金は、価値が届いたことへの対価
```

---

## Slide 6: 価値変化カードを選ぶ

One message:

```text
カードを選ぶと、変化を考えやすくなる。
```

On-slide text:

```text
価値変化カードを1枚選ぼう
誰のBeforeを、どんなAfterに変える？
```

Speaker line:

```text
よい悪いを決めるカードではありません。考え始めるためのカードです。
```

Child action:

- `VT-01` から `VT-12` の中から気になるカードを1枚選ぶ。
- 「だれがそうなる？」を話す。

Card connection:

- 使用カード: `cards/value_transformation_cards.md`
- v2見た目: `cards/gamified_v2_card_sheet_spec.md`

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Card Table |
| 子供がすること | カードを選ぶ、並べる、話す |
| キャラクターの行動 | 子供2人がカードを机に広げ、ユウがメモする |
| 価値の変化 | 12種類のBefore/Afterから1つを選ぶ |
| ゲーム要素 | 選べるカード。ただしレア度や点数はない |
| 合格基準 | 子供がカードを1枚選び、具体的な人を言える |

Infographic prompt:

```text
Create a 16:9 card-table educational adventure infographic. Two middle-school students arrange colorful value-change cards on a wooden desk. Cards show icon-based before/after arrows such as trouble to helped, annoying to easy, boring to fun, confused to can-start, worried to a little relieved. No readable text is needed. Yuu writes notes beside them. The cards look useful and inviting, not like competitive trading cards. No rarity stars, no score, no battle stats, no logos. Leave clear space for later Japanese instruction text.
```

Later text:

```text
価値変化カードを1枚選ぼう
誰のBeforeを、どんなAfterに変える？
```

---

## Slide 7: 身近な仕事を調査する

One message:

```text
身近な仕事も、誰かの変化で見られる。
```

On-slide text:

```text
身近な仕事を1つ選ぶ
誰が、どう助かる？
```

Speaker line:

```text
ラーメン屋、コンビニ、塾、動画、部活でもOKです。
```

Child action:

- ワークシート2から仕事を1つ選ぶ。
- ワークシート3から5に、助かる人、Before、Afterを書く。
- 選んだ価値変化カードを横に置く。

Card connection:

- Slide 6で選んだカードを、ワークシートの仕事にあてはめる。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Detective Note |
| 子供がすること | 仕事を選ぶ、書く、カードを置く |
| キャラクターの行動 | ユウが町マップから1つの仕事を探し、ノートに写す |
| 価値の変化 | 身近な仕事のBefore/Afterを具体化する |
| ゲーム要素 | 町マップ、探偵ノート、選んだカード |
| 合格基準 | 子供が1つの仕事について、誰がどう助かるかを書ける |

Infographic prompt:

```text
Create a 16:9 detective-note infographic. Scene: a friendly town map and an open worksheet notebook on a desk. Everyday places appear as simple icons with no logos: ramen shop, convenience store, tutoring desk, delivery bicycle, game guide video screen, club coach. A selected value-change card is placed next to the notebook. Yuu draws a line from one town icon to blank before/after boxes. Warm, organized, middle-school friendly, no dense text, no brand names.
```

Later text:

```text
身近な仕事を1つ選ぶ
誰が、どう助かる？
```

---

## Slide 8: Final Mission

One message:

```text
自分の言葉で、価値を説明する。
```

On-slide text:

```text
仕事とは、＿＿を＿＿に変えること
価値とは、＿＿が変わること
```

Speaker line:

```text
今日選んだ仕事のBeforeとAfterを、そのまま入れてみましょう。
```

Child action:

- ワークシート7の一文を完成させる。
- 次回までに観察する仕事を1つ決める。

Card connection:

- 選んだ価値変化カードを、Final Missionの横に置く。
- カードは評価ではなく、今日見つけた見方の記録として扱う。

Visual Learning Check:

| Item | Design |
|---|---|
| 画面タイプ | Quest Log |
| 子供がすること | 一文を完成する、次の観察を決める |
| キャラクターの行動 | 子供2人がミッションシートに空欄を書き込む |
| 価値の変化 | 仕事をお金だけでなく、相手の変化で見られる |
| ゲーム要素 | クエストログ、今日選んだカード、次の観察マーカー |
| 合格基準 | 子供が「仕事とは、誰かのBeforeをAfterに変えること」と言える |

Infographic prompt:

```text
Create a 16:9 warm quest-log infographic. Yuu and two middle-school students write on a large mission sheet with two blank sentence lines. Their selected value-change card is placed beside the sheet. A small path marker points toward the next observation: home, school, town, or smartphone. Supportive ending mood, no trophy, no score, no ranking. Leave large blank space for Japanese fill-in text. Clean cream paper, navy headings, green and coral accents.
```

Later text:

```text
仕事とは、＿＿を＿＿に変えること
価値とは、＿＿が変わること
```

---

## Optional Slide 9: 次回までの観察

Use only when running a 60min version or when the final observation needs one more screen.

One message:

```text
次は、日常の中で価値を見つける。
```

On-slide text:

```text
次回までの観察
家・学校・街・スマホで
誰かが助かっている仕事を1つ見つける
```

Infographic prompt:

```text
Create a 16:9 closing observation-map infographic. A student carries a value detective notebook through four everyday zones: home, school, town, and smartphone screen. Each zone has one small blank clue card for later notes. The mood is calm and curious, not homework pressure. Original characters only, no logos, no brand apps, no dense text.
```

Later text:

```text
家・学校・街・スマホで
誰かが助かっている仕事を1つ見つける
```

## Review Checklist

- `02_SOURCE_OF_TRUTH.md` と矛盾していない。
- 「起業しなければいけない」という圧がない。
- 会社員への不安を煽っていない。
- 1枚1メッセージになっている。
- 子供が各画面で何をするかが明確である。
- キャラクターがページごとに行動している。
- カードが飾りではなく、選ぶ、並べる、話す行動を進めている。
- 親が採点者やゲームマスターになっていない。
- 価値が人のBefore/Afterとして見える。
- 既存作品、既存キャラクター、特定絵柄の模倣指示がない。
