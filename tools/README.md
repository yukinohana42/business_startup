# Tools

## export_materials.cjs

Markdown教材から確認用HTML/PDFを生成する。

出力先:

- `deliverables/v1/html/a4/`
- `deliverables/v1/pdf/a4/`
- `deliverables/v1/html/slide/`
- `deliverables/v1/pdf/slide/`

実行例:

```powershell
$env:NODE_PATH='C:\Users\yukin\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules;C:\Users\yukin\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\.pnpm\node_modules'
& 'C:\Users\yukin\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' tools\export_materials.cjs
```

ローカルのChromeまたはEdgeを使ってPDF化する。
PPTXとPNGは別工程で作る。
