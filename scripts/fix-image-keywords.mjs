#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'Gray Zone Warfare cheats', espWallhack: 'Gray Zone Warfare cheats wallhack', aimbotCombat: 'Gray Zone Warfare cheats aimbot', squadFight: 'Gray Zone Warfare cheats', playerEsp: 'Gray Zone Warfare cheats esp', headerArt: 'Gray Zone Warfare cheats aimbot', cheatsPackage: 'Gray Zone Warfare cheats radar', rebootFight: 'Gray Zone Warfare cheats aimbot', battleRoyale: 'Gray Zone Warfare cheats', battleRoyaleIsland: 'Gray Zone Warfare cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'GZW ESP player tags hack'", "imageAlt: 'Gray Zone Warfare cheats esp'"],
	["imageAlt: 'GZW ESP radar hack'", "imageAlt: 'Gray Zone Warfare cheats radar'"],
	["imageAlt: 'GZW aimbot sniper kill'", "imageAlt: 'Gray Zone Warfare cheats aimbot'"],
	["imageAlt: 'GZW aimbot skeleton targeting'", "imageAlt: 'Gray Zone Warfare cheats aimbot'"],
	["imageAlt: 'Gray Zone Warfare cheats ADS combat'", "imageAlt: 'Gray Zone Warfare cheats'"],
	["imageAlt: 'Gray Zone Warfare cheats setup PC activation'", "imageAlt: 'Gray Zone Warfare cheats'"],
	["imageAlt: 'Gray Zone Warfare cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'Gray Zone Warfare cheats'"],
	["imageAlt: 'Gray Zone Warfare cheats FAQ ESP aimbot'", "imageAlt: 'Gray Zone Warfare cheats'"],
	["imageAlt: 'Gray Zone Warfare cheats support license help'", "imageAlt: 'Gray Zone Warfare cheats'"],
	["imageAlt: 'Undetected Gray Zone Warfare cheats ESP wallhack'", "imageAlt: 'undetected Gray Zone Warfare cheats'"],
	["imageAlt: 'GZW wallhack skeleton ESP'", "imageAlt: 'Gray Zone Warfare cheats wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass gzw ESP aimbot'", "imageAlt: 'Gray Zone Warfare cheats eac'"],
	["imageAlt: 'Gray Zone Warfare cheats 2026 ESP aimbot'", "imageAlt: 'Gray Zone Warfare cheats'"],
	["imageAlt: 'Gray Zone Warfare cheats combat aimbot'", "imageAlt: 'Gray Zone Warfare cheats'"],
	["imageAlt: 'Gray Zone Warfare cheat download ESP aimbot'", "imageAlt: 'Gray Zone Warfare cheats download'"],
	["imageAlt: 'GZW mod menu ESP aimbot'", "imageAlt: 'Gray Zone Warfare cheats mod menu'"],
	["imageAlt: 'GZW soft aim aimbot settings'", "imageAlt: 'Gray Zone Warfare cheats soft aim'"],
	["imageAlt: 'Best Gray Zone Warfare cheats 2026 ESP'", "imageAlt: 'best Gray Zone Warfare cheats'"],
	["imageAlt: 'GZW aimbot hack combat'", "imageAlt: 'Gray Zone Warfare cheats aimbot'"],
	["imageAlt: 'GZW ESP hack wallhack'", "imageAlt: 'Gray Zone Warfare cheats esp'"],
	["imageAlt: 'GZW unlock all ESP aimbot guide'", "imageAlt: 'Gray Zone Warfare cheats'"],
	["imageAlt: 'Gray Zone Warfare cheats privacy policy'", "imageAlt: 'Gray Zone Warfare cheats'"],
	["imageAlt: 'Gray Zone Warfare cheats refund policy'", "imageAlt: 'Gray Zone Warfare cheats'"],
	["imageAlt: 'Gray Zone Warfare cheats terms of use'", "imageAlt: 'Gray Zone Warfare cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `GZW ${meta.altKeyword}`")
	.join("imageAlt: 'Gray Zone Warfare cheats'")
	.split("galleryTitle: `Gray Zone Cheats ${topicName}`")
	.join("galleryTitle: 'Gray Zone Warfare cheats'")
	.split("imageAlt: `Gray Zone Warfare cheats ${kind} policy`")
	.join("imageAlt: 'Gray Zone Warfare cheats'")
	.split("galleryTitle: `Gray Zone Cheats ${kind} resources`")
	.join("galleryTitle: 'Gray Zone Warfare cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
