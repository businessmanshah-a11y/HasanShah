// scripts/convert-to-webp.mjs
import sharp from "sharp";
import fs from "fs";
import path from "path";

const targetDirs = [
  "public/images/blog"
];

const extensionsToConvert = [".jpg", ".jpeg", ".png"];

async function convertDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  console.log(`\nScanning directory: ${dir}`);
  let totalOriginalBytes = 0;
  let totalWebpBytes = 0;
  let convertedCount = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!extensionsToConvert.includes(ext)) continue;

    const baseName = path.basename(file, ext);
    const srcPath = path.join(dir, file);
    const destPath = path.join(dir, `${baseName}.webp`);

    const origStat = fs.statSync(srcPath);
    totalOriginalBytes += origStat.size;

    await sharp(srcPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(destPath);

    const webpStat = fs.statSync(destPath);
    totalWebpBytes += webpStat.size;
    convertedCount++;

    const savedPercent = Math.round((1 - webpStat.size / origStat.size) * 100);
    console.log(
      `✓ ${file} (${Math.round(origStat.size / 1024)} KB) -> ${baseName}.webp (${Math.round(
        webpStat.size / 1024
      )} KB) [Saved ${savedPercent}%]`
    );
  }

  if (convertedCount > 0) {
    const totalSavedPercent = Math.round(
      (1 - totalWebpBytes / totalOriginalBytes) * 100
    );
    console.log(`\nTotal converted: ${convertedCount} images`);
    console.log(
      `Total size: ${Math.round(totalOriginalBytes / 1024)} KB -> ${Math.round(
        totalWebpBytes / 1024
      )} KB (-${totalSavedPercent}%)`
    );
  } else {
    console.log("No unconverted images found.");
  }
}

async function main() {
  for (const d of targetDirs) {
    await convertDir(d);
  }
}

main().catch(err => {
  console.error("Error converting images to webp:", err);
  process.exit(1);
});
