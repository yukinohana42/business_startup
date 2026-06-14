# TODO

## Current Next Task

Codexは、docs-onlyで要件定義、全体構成、成果物仕様、QAレビュー、ワークシート、親向け説明スライド、子供向けスライド、インフォグラフィックprompt、進行台本、カード教材を整えた。
内容確認後、GitHub接続と確認用HTML/PDF生成まで進めた。
さらに、v1を残したまま、子供向けのワクワク感を強めるgamified v2のビジュアル方針、画像生成prompt、カードアートprompt、スライド対応表を追加した。
子供向けDay1 v2の候補画像の雰囲気に合わせて、親向け説明用のgamified v2 prompt packetも追加した。
さらに、相手の親に最初に見せる1枚案内書として、4日間の目的、流れ、進め方、最終目標、安心ポイントがわかる親向けone-page plan infographic promptを追加した。
加えて、1日目から4日目までの各日の目的とやることが1枚でわかる親向けfour-day overview infographic promptを追加した。
家のPCのCodexで再開するための初回貼り付けpromptを `prompts/HOME_CODEX_RESUME_PROMPT.md` に追加した。

次は、親向けgamified v2の方向性を人間が確認する。
確認後、まず親向けone-page plan infographicとfour-day overview infographicを1枚ずつ生成し、相手の親に伝わるかを確認する。
問題なければ、残りの親向け画像生成、子供向け残り画像生成、PPTX/PNG化へ進む。

## Priority 1: 固定情報源の確定

- [x] `01_PROJECT_REQUIREMENTS.md` を確認し、docs-onlyフェーズと人間確認ゲートを追記する。
- [x] `02_SOURCE_OF_TRUTH.md` を確認する。
- [x] `03_FOUR_DAY_CURRICULUM.md` を4日間版として確認する。
- [x] 旧構成の記述が残っていないか検索する。5日版などの実体は見つからない。
- [x] `04_DELIVERABLES_SPEC.md` を確認し、生成フェーズと成果物範囲を追記する。
- [x] `docs/overall_structure.md` を確認し、現状、次作業、作業順序を追記する。
- [x] `MANIFEST.md` を更新する。

## Priority 2: 必須成果物のMarkdown化

- [x] `docs/overall_structure.md` を実施可能な説明資料に整える。
- [x] `docs/qa_review.md` を追加し、全成果物の整合性レビュー結果を残す。
- [x] `worksheets/` の4日分をA4印刷前提で整える。
- [x] `slides/parents/parent_explanation_slides.md` を親向け10分説明用に整える。
- [x] `slides/kids/day*_lecture_slides.md` を各日45分実施用に整える。
- [x] `infographics/` のprompt packetを、スライド代替として使えるように整える。

## Priority 3: 実施用パッケージ化

- [x] 各日の進行台本を追加する。
- [x] 30分版、45分版、60分版の時間調整を追加する。
- [x] カード教材5種を追加する。
- [x] A4 PDF化前提の確認用HTML/PDFを生成する。
- [x] Zoom画面共有用の16:9確認用HTML/PDFを生成する。
- [x] 親向け説明スライドをPDFに変換する。
- [ ] 生成したHTML/PDFを人間が目視確認する。
- [ ] 親向け説明スライドをPowerPointに変換する。
- [ ] 子供向けスライドをPowerPointまたはPNGに変換する。

## Priority 4: Gamified v2

- [x] v1を残したまま、gamified v2のビジュアル方針を追加する。
- [x] 子供向けgamified v2インフォグラフィックprompt packetを追加する。
- [x] 親向けgamified v2インフォグラフィックprompt packetを追加する。
- [x] 親向けone-page plan infographic promptを追加する。
- [x] 親向けfour-day overview infographic promptを追加する。
- [x] 家のPCのCodexで再開するためのpromptを追加する。
- [x] カードアート用gamified v2 prompt packetを追加する。
- [x] v2スライド化の対応表を追加する。
- [x] v2カード台紙仕様を追加する。
- [ ] gamified v2の方向性を人間が確認する。
- [ ] 親向けgamified v2の方向性を人間が確認する。
- [ ] 親向けone-page plan infographic画像を1枚生成して候補に置く。
- [ ] 親向けfour-day overview infographic画像を1枚生成して候補に置く。
- [ ] 画像を1枚ずつ生成して候補に置く。
- [ ] 画像候補を人間が確認する。
- [ ] 確認済み画像をPPTX/PNG/カード台紙へ組み込む。

## Review Notes

- 全成果物の整合性レビューは `docs/qa_review.md` に記録した。
- 教材本文の強い禁止表現はやわらかい説明に直した。
- ワークシートに「短い言葉でOK」「わからないと書いてOK」の方針を追加した。
- 親向け説明スライドに、伴走者としての問いと採点しない見方を追記した。
- 子供向けスライドの用語を「価値探偵」「欲しいサイン」中心に整えた。
- インフォグラフィックpromptに、Later text、保存先、共通レビュー観点を追加した。
- 4日分の親向け進行台本を追加した。
- 価値変化、価値の種、助けたい人、欲しいサイン、ピッチ質問のカード教材を追加した。
- `tools/export_materials.cjs` を追加し、確認用HTML/PDFを `deliverables/v1/` に生成した。
- GitHub remoteは `https://github.com/yukinohana42/business_startup.git` に接続した。
- gamified v2は、既存作品をまねず、冒険、収集、カード、修行、レーダーなどの一般的な構造だけを使う方針にした。
- gamified v2の画像promptでは、既存作品名、既存キャラクター名、特定絵柄を入れないルールを明記した。
- 親向けgamified v2では、子供向けDay1画像のカード・ノート調に合わせつつ、親を採点者ではなく伴走者として見せる方針にした。
- 親向けone-page plan infographicでは、相手の親が今回の取り組みを知らなくても、目的、4日間の流れ、進め方、最終目標、安心ポイントが1枚でわかるようにした。
- 親向けfour-day overview infographicでは、各日の目的とやることを、Day1からDay4まで1枚で見られるようにした。
- 禁止表現は、固定情報源の禁止リストとしては残っている。
- PPTXとPNGはまだ生成していない。

## Safety Checks Before Commit

- [x] `02_SOURCE_OF_TRUTH.md` と矛盾していない。
- [x] docs-only初回commitに画像生成物、PDF、PPTX、ブラウザプロファイルが混ざっていない。
- [x] 次工程として生成したPDF/HTMLは `deliverables/v1/` に分けている。
- [x] `.env`, Cookie, Login Data, Cache, Crashpad dump, 秘密情報を含めていない。
- [x] `git add .` を使っていない。
- [x] 既存作品、既存キャラクター、特定絵柄の模倣指示がない。
- [x] gamified v2でも競争、ランキング、点数化に寄せていない。

## 次にCodexへ依頼するとよいタスク

1. `docs/gamified_visual_v2_direction.md` の方向性を確認してください。
2. `infographics/parents_one_page_plan_infographic.md` を使って、親向け1枚案内書を画像生成してください。
3. `infographics/parents_four_day_overview_infographic.md` を使って、4日間の中身がわかる親向け1枚を画像生成してください。
4. 画像候補の雰囲気を確認してください。
5. 問題なければ、残りの親向け画像、子供向け画像、PPTX/PNG化へ進んでください。
