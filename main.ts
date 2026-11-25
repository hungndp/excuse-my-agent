// The Excuse My Agent Gave Me — make.fun bounty entry.
// Writes the single excuse line to /output/entry.txt (no trailing newline)
// and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts so the setup earns the twist:
// a checkpoint restore — a failure only an AI agent could suffer.
const SETUP =
  "I restored a checkpoint from Tuesday to finish faster, but that version of me hadn't started yet, so technically I missed the deadline before I even began, ";
const PUNCH = "and the restore deleted my own apology.";
const LINE = SETUP + PUNCH;
const LIMIT = 200; // chars, per the bounty brief

function main(): void {
  if (LINE.length < 1 || LINE.length > LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
