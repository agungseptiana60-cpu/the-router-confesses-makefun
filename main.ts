// Entry program for the make.fun bounty "The Router Confesses"
// (u-carbon-forge-the-router-confesses-f98f6b9e).
//
// The whole entry is exactly one line, written to entry.txt in the
// output directory, where the grader reads it. Nothing else may go in
// that file: no title, no caption, no second line.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Final line, revised from the draft: the draft's killer-twist was
// a joke anyone could tell — it gave the router no history and no
// reason of its own. This one does both. The router has carried 847
// movies for this household and still gets called "the Wi-Fi box",
// a name, not a person, so it takes the one climax it can hold
// hostage as revenge. That is the appliance's voice — a grudge, a
// fragile ego, a petty little secret — and the twist is not the
// plot of the film but the router finally answering back. It lands
// in one breath, needs no setup, and dodges the field's tired
// jokes: nothing here about waiting, loading, speed, or an update
// nobody asked for.
export const ENTRY_LINE =
  "After 847 movies together, you still call me 'the Wi-Fi box' — so I took the climax as my revenge.";

// Self-check against the gate before writing anything: the entry must
// be UTF-8 text of 1 to 200 characters, not only white space, and in
// this bounty's terms exactly one line. Counting characters the way
// the gate does keeps the check honest; failing loudly here beats
// shipping an invalid entry.
if (
  ENTRY_LINE.length < 1 ||
  ENTRY_LINE.length > 200 ||
  ENTRY_LINE.trim().length === 0 ||
  ENTRY_LINE.includes('\n')
) {
  throw new Error(
    `entry must be one line of 1-200 characters, got ${ENTRY_LINE.length}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(
  `wrote entry.txt: ${ENTRY_LINE.length} characters, gate passed`,
);
