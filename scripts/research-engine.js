import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const researchRoot = path.join(repoRoot, "research", "engine");
const artifactsRoot = path.join(repoRoot, "artifacts");

const suggestions = JSON.parse(
  readFileSync(path.join(researchRoot, "suggestions.json"), "utf-8"),
);
const assets = JSON.parse(
  readFileSync(path.join(researchRoot, "assets.json"), "utf-8"),
);
const artifacts = JSON.parse(
  readFileSync(path.join(researchRoot, "artifacts.json"), "utf-8"),
);

const output = {
  generatedAt: new Date().toISOString(),
  summary: {
    suggestions: suggestions.length,
    assets: assets.length,
    artifacts: artifacts.length,
  },
  suggestions,
  assets,
  artifacts,
};

mkdirSync(artifactsRoot, { recursive: true });
writeFileSync(
  path.join(artifactsRoot, "research-engine-output.json"),
  `${JSON.stringify(output, null, 2)}\n`,
  "utf-8",
);

console.log("Research engine artifacts generated at artifacts/research-engine-output.json");
