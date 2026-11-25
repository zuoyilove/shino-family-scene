import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const scene = "Every morning Dad waves at the school bus like it's sailing off to the moon, then pretends he wasn't the one pressed to the window all afternoon.\nMum calls it embarrassing; the driver honks twice now, just for him.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), scene, "utf8");
console.log(scene);
