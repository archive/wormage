# Enable Full Wormage - How To Unlock All Weapons In Worms Armageddon

To unlock all weapons in WA, you can either play and win all missions - or - you can use this Node.js script to unlock them all.

## What

This script will modify the `WG.WGT` file (`Worms Armageddon\User\Teams\WG.WGT`). It will change 4 bytes at address 0x00000006 from `00 00 00 00` -> `1F 1F 07 01`

## How to

1. Install Node.js, https://nodejs.org/
1. Locate your Worms Armageddon-folder, e.g. `C:\Games\Worms Armageddon`
1. Run in Terminal `node wormage.js <PATH TO WORMS FOLDER>`, e.g. `node wormage.js "C:\Games\Worms Armageddon"`
1. Done!

Output:

```
node wormage.js "C:\Games\Worms Armageddon"

> Saving backup of WG.WGT
>> Reading WG.WGT
>>> Patching
>>>> Saving patched WG.WGT
>>>>> Done!
```

## Disclamer

All tools/ scripts in this repo are released for use "AS IS" without any warranties of any kind, including, but not limited to their installation, use, or performance. We disclaim any and all warranties, either express or implied, including but not limited to any warranty of noninfringement, merchantability, and/ or fitness for a particular purpose. We do not warrant that the technology will meet your requirements, that the operation thereof will be uninterrupted or error-free, or that any errors will be corrected.

Any use of these scripts and tools is at your own risk. There is no guarantee that they have been through thorough testing in a comparable environment and we are not responsible for any damage or data loss incurred with their use.
