#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Gray Zone Warfare Cheats (grayzonecheats.net).
 * Run from project root: node scripts/adapt-grayzone.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'gzw-aimbot'],
	['tarkov-esp', 'gzw-esp'],
	['tarkov-wallhack', 'gzw-wallhack'],
	['tarkov-radar-hack', 'gzw-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-gzw-cheats'],
	['tarkov-cheats-2026', 'gzw-cheats-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'gzw-cheats'],
	['tarkov-cheat-download', 'gzw-cheat-download'],
	['tarkov-mod-menu', 'gzw-mod-menu'],
	['tarkov-soft-aim', 'gzw-soft-aim'],
	['best-tarkov-cheats', 'best-gzw-cheats'],
	['tarkov-aimbot-hack', 'gzw-aimbot-hack'],
	['tarkov-esp-hack', 'gzw-esp-hack'],
	['tarkov-unlock-all', 'gzw-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://besttarkovcheats.com', 'https://grayzonecheats.net'],
	['https://www.besttarkovcheats.com', 'https://www.grayzonecheats.net'],
	['www.besttarkovcheats.com', 'www.grayzonecheats.net'],
	['besttarkovcheats.com', 'grayzonecheats.net'],
	['support@besttarkovcheats.com', 'support@grayzonecheats.net'],
	['/products/escape-from-tarkov', '/products/gray-zone-warfare'],
	['project-name=besttarkovcheats', 'project-name=grayzonecheats'],
	['name = "besttarkovcheats"', 'name = "grayzonecheats"'],
	['"name": "tarkov-cheats"', '"name": "grayzone-cheats"'],
	['tarkov-esp-player-tags', 'gzw-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'gzw-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'gzw-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'gzw-aimbot-skeleton'],
	['tarkov-esp-radar', 'gzw-esp-radar'],
	['tarkov-cheats-combat', 'gzw-cheats-combat'],
	['tarkov-cheats-logo', 'gzw-cheats-logo'],
	['tarkov-hero-banner', 'gzw-hero-banner'],
	['tarkov-hero-ghost', 'gzw-hero-ghost'],
	['tarkov-hero-source', 'gzw-hero-source'],
	['undetected-tarkov-cheats', 'undetected-gzw-cheats'],
	['best-tarkov-cheats', 'best-gzw-cheats'],
	['tarkov-cheat-download', 'gzw-cheat-download'],
	['tarkov-cheats-2026', 'gzw-cheats-2026'],
	['tarkov-radar-hack', 'gzw-radar-hack'],
	['tarkov-aimbot-hack', 'gzw-aimbot-hack'],
	['tarkov-esp-hack', 'gzw-esp-hack'],
	['tarkov-unlock-all', 'gzw-unlock-all'],
	['tarkov-soft-aim', 'gzw-soft-aim'],
	['tarkov-mod-menu', 'gzw-mod-menu'],
	['tarkov-wallhack', 'gzw-wallhack'],
	['tarkov-cheats', 'gzw-cheats'],
	['tarkov-aimbot', 'gzw-aimbot'],
	['tarkov-esp', 'gzw-esp'],
	['battleye-bypass', 'eac-bypass'],
	["'battleye'", "'eac'"],
	['| battleye', '| eac'],
	['pageId="battleye"', 'pageId="eac"'],
	["pageId: 'battleye'", "pageId: 'eac'"],
	['"battleye"', '"eac"'],
	['escape-from-tarkov-cheats', 'gray-zone-warfare-cheats'],
	['Escape from Tarkov', 'Gray Zone Warfare'],
	['Tarkov Cheats', 'Gray Zone Cheats'],
	['Tarkov cheats', 'Gray Zone Warfare cheats'],
	['Tarkov cheat', 'Gray Zone Warfare cheat'],
	['Tarkov hacks', 'Gray Zone Warfare hacks'],
	['Tarkov hack', 'Gray Zone Warfare hack'],
	['TarkovCheatsSite', 'GrayZoneCheatsSite'],
	['Tarkov Intel', 'GZW Intel'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'Easy Anti-Cheat maintenance'],
	['BattlEye bypass', 'Easy Anti-Cheat bypass'],
	['BattlEye Bypass', 'Easy Anti-Cheat Bypass'],
	['BattlEye patches', 'Easy Anti-Cheat patches'],
	['BattlEye patch', 'Easy Anti-Cheat patch'],
	['BattlEye updates', 'Easy Anti-Cheat updates'],
	['BattlEye update', 'Easy Anti-Cheat update'],
	['after BattlEye', 'after Easy Anti-Cheat'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['tarkov cheats', 'Gray Zone Warfare cheats'],
	['tarkov cheat', 'Gray Zone Warfare cheat'],
	['Customs, Woods, and Streets of Tarkov', 'Dam, Airfield, and Coastal zones'],
	['Customs, Woods and Streets of Tarkov', 'Dam, Airfield and Coastal zones'],
	['PMC raids and Scav runs', 'PMC operations and bot encounters'],
	['PMC & Scav', 'PMC & bot'],
	['Scav run', 'bot encounter'],
	['scav run', 'bot encounter'],
	['Scav runs', 'bot encounters'],
	['Scav ESP', 'bot ESP'],
	['Scav', 'bot'],
	['extract and loot markers', 'extract helicopter and loot markers'],
	['tarkovImages', 'grayzoneImages'],
	["from './tarkov'", "from './grayzone'"],
	["from '../data/tarkov'", "from '../data/grayzone'"],
	["from '../../data/tarkov'", "from '../../data/grayzone'"],
	['fetch-tarkov-images', 'fetch-grayzone-images'],
	['tarkov-hack-overlays', 'grayzone-hack-overlays'],
	['trucos-tarkov', 'trucos-gzw'],
	['triche-tarkov', 'triche-gzw'],
	['cheats-tarkov', 'cheats-gzw'],
	['trucchi-tarkov', 'trucchi-gzw'],
	['cheaty-tarkov', 'cheaty-gzw'],
	['chity-tarkov', 'chity-gzw'],
	['chitov-tarkov', 'chitov-gzw'],
	['chitiv-tarkov', 'chitiv-gzw'],
	['cheatow-tarkov', 'cheatow-gzw'],
	['hile-tarkov', 'hile-gzw'],
	['tarkov-hile', 'gzw-hile'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-gzw-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-gzw-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-gzw-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-gzw'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-gzw'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-gzw-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-gzw'],
	['cheats-tarkov-nedetectabile', 'cheats-gzw-nedetectabile'],
	['basta-tarkov-cheats', 'basta-gzw-cheats'],
	['tarkov-cheats-funktionen', 'gzw-cheats-funktionen'],
	['tarkov-cheats-functies', 'gzw-cheats-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-gzw'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-gzw'],
	['recursos-cheats-tarkov', 'recursos-cheats-gzw'],
	['escape-from-tarkov', 'gray-zone-warfare'],
	['Buy Tarkov Cheats', 'Buy Gray Zone Cheats'],
	['Tarkov', 'GZW'],
	['tarkov', 'gzw'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-grayzone.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'grayzone.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → grayzone.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-grayzone-images.mjs'],
		['tarkov-hack-overlays.mjs', 'grayzone-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-grayzone-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'gzw-aimbot': 'gzw-aimbot',
		'gzw-esp': 'gzw-esp',
		'gzw-wallhack': 'wallhack',
		'gzw-radar-hack': 'radar',
		'undetected-gzw-cheats': 'undetected',
		'gzw-cheats-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'gzw-cheats': 'hacks',
		'gzw-cheat-download': 'cheat-download',
		'gzw-mod-menu': 'mod-menu',
		'gzw-soft-aim': 'soft-aim',
		'best-gzw-cheats': 'best-cheats',
		'gzw-aimbot-hack': 'aimbot-hack',
		'gzw-esp-hack': 'esp-hack',
		'gzw-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'gzw');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Gray Zone Warfare Cheats (grayzonecheats.net)...\n');
	await renamePageDirs();
	await renameDataFile();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: fix brand.ts identity, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
