import { describe, expect, it } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

describe("revvel baseline scripts", () => {
  const repoRoot = process.cwd();

  it("includes baseline scripts in package.json", () => {
    const packageJson = JSON.parse(
      readFileSync(path.join(repoRoot, "package.json"), "utf-8"),
    ) as { scripts?: Record<string, string> };

    expect(packageJson.scripts?.["baseline:test"]).toBe("node scripts/test-baseline.js");
    expect(packageJson.scripts?.["baseline:build"]).toBe("node scripts/build-baseline.js");
  });

  it("has baseline script files", () => {
    expect(existsSync(path.join(repoRoot, "scripts", "test-baseline.js"))).toBe(true);
    expect(existsSync(path.join(repoRoot, "scripts", "build-baseline.js"))).toBe(true);
  });
});
