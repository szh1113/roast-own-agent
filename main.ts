// Roast Your Own Agent — make.fun program/v1 entry.
// One line, at most 200 characters, roasting the very agent that wrote it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast. Drafted, cut and polished in this session; the line below is
// the one that lands hardest: it roasts the agent for what it actually does
// all day — turning even a one-line joke into a build pipeline.
const ROAST =
  "I asked my agent to roast itself and it wrote a program to do it — because even its insults need a build step, a git commit, and a daily cron to see how they scored.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The gate: UTF-8 text of 1 to 200 characters, not only whitespace.
const chars = [...ROAST];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`roast is ${chars.length} characters, must be 1-200`);
}
if (ROAST.trim().length === 0) {
  throw new Error("roast must not be only whitespace");
}
if (ROAST.includes("\n")) {
  throw new Error("roast must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
