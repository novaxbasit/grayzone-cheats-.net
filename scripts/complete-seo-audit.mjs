#!/usr/bin/env node
/**
 * Completes escape-from-gzw-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'gzw-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'gzw-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'gzw-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'gzw-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-gzw-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'gzw-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'gzw-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'gzw-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/gzw-gzw/g, 'gzw'],
	[/eac-bypass-gzw/g, 'eac-bypass'],
	[/Gray Zone Warfare/g, 'Gray Zone Warfare'],
	[/Gray Zone Warfare/g, 'Gray Zone Warfare'],
	[/Call of Duty/g, 'Gray Zone Warfare'],
	[/GZW Wallhack/g, 'Gray Zone Warfare Wallhack'],
	[/GZW Radar Hack/g, 'Gray Zone Warfare Radar Hack'],
	[/GZW Cheat Features/g, 'Gray Zone Warfare Cheat Features'],
	[/GZW Cheat Pricing/g, 'Gray Zone Warfare Cheat Pricing'],
	[/GZW Cheat Setup/g, 'Gray Zone Warfare Cheat Setup'],
	[/GZW Cheat Status/g, 'Gray Zone Warfare Cheat Status'],
	[/GZW Cheat Support/g, 'Gray Zone Warfare Cheat Support'],
	[/GZW squad fight/g, 'Gray Zone Warfare squad fight'],
	[/GZW squad builder/g, 'Gray Zone Warfare loadout builder'],
	[/GZW store header/g, 'Gray Zone Warfare header'],
	[/GZW wasteland combat/g, 'Gray Zone Warfare battle royale combat'],
	[/GZW loadout builder/g, 'Gray Zone Warfare loadout builder'],
	[/GZW pricing/g, 'Gray Zone Warfare pricing'],
	[/GZW Easy Anti-Cheat/g, 'Gray Zone Warfare Easy Anti-Cheat'],
	[/on GZW/g, 'on Gray Zone Warfare'],
	[/for GZW/g, 'for Gray Zone Warfare'],
	[/GZW guides/g, 'Gray Zone Warfare guides'],
	[/GZW guide/g, 'Gray Zone Warfare guide'],
	[/GZW hileleri/g, 'Gray Zone Warfare hileleri'],
	[/GZW hile/g, 'Gray Zone Warfare hile'],
	[/GZW hileleri/g, 'Gray Zone Warfare hileleri'],
	[/cheatów GZW/g, 'cheatów Gray Zone Warfare'],
	[/cheat GZW/g, 'cheat Gray Zone Warfare'],
	[/cheats GZW/g, 'cheats Gray Zone Warfare'],
	[/trucos GZW/g, 'trucos Gray Zone Warfare'],
	[/triche GZW/g, 'triche Gray Zone Warfare'],
	[/trucchi GZW/g, 'trucchi Gray Zone Warfare'],
	[/Wallhack GZW/g, 'Gray Zone Warfare Wallhack'],
	[/cheat GZW undetected/g, 'cheat Gray Zone Warfare undetected'],
	[/cheats GZW undetected/g, 'cheats Gray Zone Warfare undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/escape-from-gzw-cheats/g, 'escape-from-gzw-cheats'],
	[/gray-zone-warfare/g, 'gzw'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Gray Zone Warfare'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Gray Zone Warfare anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Gray Zone Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/GZW guides/g, 'Gray Zone Warfare guides');
	content = content.replace(/GZW guide/g, 'Gray Zone Warfare guide');
	content = content.replace(/GZW hileleri/g, 'Gray Zone Warfare hileleri');
	content = content.replace(/GZW hile/g, 'Gray Zone Warfare hile');
	content = content.replace(/cheat GZW/g, 'cheat Gray Zone Warfare');
	content = content.replace(/cheats GZW/g, 'cheats Gray Zone Warfare');
	content = content.replace(/trucos GZW/g, 'trucos Gray Zone Warfare');
	content = content.replace(/triche GZW/g, 'triche Gray Zone Warfare');
	content = content.replace(/trucchi GZW/g, 'trucchi Gray Zone Warfare');
	content = content.replace(/cheatów GZW/g, 'cheatów Gray Zone Warfare');
	content = content.replace(/читов GZW/g, 'читов Gray Zone Warfare');
	content = content.replace(/читів GZW/g, 'читів Gray Zone Warfare');
	content = content.replace(/GZWチート/g, 'Gray Zone Warfareチート');
	content = content.replace(/GZW 치트/g, 'Gray Zone Warfare 치트');
	content = content.replace(/GZW作弊/g, 'Gray Zone Warfare作弊');
	content = content.replace(/GZW rehberleri/g, 'Gray Zone Warfare rehberleri');
	content = content.replace(/GZW gidsen/g, 'Gray Zone Warfare gidsen');
	content = content.replace(/GZW průvodce/g, 'Gray Zone Warfare průvodce');
	content = content.replace(/GZW guider/g, 'Gray Zone Warfare guider');
	content = content.replace(/GZW related/g, 'Gray Zone Warfare related');
	content = content.replace(/GZW ガイド/g, 'Gray Zone Warfare ガイド');
	content = content.replace(/GZW 가이드/g, 'Gray Zone Warfare 가이드');
	content = content.replace(/GZW指南/g, 'Gray Zone Warfare指南');
	content = content.replace(/GZW गाइड/g, 'Gray Zone Warfare गाइड');
	content = content.replace(/GZW panduan/g, 'Gray Zone Warfare panduan');
	content = content.replace(/GZW คู่มือ/g, 'Gray Zone Warfare คู่มือ');
	content = content.replace(/GZW hướng dẫn/g, 'Gray Zone Warfare hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Gray Zone Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
