# Codex Handoff Package: 4日間・中学2年生向け「価値を見つける」事前ワークショップ

このパッケージは、Codexにプロジェクトを準備させるための固定情報源です。

対象は中学2年生の子供2人です。起業セミナーに参加する前に、家庭内またはZoomで4日間の事前ワークショップを行い、セミナー本番で学びを深められる状態を作ります。

## 最初に読む順番

1. `00_CODEX_START_HERE.md`
2. `01_PROJECT_REQUIREMENTS.md`
3. `02_SOURCE_OF_TRUTH.md`
4. `03_FOUR_DAY_CURRICULUM.md`
5. `04_DELIVERABLES_SPEC.md`
6. `05_ACCEPTANCE_CRITERIA.md`
7. `AGENTS.md`
8. `DESIGN.md`
9. `.agents/skills/*/SKILL.md`

## このパッケージで固定すること

- 全日程は4日間。
- 1回30〜60分。基本版は45分で設計する。
- 起業を押し付けない。
- 働き方への不安を煽らない。
- 仕事、お金、価値を「相手の変化」として理解させる。
- 子供が楽しい、自分ごとだと思える発見ゲーム型のワークにする。
- 親は先生でも採点者でもなく、問いを出す伴走者として関わる。

## 必須成果物

Codexは、最終的に次の成果物をプロジェクト内に必ず作ること。

1. 全体の構成をまとめたもの
2. 子供たちがワークに使うワークシート
3. 親に今回の試みを説明するスライド
4. レクチャー時に使う子供向けスライド

スライド生成が難しい場合は、数枚構成のインフォグラフィック用プロンプトを代替成果物として作る。ただし、1枚に詰め込まない。Zoom画面共有で読めることを優先する。

## このパッケージ内に含めた初期ドラフト

- `docs/overall_structure.md`: 全体構成の初期版
- `worksheets/`: 4日分のワークシート初期版
- `slides/parents/parent_explanation_slides.md`: 親向け説明スライド初期版
- `slides/kids/`: 4日分のレクチャースライド初期版
- `infographics/`: スライド代替用のインフォグラフィックprompt packet
- `docs/gamified_visual_v2_direction.md`: より冒険感のあるv2ビジュアル方針
- `slides/kids/gamified_v2_slide_storyboard.md`: v2スライド化の対応表
- `scripts/`: 4日分の親向け進行台本
- `cards/`: ワークで使うカード教材
- `.agents/skills/`: Codex用の詳細Skill定義
- `prompts/`: Codexに順番に依頼するためのタスクプロンプト

## 作業方針

まずはMarkdownで内容を固定する。PDF、PPTX、PNG、HTML/CSSへの変換は、内容レビュー後に行う。

教材生成物とdocs-only作業は分ける。画像生成を行う場合は、まずprompt packetを作り、人間が確認してから1枚ずつ進める。
v2の画像生成では、既存作品名、既存キャラクター名、特定絵柄をpromptに入れない。
