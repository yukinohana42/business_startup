# Parent Four-day Overview Infographic

## Purpose

相手の親に、1日目から4日目までに何をやるのか、各日の目的は何かを1枚で伝える親説明向けinfographic promptである。

前の `parents_one_page_plan_infographic.md` は、今回の取り組み全体を案内する1枚である。
このファイルは、その次に見せる「4日間の中身がわかる1枚」である。

## What This Page Must Communicate

- Day1からDay4までの流れ。
- 各日に何をするか。
- 各日の目的。
- 子供が最後に何を言えるようになるか。
- 親は採点者ではなく、問いを出す伴走者であること。

## Layout Concept

- 16:9 landscape。
- 上部: タイトルと短い説明。
- 中央: 4つの大きなDayカードを横並び、または2x2で配置。
- 各Dayカードには、次を入れる。
  - Day番号。
  - 目的。
  - やること。
  - 子供に残したい一言。
- 下部: 親の関わり方を短くまとめる。
- 背景はクリーム色の紙と木の机。
- 子供向けDay1 v2画像と同じ、カード・ノート・付箋・鉛筆の世界観にする。
- 親向けなので、余白を広くし、落ち着いて読める構成にする。

## Image Prompt

```text
Create a 16:9 parent-facing four-day workshop overview infographic in a warm Japanese educational card-and-notebook style. Use a cream paper background and light wooden table, with four large clipped day cards, notebooks, sticky notes, pencils, soft shadows, navy title labels, coral arrows, green reassurance accents, and warm yellow hint icons.

The page explains what happens on Day1, Day2, Day3, and Day4 for parents who want to understand the plan. It should feel like a calm curriculum overview sheet, not a game screen, not a marketing flyer, and not a dense school timetable.

Composition:
- Top wide title area with clean empty space for later Japanese title and subtitle.
- Center: four large day cards arranged left to right or in a clean 2x2 grid.
- Day1 card visual: magnifying glass, work card, money token, before/after value-change arrow.
- Day2 card visual: daily life map, glowing value seeds, cards for trouble, annoying, like, want.
- Day3 card visual: person card, problem card, change card, small paper prototype, signal radar.
- Day4 card visual: mini pitch stage, value-change board, question cards, supportive listeners.
- Bottom strip: parent role card with question cards and a calm parent listening beside two students.

Characters:
- Original Japanese parent and two middle-school students.
- Parent appears only as a calm supporter asking questions, not as a teacher, judge, or game master.
- Students are choosing cards, writing short notes, talking together, and preparing a small pitch.
- No teacher podium, no red pen grading, no judge table.

Style:
- Warm cream, soft navy, coral, green, and warm yellow.
- Gentle cel-shaded and watercolor texture mix.
- Clean readable layout with large blank text areas.
- Parent-friendly, trustworthy, organized, and not childish.
- Japanese text will be added later in layout. Do not rely on generated text.
```

## Negative Prompt

```text
No existing anime, manga, game, movie, logo, brand, mascot, or character. No imitation of a specific artist or franchise style. No recognizable character silhouette, outfit, symbol, creature, logo, or power effect from an existing work. No ranking, score, trophy, battle victory, money worship, fear-based career imagery, teacher podium, judge table, red pen grading, parent as game master, parent controlling the child, forced entrepreneurship message, or mocking of people who are struggling. No dense generated text.
```

## Later Text

画像生成後、次の日本語を後載せする。
4つのDayカードに入れるので、短くする。

```text
4日間でやること
何をして、何を身につけるか

Day1 価値を見る
目的
仕事・お金・価値のつながりを見る。
やること
身近な仕事を選び、誰がどう助かるかを考える。
残したい一言
仕事は、誰かの状態を少し良くすること。

Day2 種を見つける
目的
日常の中から価値の種を探す。
やること
困った、面倒、好き、欲しいを書き出す。
残したい一言
価値の種は、ふだんの生活の中にある。

Day3 小さく試す
目的
具体的な誰かに向けて、アイデアを形にする。
やること
誰の何をどう変えるかを決め、最初の小さな実験を考える。
残したい一言
完璧に作る前に、小さく試せばよい。

Day4 3分で伝える
目的
価値の変化を短く伝える。
やること
誰が、何に困り、どう変わるかを3分で話す。
残したい一言
ピッチは、すごさ自慢ではなく、相手の変化を伝えること。

親の関わり方
答えを教えるより、問いで伴走します。
採点せず、競争させず、小さな発見を見ます。
```

## Shorter Text Option

文字が多く見える場合は、次の短縮版を使う。

```text
4日間でやること

Day1 価値を見る
身近な仕事から、
誰がどう助かるかを見る。

Day2 種を見つける
困った、面倒、好き、欲しいから、
価値の種を探す。

Day3 小さく試す
誰の何をどう変えるかを決め、
小さな実験を考える。

Day4 3分で伝える
相手のBefore/Afterを、
短く話す。

親は問いで伴走します。
採点せず、競争させず、
小さな発見を見ます。
```

## Save Location

候補画像は、次に保存する。

```text
assets/generated/gamified_v2/parents/four_day_overview/candidates/
```

人間レビュー前に `final/` へ置かない。

## Review Checklist

- 1日目、2日目、3日目、4日目に何をやるのかが一目でわかるか。
- 各日の目的が親に伝わるか。
- 「何をする日か」と「何のための日か」が混ざらず見えるか。
- 4日間の流れが、価値を見る、種を見つける、小さく試す、伝える、になっているか。
- 起業を押し付ける印象がないか。
- 親が先生、採点者、ゲームマスターに見えないか。
- 子供が選ぶ、書く、話す、試す、伝える行動をしているか。
- 競争、ランキング、点数化に見えないか。
- 画像内の日本語本文を生成に任せすぎていないか。
- 添付Day1 v2画像と同じ温かいカード・ノート調に見えるか。
