import { describe, expect, it } from "vitest";
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

describe("research engine baseline", () => {
  const repoRoot = process.cwd();

  it("registers research engine script and required source files", () => {
    const packageJson = JSON.parse(
      readFileSync(path.join(repoRoot, "package.json"), "utf-8"),
    ) as { scripts?: Record<string, string> };

    expect(packageJson.scripts?.["research:engine"]).toBe("node scripts/research-engine.js");
    expect(existsSync(path.join(repoRoot, "scripts", "research-engine.js"))).toBe(true);
    expect(existsSync(path.join(repoRoot, "research", "engine", "suggestions.json"))).toBe(true);
    expect(existsSync(path.join(repoRoot, "research", "engine", "assets.json"))).toBe(true);
    expect(existsSync(path.join(repoRoot, "research", "engine", "artifacts.json"))).toBe(true);
  });

  it("generates compiled research artifact output", () => {
    execSync("node scripts/research-engine.js", {
      cwd: repoRoot,
      stdio: "pipe",
    });

    const outputPath = path.join(repoRoot, "artifacts", "research-engine-output.json");
    expect(existsSync(outputPath)).toBe(true);

    const output = JSON.parse(readFileSync(outputPath, "utf-8")) as {
      summary: { suggestions: number; assets: number; artifacts: number };
    };

    expect(output.summary.suggestions).toBeGreaterThan(0);
    expect(output.summary.assets).toBeGreaterThan(0);
    expect(output.summary.artifacts).toBeGreaterThan(0);
  });
});
