#!/usr/bin/env node

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const bump = process.argv[2] ?? "patch";

const allowed = new Set(["patch", "minor", "major"]);
if (!allowed.has(bump)) {
  console.error(
    `Unknown release type "${bump}". Use one of: patch, minor, major.`
  );
  process.exit(1);
}

console.log(`\n➡️  Running verification suite before ${bump} release...`);
execSync("npm run verify", { stdio: "inherit" });

const changelogPath = resolve(process.cwd(), "CHANGELOG.md");
const changelog = readFileSync(changelogPath, "utf8");
if (!changelog.includes("## [")) {
  console.warn(
    "⚠️  CHANGELOG.md does not appear to contain any release sections."
  );
}

console.log(`\n➡️  Bumping version (${bump})...`);
execSync(`npm version ${bump}`, { stdio: "inherit" });

console.log(
  "\n✅ Release version updated. Remember to push tags and run `npm publish` after reviewing the CHANGELOG entry."
);
