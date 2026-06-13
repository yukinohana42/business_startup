# TODO

## Current Next Task

Codexは、docs-onlyで要件定義、全体構成、成果物仕様、QAレビュー、ワークシート、親向け説明スライド、子供向けスライド、インフォグラフィックprompt、進行台本、カード教材を整えた。

次は、人間がMarkdown内容を確認する。
確認後に、PDF、PPTX、PNG、HTML/CSSなどの出力へ進む。

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
- [ ] A4 PDF化前提のレイアウト確認をする。
- [ ] Zoom画面共有用の16:9レイアウトを確認する。
- [ ] 親向け説明スライドをPowerPointまたはPDFに変換する手順を作る。

## Review Notes

- 全成果物の整合性レビューは `docs/qa_review.md` に記録した。
- 教材本文の強い禁止表現はやわらかい説明に直した。
- ワークシートに「短い言葉でOK」「わからないと書いてOK」の方針を追加した。
- 親向け説明スライドに、伴走者としての問いと採点しない見方を追記した。
- 子供向けスライドの用語を「価値探偵」「欲しいサイン」中心に整えた。
- インフォグラフィックpromptに、Later text、保存先、共通レビュー観点を追加した。
- 4日分の親向け進行台本を追加した。
- 価値変化、価値の種、助けたい人、欲しいサイン、ピッチ質問のカード教材を追加した。
- 禁止表現は、固定情報源の禁止リストとしては残っている。
- 生成物ファイルの混入は見つからない。

## Safety Checks Before Commit

- [x] `02_SOURCE_OF_TRUTH.md` と矛盾していない。
- [x] docs-only作業に画像生成物、PDF、PPTX、ブラウザプロファイルが混ざっていない。
- [x] `.env`, Cookie, Login Data, Cache, Crashpad dump, 秘密情報を含めていない。
- [x] `git add .` を使っていない。
- [x] 既存作品、既存キャラクター、特定絵柄の模倣指示がない。

## 次にCodexへ依頼するとよいタスク

1. 人間がMarkdown内容を確認してください。
2. A4印刷用PDF化の前に、余白と記入欄の大きさを確認してください。
3. Zoom画面共有用の16:9表示を確認してください。
4. その後にPDF/PPTX/PNG化へ進んでください。
