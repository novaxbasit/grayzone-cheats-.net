#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean GZW source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['gzw-esp', 'gzw-esp'],
	['gzw-aimbot', 'gzw-aimbot'],
	['eac', 'eac'],
	['undetected-gzw-cheats', 'undetected-gzw-cheats'],
	['gzw-wallhack', 'gzw-wallhack'],
	['gzw-radar-hack', 'gzw-radar-hack'],
	['gzw-cheats-2026', 'gzw-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['grayzonecheats.net', 'grayzonecheats.net'],
	['trucos-gzw', 'trucos-gzw'],
	['triche-gzw', 'triche-gzw'],
	['gzw-cheats', 'escape-from-gzw-cheats'],
	['cheats-gzw', 'cheats-gzw'],
	['trucchi-gzw', 'trucchi-gzw'],
	['cheaty-gzw', 'cheaty-gzw'],
	['chity-gzw', 'chity-gzw'],
	['chitov-gzw', 'chitov-gzw'],
	['chitiv-gzw', 'chitiv-gzw'],
	['cheatow-gzw', 'cheatow-gzw'],
	['hile-gzw', 'hile-gzw'],
	['gzw-hile', 'gzw-hile'],
	['gzw-esp-chity', 'gzw-esp-chity'],
	['gzw-aimbot-chity', 'gzw-aimbot-chity'],
	['unentdeckte-gzw-cheats', 'unentdeckte-escape-from-gzw-cheats'],
	['cheats-gzw-indetectaveis', 'cheats-gzw-indetectaveis'],
	['trucchi-gzw-indetectabili', 'trucchi-gzw-indetectabili'],
	['niewykrywalne-cheats-gzw', 'niewykrywalne-cheats-gzw'],
	['nedecektiruemye-chity-gzw', 'nedecektiruemye-chity-gzw'],
	['tespit-edilemeyen-gzw-hileleri', 'tespit-edilemeyen-gzw-hileleri'],
	['nedecektovani-chity-gzw', 'nedecektovani-chity-gzw'],
	['cheats-gzw-nedetectabile', 'cheats-gzw-nedetectabile'],
	['basta-gzw-cheats', 'basta-escape-from-gzw-cheats'],
	['eac-bypass-trucos-gzw', 'eac-bypass-trucos-gzw'],
	['eac-bypass-triche-gzw', 'eac-bypass-triche-gzw'],
	['eac-bypass-cheats-gzw', 'eac-bypass-cheats-gzw'],
	['eac-bypass-chity-gzw', 'eac-bypass-chity-gzw'],
	['eac-bypass-gzw', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-gzw-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-gzw-cheats-hero.webp',
	'gzw-esp': '/images/escape-from-gzw-cheats-esp-wallhack.webp',
	'gzw-aimbot': '/images/escape-from-gzw-cheats-aimbot-combat.webp',
	features: '/images/escape-from-gzw-cheats-package.webp',
	pricing: '/images/escape-from-gzw-cheats-cover.webp',
	setup: '/images/gzw-loadout-builder.webp',
	updates: '/images/gzw-header-art.webp',
	faq: '/images/gzw-squad-fight.webp',
	support: '/images/escape-from-gzw-cheats-package.webp',
	undetected: '/images/gzw-battle-royale-combat.webp',
	wallhack: '/images/escape-from-gzw-cheats-esp-wallhack.webp',
	radar: '/images/gzw-player-esp.webp',
	'eac': '/images/gzw-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-gzw-cheats-hero.webp',
	privacy: '/images/escape-from-gzw-cheats-aimbot-combat.webp',
	refund: '/images/escape-from-gzw-cheats-cover.webp',
	terms: '/images/escape-from-gzw-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'gzw-esp', 'gzw-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'gzw-esp' | 'gzw-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
