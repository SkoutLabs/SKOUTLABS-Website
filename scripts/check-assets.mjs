import { existsSync } from "node:fs";
const logos = [
  "skout-labs",
  "budget-skout",
  "recipe-skout",
  "travel-skout",
  "expedition-skout",
];
let missing = false;
for (const logo of logos) {
  const file = `public/assets/logos/${logo}.png`;
  if (!existsSync(file)) {
    console.error(`Missing original logo: ${file}`);
    missing = true;
  } else console.log(`Found: ${file}`);
}
if (missing) {
  console.error(
    "Add the original PNG files and rebuild. The site currently uses text fallbacks.",
  );
  process.exitCode = 1;
}
