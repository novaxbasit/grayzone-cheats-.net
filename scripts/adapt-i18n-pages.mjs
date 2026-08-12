#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from GZW source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['gzw-esp', 'gzw-esp'],
	['gzw-aimbot', 'gzw-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-gzw-cheats', 'undetected-gzw-cheats'],
	['gzw-wallhack', 'gzw-wallhack'],
	['gzw-radar-hack', 'gzw-radar-hack'],
	['gzw-cheats-2026', 'gzw-cheats-2026'],
	['escape-from-gzw-cheats', 'escape-from-gzw-cheats'],
	['gray-zone-warfare', 'gzw'],
	['Gray Zone Warfare', 'Gray Zone Warfare'],
	['Gray Zone Warfare', 'Gray Zone Warfare'],
	['Gray Zone Cheats', 'Gray Zone Cheats'],
	['Gray Zone Warfare cheats', 'Gray Zone Warfare cheats'],
	['Gray Zone Warfare cheat', 'Gray Zone Warfare cheat'],
	['GZW ESP', 'Gray Zone Warfare ESP'],
	['GZW Aimbot', 'Gray Zone Warfare Aimbot'],
	['GZW wallhack', 'Gray Zone Warfare wallhack'],
	['GZW radar', 'Gray Zone Warfare radar'],
	['GZW firefights', 'Gray Zone Warfare firefights'],
	['GZW combat', 'Gray Zone Warfare combat'],
	['GZW patches', 'Gray Zone Warfare patches'],
	['GZW updates', 'Gray Zone Warfare updates'],
	['GZW setup', 'Gray Zone Warfare setup'],
	['GZW license', 'Gray Zone Warfare license'],
	['GZW licenses', 'Gray Zone Warfare licenses'],
	['GZW sessions', 'Gray Zone Warfare sessions'],
	['in GZW', 'in Gray Zone Warfare'],
	['for GZW', 'for Gray Zone Warfare'],
	['GZW on', 'Gray Zone Warfare on'],
	['GZW or', 'Gray Zone Warfare or'],
	['GZW\'s', 'Gray Zone Warfare\'s'],
	['GZW ', 'Gray Zone Warfare '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@grayzonecheats.net', 'support@grayzonecheats.net'],
	['Dam, Airfield, and Coastal zones', 'Dam, Airfield, and Coastal zones'],
	['Dam, Airfield and Coastal zones', 'Dam, Airfield and Coastal zones'],
	['extract fights', 'extract fights'],
	['extract fight', 'extract fight'],
	['raid rounds', 'raid rounds'],
	['extract', 'extract'],
	['PMCs', 'players'],
	['operator', 'player'],
	['PMCs', 'Players'],
	['Operator', 'Player'],
	['extract timer', 'extract timer'],
	['PMC operations and bot encounters', 'PMC operations and bot encounters'],
	['PMC operations and bot encounters', 'PMC operations and bot encounters'],
	['PMC & bot', 'PMC & bot'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Gray Zone Warfare combat pace'],
	['COD', 'Gray Zone Warfare'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Gray Zone Cheats',
	game: 'Gray Zone Warfare',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Dam, Airfield, and Coastal zones'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
