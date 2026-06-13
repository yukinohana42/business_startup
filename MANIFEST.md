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
- `slides/parents/parent_explanation_slides.md`

### infographics

- `infographics/README.md`
- `infographics/visual_prompt_style_guide.md`
- `infographics/kids_infographic_prompt_packets.md`
- `infographics/parents_infographic_prompt_packets.md`

### cards

- `cards/card_system_spec.md`
- `cards/value_transformation_cards.md`: 価値変化カード。
- `cards/value_seed_cards.md`: 価値の種カード。
- `cards/customer_cards.md`: 助けたい人カード。
- `cards/want_signal_cards.md`: 欲しいサインカード。
- `cards/pitch_question_cards.md`: ピッチ質問カード。

### prompts

- `prompts/CODEX_MASTER_PROMPT.md`
- `prompts/TASK_01_GENERATE_CORE_DOCS.md`
- `prompts/TASK_02_GENERATE_WORKSHEETS.md`
- `prompts/TASK_03_GENERATE_PARENT_SLIDES.md`
- `prompts/TASK_04_GENERATE_KIDS_SLIDES_OR_INFOGRAPHICS.md`
- `prompts/TASK_05_REVIEW_AND_FIX.md`

### tools

- `tools/export_materials.cjs`: Markdown教材から確認用HTML/PDFを生成するスクリプト。
- `tools/README.md`: 生成スクリプトの使い方。

### deliverables

- `deliverables/v1/index.html`: 生成済み成果物一覧。
- `deliverables/v1/README.md`: 生成済み成果物の説明。
- `deliverables/v1/html/a4/`: A4印刷向けHTML。
- `deliverables/v1/pdf/a4/`: A4印刷向けPDF。
- `deliverables/v1/html/slide/`: 16:9画面共有向けHTML。
- `deliverables/v1/pdf/slide/`: 16:9画面共有向けPDF。

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
- Git repository was initialized and connected to `https://github.com/yukinohana42/business_startup.git`.
- HTML/PDF deliverables were generated under `deliverables/v1/` after human content confirmation.

## Safety Notes

- No generated image files are included.
- HTML/PDF output files are included under `deliverables/v1/`.
- No PPTX files are included yet.
- No PNG files are included yet.
- No secrets, browser profiles, cache, cookies, or environment files are included.
- No existing IP imitation instructions are included.
