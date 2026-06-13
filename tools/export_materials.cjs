const fsSync = require("fs");
const fs = require("fs/promises");
const path = require("path");
const { marked } = require("marked");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "deliverables", "v1");

const nodePathHint =
  "Run with NODE_PATH pointing to the bundled Codex node_modules if local packages are not installed.";

function findBrowserExecutable() {
  const candidates = [
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ].filter(Boolean);

  return candidates.find((candidate) => fsSync.existsSync(candidate));
}

const groups = [
  {
    type: "a4",
    label: "A4 print materials",
    files: [
      "worksheets/day1_value_detective_worksheet.md",
      "worksheets/day2_problem_hunter_worksheet.md",
      "worksheets/day3_idea_pmf_experiment_worksheet.md",
      "worksheets/day4_pitch_reflection_worksheet.md",
      "worksheets/all_days_workbook.md",
      "cards/value_transformation_cards.md",
      "cards/value_seed_cards.md",
      "cards/customer_cards.md",
      "cards/want_signal_cards.md",
      "cards/pitch_question_cards.md",
    ],
  },
  {
    type: "slide",
    label: "16:9 slide handouts",
    files: [
      "slides/parents/parent_explanation_slides.md",
      "slides/kids/day1_lecture_slides.md",
      "slides/kids/day2_lecture_slides.md",
      "slides/kids/day3_lecture_slides.md",
      "slides/kids/day4_lecture_slides.md",
    ],
  },
  {
    type: "a4",
    label: "Facilitator scripts",
    files: [
      "scripts/day1_facilitator_script.md",
      "scripts/day2_facilitator_script.md",
      "scripts/day3_facilitator_script.md",
      "scripts/day4_facilitator_script.md",
    ],
  },
];

function slugFor(file) {
  return file
    .replace(/\\/g, "/")
    .replace(/\.md$/i, "")
    .replace(/\//g, "__")
    .replace(/[^a-zA-Z0-9_-]+/g, "_")
    .toLowerCase();
}

function titleFromMarkdown(markdown, fallback) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function splitSlides(markdown) {
  return markdown
    .split(/\n---\n/g)
    .map((part) => part.trim())
    .filter(Boolean);
}

function renderMarkdown(markdown) {
  marked.setOptions({
    gfm: true,
    breaks: false,
    mangle: false,
    headerIds: false,
  });
  return marked.parse(markdown);
}

function baseCss(kind) {
  const pageRule =
    kind === "slide"
      ? "@page { size: 13.333in 7.5in; margin: 0; }"
      : "@page { size: A4; margin: 14mm 13mm; }";

  return `
${pageRule}
* { box-sizing: border-box; }
body {
  margin: 0;
  color: #1f2937;
  background: #f7f1e6;
  font-family: "Yu Gothic", "Meiryo", "Noto Sans CJK JP", "Hiragino Sans", Arial, sans-serif;
  line-height: 1.65;
}
.document {
  background: #fffaf1;
}
.meta {
  color: #5f6c7b;
  font-size: 12px;
  margin-bottom: 10px;
}
h1, h2, h3 {
  color: #18324a;
  line-height: 1.25;
  letter-spacing: 0;
}
h1 {
  font-size: 28px;
  border-bottom: 3px solid #ef8354;
  padding-bottom: 8px;
}
h2 {
  font-size: 20px;
  margin-top: 22px;
}
h3 {
  font-size: 16px;
  margin-top: 18px;
}
p, li, td, th {
  font-size: 13px;
}
ul, ol {
  padding-left: 1.4em;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0 16px;
  background: #fff;
}
th {
  background: #e5f1ed;
  color: #18324a;
}
th, td {
  border: 1px solid #cad5df;
  padding: 7px 8px;
  vertical-align: top;
}
pre {
  white-space: pre-wrap;
  background: #ffffff;
  border: 1px solid #d6e0e8;
  border-left: 5px solid #ef8354;
  padding: 12px;
  min-height: 38px;
  font-family: "Yu Gothic", "Meiryo", sans-serif;
}
code {
  font-family: Consolas, "Yu Gothic", monospace;
}
strong {
  color: #2f6f5e;
}
.page {
  break-after: page;
  page-break-after: always;
}
.page:last-child {
  break-after: auto;
  page-break-after: auto;
}
.a4-page {
  min-height: 267mm;
  padding: 0;
}
.slide-page {
  width: 13.333in;
  height: 7.5in;
  padding: 0.55in 0.72in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:
    linear-gradient(90deg, rgba(47,111,94,0.10), transparent 28%),
    #fffaf1;
  border-left: 0.16in solid #ef8354;
}
.slide-page h1 {
  font-size: 42px;
  border: 0;
  padding: 0;
  margin: 0 0 18px;
}
.slide-page h2 {
  font-size: 28px;
  color: #2f6f5e;
  margin: 0 0 18px;
}
.slide-page p,
.slide-page li {
  font-size: 24px;
}
.slide-page ul,
.slide-page ol {
  margin-top: 10px;
}
.slide-number {
  position: absolute;
  right: 0.36in;
  bottom: 0.24in;
  color: #8a97a6;
  font-size: 12px;
}
@media screen {
  body {
    padding: 24px;
  }
  .document {
    max-width: 980px;
    margin: 0 auto;
    padding: 28px;
    box-shadow: 0 12px 36px rgba(24, 50, 74, 0.16);
  }
  .slide-page {
    position: relative;
    margin: 0 auto 28px;
    box-shadow: 0 12px 34px rgba(24, 50, 74, 0.18);
  }
}
@media print {
  body {
    background: #fff;
  }
  .document {
    padding: 0;
  }
  .slide-page {
    position: relative;
  }
}
`;
}

function htmlShell({ title, source, kind, body }) {
  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>${baseCss(kind)}</style>
</head>
<body>
  <main class="document ${kind === "slide" ? "slides" : "a4"}">
    <div class="meta">Source: ${escapeHtml(source)}</div>
    ${body}
  </main>
</body>
</html>
`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function writeHtml(file, kind, htmlDir) {
  const raw = await fs.readFile(path.join(ROOT, file), "utf8");
  const title = titleFromMarkdown(raw, file);
  let body;

  if (kind === "slide") {
    const slides = splitSlides(raw);
    body = slides
      .map((slide, index) => {
        const html = renderMarkdown(slide);
        return `<section class="page slide-page">${html}<div class="slide-number">${index + 1}</div></section>`;
      })
      .join("\n");
  } else {
    body = `<section class="a4-page">${renderMarkdown(raw)}</section>`;
  }

  const html = htmlShell({ title, source: file, kind, body });
  const slug = slugFor(file);
  const htmlPath = path.join(htmlDir, `${slug}.html`);
  await fs.writeFile(htmlPath, html, "utf8");
  return { file, slug, title, htmlPath };
}

async function renderPdf(browser, item, kind, pdfDir) {
  const pdfPath = path.join(pdfDir, `${item.slug}.pdf`);
  const page = await browser.newPage();
  const html = await fs.readFile(item.htmlPath, "utf8");
  await page.setContent(html, { waitUntil: "networkidle" });

  if (kind === "slide") {
    await page.pdf({
      path: pdfPath,
      width: "13.333in",
      height: "7.5in",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });
  } else {
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      margin: { top: "14mm", right: "13mm", bottom: "14mm", left: "13mm" },
    });
  }

  await page.close();
  return pdfPath;
}

async function writeIndex(results) {
  const rows = results
    .map((item) => {
      const htmlRel = path.relative(OUT, item.htmlPath).replace(/\\/g, "/");
      const pdfRel = path.relative(OUT, item.pdfPath).replace(/\\/g, "/");
      return `<tr><td>${escapeHtml(item.group)}</td><td>${escapeHtml(item.title)}</td><td><a href="${htmlRel}">HTML</a></td><td><a href="${pdfRel}">PDF</a></td></tr>`;
    })
    .join("\n");

  const html = `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Deliverables v1</title>
  <style>
    body { font-family: "Yu Gothic", "Meiryo", sans-serif; margin: 32px; color: #1f2937; background: #fffaf1; }
    h1 { color: #18324a; }
    table { border-collapse: collapse; width: 100%; background: #fff; }
    th, td { border: 1px solid #cad5df; padding: 10px; text-align: left; }
    th { background: #e5f1ed; }
    a { color: #2f6f5e; font-weight: 700; }
  </style>
</head>
<body>
  <h1>Deliverables v1</h1>
  <p>Markdown教材から生成した確認用HTML/PDFです。</p>
  <table>
    <thead><tr><th>Group</th><th>Title</th><th>HTML</th><th>PDF</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`;
  await fs.writeFile(path.join(OUT, "index.html"), html, "utf8");
}

async function main() {
  await fs.rm(OUT, { recursive: true, force: true });
  const results = [];
  let browser;

  try {
    const executablePath = findBrowserExecutable();
    browser = await chromium.launch({
      headless: true,
      executablePath,
    });
  } catch (error) {
    throw new Error(`Failed to launch Playwright Chromium. ${nodePathHint}\n${error.message}`);
  }

  try {
    for (const group of groups) {
      const htmlDir = path.join(OUT, "html", group.type);
      const pdfDir = path.join(OUT, "pdf", group.type);
      await fs.mkdir(htmlDir, { recursive: true });
      await fs.mkdir(pdfDir, { recursive: true });

      for (const file of group.files) {
        const item = await writeHtml(file, group.type, htmlDir);
        const pdfPath = await renderPdf(browser, item, group.type, pdfDir);
        results.push({ ...item, pdfPath, group: group.label });
      }
    }
  } finally {
    await browser.close();
  }

  await writeIndex(results);
  await fs.writeFile(
    path.join(OUT, "README.md"),
    [
      "# Deliverables v1",
      "",
      "Markdown教材から生成した確認用HTML/PDFです。",
      "",
      "- `index.html`: 一覧。",
      "- `html/a4/`: A4印刷向けHTML。",
      "- `pdf/a4/`: A4印刷向けPDF。",
      "- `html/slide/`: 16:9画面共有向けHTML。",
      "- `pdf/slide/`: 16:9画面共有向けPDF。",
      "",
      "PPTXとPNGは次の工程で作成します。",
      "",
    ].join("\n"),
    "utf8",
  );

  console.log(`Generated ${results.length} HTML/PDF pairs under ${path.relative(ROOT, OUT)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
