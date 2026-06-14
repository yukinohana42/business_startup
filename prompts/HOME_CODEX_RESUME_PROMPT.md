# HOME_CODEX_RESUME_PROMPT

家のPCのCodexで作業を再開するとき、最初に次のプロンプトを貼る。

```text
C:\business_startup の続きです。

まず、このプロジェクトのルールに従ってください。

1. 最初に 02_SOURCE_OF_TRUTH.md を読んでください。
2. 次に 01_PROJECT_REQUIREMENTS.md を読んでください。
3. 作業前に project root、branch、HEAD、worktree status、remote URL を確認してください。
4. 02_SOURCE_OF_TRUTH.md を最優先してください。
5. mainには直接作業しないでください。作業ブランチは feat/gamified-visual-v2 です。
6. git add . は使わず、変更したファイルだけを明示してstageしてください。
7. 画像、PDF、PPTX、HTML/CSS、Markdown文書を混ぜた大きなcommitにしないでください。
8. ブラウザプロファイル、Cookie、Login Data、Cache、Crashpad dump、.env、秘密情報はcommitしないでください。

今の状況:

- v1教材は残したまま、gamified v2の方向性を追加済みです。
- 子供向けDay1 v2画像候補は、ユーザーが別途Downloadsに持っています。
- その雰囲気に合わせて、親向けの説明画像promptを追加済みです。
- 親向けでまず作りたいのは、次の2枚です。

優先して使うファイル:

1. infographics/parents_one_page_plan_infographic.md
   - 相手の親に最初に見せる1枚案内書。
   - 目的、4日間の流れ、進め方、最終目標、安心ポイントを1枚で伝える。

2. infographics/parents_four_day_overview_infographic.md
   - 1日目、2日目、3日目、4日目に何をやるのか。
   - 各日の目的は何か。
   - 親向けに1枚で説明する。

3. infographics/parents_gamified_v2_prompt_packets.md
   - 親向け説明を複数枚に分ける場合のprompt packet。

次にやること:

1. まず infographics/parents_one_page_plan_infographic.md の内容を確認してください。
2. 次に infographics/parents_four_day_overview_infographic.md の内容を確認してください。
3. 画像生成に進む場合は、候補画像を必ず candidates/ に置いてください。
   - assets/generated/gamified_v2/parents/one_page_plan/candidates/
   - assets/generated/gamified_v2/parents/four_day_overview/candidates/
4. 人間レビュー前に final/ へ置かないでください。
5. 既存漫画、アニメ、ゲーム、映画、ブランド、特定作家の絵柄はまねないでください。
6. 親は先生、採点者、ゲームマスターではなく、問いを出す伴走者として見せてください。
7. 「起業しなければいけない」「会社員は危ない」「サラリーマンは終わり」など、不安を煽る表現は使わないでください。
8. 日本語本文は画像生成に任せすぎず、後載せ前提で正確に扱ってください。

作りたい見た目:

- 添付済みの子供向けDay1 v2画像と同じ、温かいカード・ノート調。
- クリーム色の紙、木の机、カード、ノート、付箋、鉛筆。
- やわらかいネイビー、コーラル、グリーン、あたたかい黄色。
- 親向けなので、ゲーム感は少し抑え、落ち着いた案内書にする。

最後に、作業後は次を確認してください。

- 02_SOURCE_OF_TRUTH.md と矛盾していないか。
- 親向けの落ち着いた説明になっているか。
- 子供向けと親向けのトーンが混ざっていないか。
- TODO.md に次に直すことを書いたか。
- docs-only commitに画像生成物、PDF、PPTX、ブラウザプロファイルが混ざっていないか。
```
