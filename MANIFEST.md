# MANIFEST

## Package

`codex_handoff_4day_value_workshop/`

## Purpose

Codexに4日間版の中学2年生向け「価値を見つける」事前ワークショップを準備させるための固定情報源、成果物ドラフト、Skill定義、タスクプロンプトをまとめたもの。

## Files

### Root

- `README.md`: パッケージ概要。
- `00_CODEX_START_HERE.md`: Codexが最初に読む入口。
- `01_PROJECT_REQUIREMENTS.md`: 要件定義書。
- `02_SOURCE_OF_TRUTH.md`: 絶対にぶらさない思想。
- `03_FOUR_DAY_CURRICULUM.md`: 4日間カリキュラム。
- `04_DELIVERABLES_SPEC.md`: 成果物仕様。
- `05_ACCEPTANCE_CRITERIA.md`: 受け入れ基準。
- `AGENTS.md`: Codex作業ルール。
- `DESIGN.md`: デザイン方針。
- `TODO.md`: 次タスク。
- `MANIFEST.md`: このファイル。

### docs

- `docs/overall_structure.md`: 全体構成。
- `docs/workshop_facilitation_principles.md`: 進行原則。
- `docs/glossary_for_middle_school.md`: 中学生向け用語集。
- `docs/parent_role_guide.md`: 親の役割ガイド。
- `docs/visual_learning_system.md`: 発見ゲーム型教材設計。
- `docs/image_generation_manual_handoff.md`: 画像生成手順。
- `docs/qa_review.md`: 全成果物の整合性レビュー結果。
- `docs/gamified_visual_v2_direction.md`: 子供向けv2の冒険感あるビジュアル方針。

### scripts

- `scripts/day1_facilitator_script.md`: Day1進行台本。
- `scripts/day2_facilitator_script.md`: Day2進行台本。
- `scripts/day3_facilitator_script.md`: Day3進行台本。
- `scripts/day4_facilitator_script.md`: Day4進行台本。

### worksheets

- `worksheets/README.md`
- `worksheets/day1_value_detective_worksheet.md`
- `worksheets/day2_problem_hunter_worksheet.md`
- `worksheets/day3_idea_pmf_experiment_worksheet.md`
- `worksheets/day4_pitch_reflection_worksheet.md`
- `worksheets/all_days_workbook.md`

### slides

- `slides/kids/README.md`
- `slides/kids/day1_lecture_slides.md`
- `slides/kids/day2_lecture_slides.md`
- `slides/kids/day3_lecture_slides.md`
- `slides/kids/day4_lecture_slides.md`
- `slides/kids/gamified_v2_slide_storyboard.md`: v2スライド化の対応表。
- `slides/parents/parent_explanation_slides.md`

### infographics

- `infographics/README.md`
- `infographics/visual_prompt_style_guide.md`
- `infographics/kids_infographic_prompt_packets.md`
- `infographics/parents_infographic_prompt_packets.md`
- `infographics/kids_gamified_v2_prompt_packets.md`: 子供向けgamified v2画像生成prompt。
- `infographics/parents_one_page_plan_infographic.md`: 相手の親に最初に見せる、4日間の目的・流れ・進め方・最終目標が1枚でわかる案内書prompt。
- `infographics/parents_four_day_overview_infographic.md`: 1日目から4日目まで、各日の目的とやることが1枚でわかる親向け説明prompt。
- `infographics/parents_gamified_v2_prompt_packets.md`: 子供向けDay1 v2画像と同じ温かいカード・ノート調で作る親向けgamified v2説明prompt。
- `infographics/card_art_gamified_v2_prompt_packets.md`: カードアート用gamified v2画像生成prompt。

### cards

- `cards/card_system_spec.md`
- `cards/value_transformation_cards.md`: 価値変化カード。
- `cards/value_seed_cards.md`: 価値の種カード。
- `cards/customer_cards.md`: 助けたい人カード。
- `cards/want_signal_cards.md`: 欲しいサインカード。
- `cards/pitch_question_cards.md`: ピッチ質問カード。
- `cards/gamified_v2_card_sheet_spec.md`: v2カード台紙仕様。

### prompts

- `prompts/CODEX_MASTER_PROMPT.md`
- `prompts/TASK_01_GENERATE_CORE_DOCS.md`
- `prompts/TASK_02_GENERATE_WORKSHEETS.md`
- `prompts/TASK_03_GENERATE_PARENT_SLIDES.md`
- `prompts/TASK_04_GENERATE_KIDS_SLIDES_OR_INFOGRAPHICS.md`
- `prompts/TASK_05_REVIEW_AND_FIX.md`
- `prompts/HOME_CODEX_RESUME_PROMPT.md`: 家のPCのCodexで作業を再開するための初回貼り付けprompt。

### skills

- `.agents/skills/workshop-requirements-keeper/SKILL.md`
- `.agents/skills/four-day-curriculum-designer/SKILL.md`
- `.agents/skills/facilitator-script-writer/SKILL.md`
- `.agents/skills/kids-slide-writer/SKILL.md`
- `.agents/skills/worksheet-designer/SKILL.md`
- `.agents/skills/parent-briefing-writer/SKILL.md`
- `.agents/skills/infographic-prompt-designer/SKILL.md`
- `.agents/skills/visual-storytelling-designer/SKILL.md`
- `.agents/skills/gamification-designer/SKILL.md`
- `.agents/skills/card-designer/SKILL.md`
- `.agents/skills/qa-reviewer/SKILL.md`
- `.agents/skills/codex-project-operator/SKILL.md`

## Source Notes

This package was rebuilt from the prior project context and user instruction, with the following changes:

- Standard schedule fixed to 4 days.
- Day3 combines idea creation, PMF, and small experiment design.
- Mandatory deliverables are explicit.
- Skill definitions are expanded into detailed `SKILL.md` files.
- Fear-based language about employment instability is reframed into reusable value-creation skills.
- Slides may be replaced or supported by multi-page infographic prompt packets.
- Core docs were refined for docs-only workflow, human review gates, and phased generation.
- QA review was added and child-facing wording was softened where needed.
- Facilitator scripts and concrete card sets were added as Markdown implementation support.
- Gamified v2 visual direction and image prompt packets were added while preserving v1.
- Gamified v2 uses original characters and general adventure/card/quest structures only; it does not request existing IP imitation.
- Parent-facing gamified v2 prompt packets were added with a calmer facilitator tone that matches the child-facing Day1 card-board visual style.
- A one-page parent plan infographic prompt was added so another parent can understand the purpose, 4-day flow, method, final goal, and reassurance points at a glance.
- A parent-facing four-day overview infographic prompt was added so each day's purpose and activity can be understood on one page.
- A home Codex resume prompt was added so the work can continue from another PC with the same branch, rules, and next tasks.

## Safety Notes

- No generated image files are included.
- No PDF or PPTX files are included.
- No PNG files are included.
- No HTML/CSS output files are included.
- Gamified v2 prompt packets are included, but no gamified v2 images have been generated yet.
- Parent-facing gamified v2 prompt packets are included, but no parent-facing gamified v2 images have been generated yet.
- No secrets, browser profiles, cache, cookies, or environment files are included.
- No existing IP imitation instructions are included.
