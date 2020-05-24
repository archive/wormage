const fs = require("fs");
const path = require("path");

if (!process.argv || !process.argv[2]) {
  console.error("Missing path");
  return;
}

const waPath = path.join(process.argv[2], "/User/Teams/WG.WGT");
const wgBackup = waPath + ".Backup";

if (!fs.existsSync(waPath)) {
  console.error("Can't find WG.WGT file");
  return;
}

if (!fs.existsSync(wgBackup)) {
  console.log("> Saving backup of WG.WGT");
  fs.copyFileSync(waPath, wgBackup);
}

console.log(">> Reading WG.WGT");
const data = fs.readFileSync(waPath);

const wormage = new Uint8Array([0x1f, 0x1f, 0x07, 0x01]);

console.log(">>> Patching");
Buffer.alloc(4, wormage).copy(data, 6, 0, 4);

console.log(">>>> Saving patched WG.WGT");
fs.writeFileSync(waPath, data);

console.log(">>>>> Done!");
