# 04_DELIVERABLES_SPEC

## 成果物一覧

このプロジェクトでは、次の成果物を必須とする。

| 区分 | 必須成果物 | 推奨ファイル | 形式 |
|---|---|---|---|
| 全体設計 | 全体の構成をまとめたもの | `docs/overall_structure.md` | Markdown |
| 子供用 | ワークシート | `worksheets/*.md` | Markdown。将来A4 PDF化 |
| 親用 | 親に今回の試みを説明するスライド | `slides/parents/parent_explanation_slides.md` | Markdown slide原稿 |
| レクチャー用 | 子供向けレクチャースライド | `slides/kids/day*_lecture_slides.md` | Markdown slide原稿 |
| 代替/補助 | インフォグラフィック生成prompt packet | `infographics/*.md` | Markdown prompt |
| Codex用 | 作業ルールとSkill | `AGENTS.md`, `.agents/skills/*/SKILL.md` | Markdown |

## 0. 生成フェーズの分け方

成果物は、次の順で進める。

1. Markdownで内容を整える。
2. 人間が内容を確認する。
3. 必要に応じて、PDF、PPTX、PNG、HTML/CSSへ展開する。

現在の作業対象は1である。

この段階では、画像、PDF、PPTX、PNG、HTML/CSSを生成しない。
画像生成用のprompt packetはMarkdownとして作る。

## 1. 全体の構成をまとめたもの

### 目的

プロジェクトの全体像を、ユーザー、親、Codex、他のAIが同じ理解で参照できるようにする。

### 必須内容

- プロジェクトの目的。
- 対象者。
- 4日間の流れ。
- 各日のテーマ、ゴール、主なワーク、成果物。
- 親の役割。
- セミナー本番との接続。
- 使用する教材一覧。
- 禁止表現。
- 成功条件。

### 合格基準

- 4日間構成に統一されている。
- ユーザーが初めて見ても、何を作るプロジェクトかわかる。
- Codexが次に何を作ればよいかわかる。
- 既存ファイル、未作成ファイル、次の作業順序がわかる。

## 2. 子供たちがワークに使うワークシート

### 目的

子供が考えを見える形にし、4日間の学びを積み上げられるようにする。

### 必須ファイル

- `worksheets/day1_value_detective_worksheet.md`
- `worksheets/day2_problem_hunter_worksheet.md`
- `worksheets/day3_idea_pmf_experiment_worksheet.md`
- `worksheets/day4_pitch_reflection_worksheet.md`
- `worksheets/all_days_workbook.md`

### 現段階の完成範囲

Markdownで、設問、記入欄、例、次の行動を整える。
A4 PDF化の細かい余白確認は、人間確認後の次フェーズで行う。

### 設計ルール

- A4印刷を想定する。
- 書く量は多すぎない。
- 1つの欄は短い言葉で書けるようにする。
- 「わからない」と書いてよい欄を入れる。
- 最後に「次に試すこと」または「次に聞くこと」を入れる。
- 仕事、価値、お金、PMFなどの言葉は、中学生向けに言い換える。
- 事業計画書のようにしない。

### 各日のワークシート要件

#### Day1

- 身近な仕事を選ぶ欄。
- 助かる人を書く欄。
- Before/Afterを書く欄。
- 「仕事とは、＿＿を＿＿に変えること」完成欄。

#### Day2

- 困った、面倒、好き、欲しい気持ちを書き出す欄。
- 誰が困っているかを書く欄。
- 今どうしているかを書く欄。
- 一番気になる価値の種を選ぶ欄。

#### Day3

- 具体的な相手を書く欄。
- 問題を書く欄。
- 解決案を3つ書く欄。
- 欲しいサインを書く欄。
- 小さな実験を書く欄。
- 赤信号なら変えるところを書く欄。

#### Day4

- 3分ピッチの型。
- 聞き手メモ。
- 改善メモ。
- セミナー本番で注目すること。

## 3. 親に今回の試みを説明するスライド

### 目的

親が、この取り組みを「起業の押し付け」ではなく、「価値を見つけ、小さく試す力を育てる事前学習」と理解できるようにする。

### 推奨枚数

8〜12枚。

### 推奨構成

1. タイトル: これは起業を押し付ける授業ではありません。
2. なぜやるのか: セミナー本番を楽しく深くするため。
3. 子供に身につけてほしい力。
4. 価値とは、相手の変化。
5. お金とは、価値が届いた対価。
6. 4日間の流れ。
7. 親の役割。
8. OK/NG声かけ。
9. ワークシートと発表の扱い。
10. 終わった後に見たい変化。
11. よくある不安への答え。
12. まとめ。

### トーン

- 落ち着いた説明。
- 不安を煽らない。
- 子供を評価しない。
- 親がすぐ使える問いを入れる。

### 現段階の完成範囲

Markdown slide原稿として、8〜12枚の内容を整える。
PPTX化やPDF化は、この原稿を人間が確認した後に行う。

## 4. レクチャー時に使う子供向けスライド

### 目的

子供が4日間の各回で、短い問いと身近な例を通じて、価値提供、価値の種、欲しいサイン、小さな実験、ピッチを理解する。

### 必須ファイル

- `slides/kids/day1_lecture_slides.md`
- `slides/kids/day2_lecture_slides.md`
- `slides/kids/day3_lecture_slides.md`
- `slides/kids/day4_lecture_slides.md`

### 推奨枚数

各日8〜12枚。

### スライドルール

- 1スライド1メッセージ。
- 見出しは短くする。
- 本文は3〜5行まで。
- 問いを入れる。
- ワーク指示を明確にする。
- 親が話す補足はスライドではなく台本に置く。
- Zoom画面共有で読める文字量にする。

### 現段階の完成範囲

Markdown slide原稿として、各日8〜12枚に整える。
実際の16:9表示、PPTX化、PDF化は、人間確認後の次フェーズで行う。

## 5. インフォグラフィックprompt packet

### 目的

スライド生成が難しい場合に、画像生成でわかりやすい補助教材を作る。

### 必須内容

- 画面サイズ: 16:9を基本。
- 1ページ1メッセージ。
- 1テーマ4〜6枚。
- 日本語本文は短くする。正確な文章は後編集で載せる。
- 文字なし版、文字あり版の両方を想定してpromptを書く。
- 既存作品や特定絵柄を模倣しない。
- 完全オリジナルキャラクターを使う。
- Before/After、カード、探偵ノート、実験メモなどの視覚要素を使う。

### 現段階の完成範囲

Markdownでprompt packetを整える。
画像は生成しない。

各promptには、次を入れる。

- ページの目的。
- 1ページのメッセージ。
- キャラクターの行動。
- 見せたいBefore/After。
- 図解要素。
- 後編集で載せる日本語本文。
- 既存IPや特定絵柄を避けるnegative prompt。

## 5.1 進行台本

### 目的

親が当日そのまま進められるようにする。
親が話しすぎず、子供に問いを返せるようにする。

### 推奨ファイル

- `scripts/day1_facilitator_script.md`
- `scripts/day2_facilitator_script.md`
- `scripts/day3_facilitator_script.md`
- `scripts/day4_facilitator_script.md`

### 現段階の完成範囲

Markdown版を作成済み。
PDFやPPTXへ変換する前の実施補助として使う。

## 5.2 カード教材

### 目的

子供が選び、並べ、組み合わせて考えるために使う。

### 推奨ファイル

- `cards/value_transformation_cards.md`
- `cards/value_seed_cards.md`
- `cards/customer_cards.md`
- `cards/want_signal_cards.md`
- `cards/pitch_question_cards.md`

### 現段階の完成範囲

Markdown版を作成済み。
カードは評価や点数化には使わない。

## 6. フォルダ構成

Codexは、次の構成を基本にする。

```text
.
├── README.md
├── 00_CODEX_START_HERE.md
├── 01_PROJECT_REQUIREMENTS.md
├── 02_SOURCE_OF_TRUTH.md
├── 03_FOUR_DAY_CURRICULUM.md
├── 04_DELIVERABLES_SPEC.md
├── 05_ACCEPTANCE_CRITERIA.md
├── AGENTS.md
├── DESIGN.md
├── TODO.md
├── MANIFEST.md
├── docs/
│   ├── overall_structure.md
│   ├── glossary_for_middle_school.md
│   ├── parent_role_guide.md
│   ├── visual_learning_system.md
│   └── image_generation_manual_handoff.md
├── scripts/
│   ├── day1_facilitator_script.md
│   ├── day2_facilitator_script.md
│   ├── day3_facilitator_script.md
│   └── day4_facilitator_script.md
├── worksheets/
│   ├── README.md
│   ├── day1_value_detective_worksheet.md
│   ├── day2_problem_hunter_worksheet.md
│   ├── day3_idea_pmf_experiment_worksheet.md
│   ├── day4_pitch_reflection_worksheet.md
│   └── all_days_workbook.md
├── slides/
│   ├── kids/
│   │   ├── README.md
│   │   ├── day1_lecture_slides.md
│   │   ├── day2_lecture_slides.md
│   │   ├── day3_lecture_slides.md
│   │   └── day4_lecture_slides.md
│   └── parents/
│       └── parent_explanation_slides.md
├── infographics/
│   ├── README.md
│   ├── visual_prompt_style_guide.md
│   ├── kids_infographic_prompt_packets.md
│   └── parents_infographic_prompt_packets.md
├── cards/
│   ├── card_system_spec.md
│   ├── value_transformation_cards.md
│   ├── value_seed_cards.md
│   ├── customer_cards.md
│   ├── want_signal_cards.md
│   └── pitch_question_cards.md
├── prompts/
│   ├── CODEX_MASTER_PROMPT.md
│   ├── TASK_01_GENERATE_CORE_DOCS.md
│   ├── TASK_02_GENERATE_WORKSHEETS.md
│   ├── TASK_03_GENERATE_PARENT_SLIDES.md
│   ├── TASK_04_GENERATE_KIDS_SLIDES_OR_INFOGRAPHICS.md
│   └── TASK_05_REVIEW_AND_FIX.md
└── .agents/
    └── skills/
        └── */SKILL.md
```

`scripts/` と具体カードファイルは、Markdown版を追加済みである。
印刷や画面共有の見え方は、次フェーズで確認する。

## 7. 人間確認後に進める出力

次の出力は、Markdown内容の確認後に行う。

- A4印刷用PDF。
- 親向けPPTX。
- 子供向けPPTX。
- インフォグラフィックPNG。
- HTML/CSS版。

これらを作る前に、次を確認する。

- 内容が `02_SOURCE_OF_TRUTH.md` と矛盾しない。
- 子供向けと親向けのトーンが混ざっていない。
- 画像promptが既存作品や特定絵柄を模倣していない。
- 親が先生、採点者、ゲームマスターになっていない。
