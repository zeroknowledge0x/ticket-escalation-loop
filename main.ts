import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A hopeless tech-support agent, cheerfully reporting total failure.
const line =
  "I've escalated your ticket to every team we have. They all escalated it back. I've never seen such teamwork.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate counts characters, so measure code points, not UTF-16 units.
const chars = Array.from(line);

// All-whitespace text is invalid even when its length fits the bound.
if (chars.length < 1 || chars.length > 199 || !line.trim()) {
  throw new Error("entry must be 1 to 199 non-whitespace characters");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
