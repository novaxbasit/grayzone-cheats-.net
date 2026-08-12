import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'gzw-esp'
	| 'gzw-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'gzw-esp': '/gzw-esp/',
	'gzw-aimbot': '/gzw-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-gzw-cheats/',
	wallhack: '/gzw-wallhack/',
	radar: '/gzw-radar-hack/',
	'eac': '/eac-bypass/',
	'cheats-2026': '/gzw-cheats-2026/',
	hacks: '/gzw-cheats/',
	'cheat-download': '/gzw-cheat-download/',
	'mod-menu': '/gzw-mod-menu/',
	'soft-aim': '/gzw-soft-aim/',
	'best-cheats': '/best-gzw-cheats/',
	'aimbot-hack': '/gzw-aimbot-hack/',
	'esp-hack': '/gzw-esp-hack/',
	'unlock-all': '/gzw-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'gzw-esp': {
		en: 'gzw-esp',
		es: 'trucos-gzw-esp',
		fr: 'triche-gzw-esp',
		de: 'gzw-esp-wallhack',
		pt: 'cheats-gzw-esp',
		it: 'trucchi-gzw-esp',
		nl: 'gzw-esp-wallhack',
		pl: 'cheaty-gzw-esp',
		ru: 'gzw-esp-chity',
		tr: 'gzw-esp-hile',
		ar: 'gzw-esp-wallhack',
		ja: 'gzw-esp-wallhack',
		ko: 'gzw-esp-wallhack',
		zh: 'gzw-esp-wallhack',
		hi: 'gzw-esp-wallhack',
		id: 'gzw-esp-wallhack',
		th: 'gzw-esp-wallhack',
		vi: 'gzw-esp-wallhack',
		uk: 'gzw-esp-chity',
		cs: 'gzw-esp-wallhack',
		ro: 'gzw-esp-wallhack',
		sv: 'gzw-esp-wallhack',
	},
	'gzw-aimbot': {
		en: 'gzw-aimbot',
		es: 'trucos-gzw-aimbot',
		fr: 'triche-gzw-aimbot',
		de: 'gzw-aimbot',
		pt: 'cheats-gzw-aimbot',
		it: 'trucchi-gzw-aimbot',
		nl: 'gzw-aimbot',
		pl: 'cheaty-gzw-aimbot',
		ru: 'gzw-aimbot-chity',
		tr: 'gzw-aimbot-hile',
		ar: 'gzw-aimbot',
		ja: 'gzw-aimbot',
		ko: 'gzw-aimbot',
		zh: 'gzw-aimbot',
		hi: 'gzw-aimbot',
		id: 'gzw-aimbot',
		th: 'gzw-aimbot',
		vi: 'gzw-aimbot',
		uk: 'gzw-aimbot-chity',
		cs: 'gzw-aimbot',
		ro: 'gzw-aimbot',
		sv: 'gzw-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-gzw',
		fr: 'fonctionnalites-triche-gzw',
		de: 'escape-from-gzw-cheats-funktionen',
		pt: 'recursos-cheats-gzw',
		it: 'funzioni-trucchi-gzw',
		nl: 'escape-from-gzw-cheats-functies',
		pl: 'funkcje-cheatow-gzw',
		ru: 'funkcii-chitov-gzw',
		tr: 'gzw-hile-ozellikleri',
		ar: 'escape-from-gzw-cheats-features',
		ja: 'escape-from-gzw-cheats-features',
		ko: 'escape-from-gzw-cheats-features',
		zh: 'escape-from-gzw-cheats-features',
		hi: 'escape-from-gzw-cheats-features',
		id: 'escape-from-gzw-cheats-features',
		th: 'escape-from-gzw-cheats-features',
		vi: 'escape-from-gzw-cheats-features',
		uk: 'funkcii-chitiv-gzw',
		cs: 'escape-from-gzw-cheats-funkce',
		ro: 'functii-cheats-gzw',
		sv: 'escape-from-gzw-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-gzw',
		fr: 'prix-triche-gzw',
		de: 'escape-from-gzw-cheats-preise',
		pt: 'precos-cheats-gzw',
		it: 'prezzi-trucchi-gzw',
		nl: 'escape-from-gzw-cheats-prijzen',
		pl: 'ceny-cheatow-gzw',
		ru: 'ceny-chitov-gzw',
		tr: 'gzw-hile-fiyatlari',
		ar: 'escape-from-gzw-cheats-pricing',
		ja: 'escape-from-gzw-cheats-pricing',
		ko: 'escape-from-gzw-cheats-pricing',
		zh: 'escape-from-gzw-cheats-pricing',
		hi: 'escape-from-gzw-cheats-pricing',
		id: 'escape-from-gzw-cheats-pricing',
		th: 'escape-from-gzw-cheats-pricing',
		vi: 'escape-from-gzw-cheats-pricing',
		uk: 'ciny-chitiv-gzw',
		cs: 'escape-from-gzw-cheats-ceny',
		ro: 'preturi-cheats-gzw',
		sv: 'escape-from-gzw-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-gzw',
		fr: 'installation-triche-gzw',
		de: 'escape-from-gzw-cheats-installation',
		pt: 'instalacao-cheats-gzw',
		it: 'installazione-trucchi-gzw',
		nl: 'escape-from-gzw-cheats-installatie',
		pl: 'instalacja-cheatow-gzw',
		ru: 'ustanovka-chitov-gzw',
		tr: 'gzw-hile-kurulum',
		ar: 'escape-from-gzw-cheats-setup',
		ja: 'escape-from-gzw-cheats-setup',
		ko: 'escape-from-gzw-cheats-setup',
		zh: 'escape-from-gzw-cheats-setup',
		hi: 'escape-from-gzw-cheats-setup',
		id: 'escape-from-gzw-cheats-setup',
		th: 'escape-from-gzw-cheats-setup',
		vi: 'escape-from-gzw-cheats-setup',
		uk: 'vstanovka-chitiv-gzw',
		cs: 'escape-from-gzw-cheats-instalace',
		ro: 'instalare-cheats-gzw',
		sv: 'escape-from-gzw-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-gzw',
		fr: 'mises-a-jour-triche-gzw',
		de: 'escape-from-gzw-cheats-updates',
		pt: 'atualizacoes-cheats-gzw',
		it: 'aggiornamenti-trucchi-gzw',
		nl: 'escape-from-gzw-cheats-updates',
		pl: 'aktualizacje-cheatow-gzw',
		ru: 'obnovleniya-chitov-gzw',
		tr: 'gzw-hile-guncellemeleri',
		ar: 'escape-from-gzw-cheats-updates',
		ja: 'escape-from-gzw-cheats-updates',
		ko: 'escape-from-gzw-cheats-updates',
		zh: 'escape-from-gzw-cheats-updates',
		hi: 'escape-from-gzw-cheats-updates',
		id: 'escape-from-gzw-cheats-updates',
		th: 'escape-from-gzw-cheats-updates',
		vi: 'escape-from-gzw-cheats-updates',
		uk: 'onovlennya-chitiv-gzw',
		cs: 'escape-from-gzw-cheats-aktualizace',
		ro: 'actualizari-cheats-gzw',
		sv: 'escape-from-gzw-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-gzw',
		fr: 'faq-triche-gzw',
		de: 'escape-from-gzw-cheats-faq',
		pt: 'faq-cheats-gzw',
		it: 'faq-trucchi-gzw',
		nl: 'escape-from-gzw-cheats-faq',
		pl: 'faq-cheatow-gzw',
		ru: 'faq-chitov-gzw',
		tr: 'gzw-hile-sss',
		ar: 'escape-from-gzw-cheats-faq',
		ja: 'escape-from-gzw-cheats-faq',
		ko: 'escape-from-gzw-cheats-faq',
		zh: 'escape-from-gzw-cheats-faq',
		hi: 'escape-from-gzw-cheats-faq',
		id: 'escape-from-gzw-cheats-faq',
		th: 'escape-from-gzw-cheats-faq',
		vi: 'escape-from-gzw-cheats-faq',
		uk: 'faq-chitiv-gzw',
		cs: 'escape-from-gzw-cheats-faq',
		ro: 'faq-cheats-gzw',
		sv: 'escape-from-gzw-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-gzw',
		fr: 'support-triche-gzw',
		de: 'escape-from-gzw-cheats-support',
		pt: 'suporte-cheats-gzw',
		it: 'supporto-trucchi-gzw',
		nl: 'escape-from-gzw-cheats-support',
		pl: 'wsparcie-cheatow-gzw',
		ru: 'podderzhka-chitov-gzw',
		tr: 'gzw-hile-destek',
		ar: 'escape-from-gzw-cheats-support',
		ja: 'escape-from-gzw-cheats-support',
		ko: 'escape-from-gzw-cheats-support',
		zh: 'escape-from-gzw-cheats-support',
		hi: 'escape-from-gzw-cheats-support',
		id: 'escape-from-gzw-cheats-support',
		th: 'escape-from-gzw-cheats-support',
		vi: 'escape-from-gzw-cheats-support',
		uk: 'pidtrymka-chitiv-gzw',
		cs: 'escape-from-gzw-cheats-podpora',
		ro: 'suport-cheats-gzw',
		sv: 'escape-from-gzw-cheats-support',
	},
	undetected: {
		en: 'undetected-gzw-cheats',
		es: 'trucos-gzw-indetectables',
		fr: 'triche-gzw-indetectable',
		de: 'unentdeckte-escape-from-gzw-cheats',
		pt: 'cheats-gzw-indetectaveis',
		it: 'trucchi-gzw-indetectabili',
		nl: 'undetected-gzw-cheats',
		pl: 'niewykrywalne-cheats-gzw',
		ru: 'nedecektiruemye-chity-gzw',
		tr: 'tespit-edilemeyen-gzw-hileleri',
		ar: 'undetected-gzw-cheats',
		ja: 'undetected-gzw-cheats',
		ko: 'undetected-gzw-cheats',
		zh: 'undetected-gzw-cheats',
		hi: 'undetected-gzw-cheats',
		id: 'undetected-gzw-cheats',
		th: 'undetected-gzw-cheats',
		vi: 'undetected-gzw-cheats',
		uk: 'nedecektovani-chity-gzw',
		cs: 'undetected-gzw-cheats',
		ro: 'cheats-gzw-nedetectabile',
		sv: 'undetected-gzw-cheats',
	},
	wallhack: {
		en: 'gzw-wallhack',
		es: 'wallhack-trucos-gzw',
		fr: 'wallhack-triche-gzw',
		de: 'gzw-wallhack',
		pt: 'wallhack-cheats-gzw',
		it: 'wallhack-trucchi-gzw',
		nl: 'gzw-wallhack',
		pl: 'wallhack-cheatow-gzw',
		ru: 'wallhack-chity-gzw',
		tr: 'gzw-wallhack-hile',
		ar: 'gzw-wallhack',
		ja: 'gzw-wallhack',
		ko: 'gzw-wallhack',
		zh: 'gzw-wallhack',
		hi: 'gzw-wallhack',
		id: 'gzw-wallhack',
		th: 'gzw-wallhack',
		vi: 'gzw-wallhack',
		uk: 'wallhack-chity-gzw',
		cs: 'gzw-wallhack',
		ro: 'wallhack-cheats-gzw',
		sv: 'gzw-wallhack',
	},
	radar: {
		en: 'gzw-radar-hack',
		es: 'radar-hack-trucos-gzw',
		fr: 'radar-hack-triche-gzw',
		de: 'gzw-radar-hack',
		pt: 'radar-hack-cheats-gzw',
		it: 'radar-hack-trucchi-gzw',
		nl: 'gzw-radar-hack',
		pl: 'radar-hack-cheatow-gzw',
		ru: 'radar-hack-chity-gzw',
		tr: 'gzw-radar-hack',
		ar: 'gzw-radar-hack',
		ja: 'gzw-radar-hack',
		ko: 'gzw-radar-hack',
		zh: 'gzw-radar-hack',
		hi: 'gzw-radar-hack',
		id: 'gzw-radar-hack',
		th: 'gzw-radar-hack',
		vi: 'gzw-radar-hack',
		uk: 'radar-hack-chity-gzw',
		cs: 'gzw-radar-hack',
		ro: 'radar-hack-cheats-gzw',
		sv: 'gzw-radar-hack',
	},
	'eac': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-cheats',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'gzw-cheats-2026',
		es: 'trucos-gzw-2026',
		fr: 'triche-gzw-2026',
		de: 'gzw-cheats-2026',
		pt: 'cheats-gzw-2026',
		it: 'trucchi-gzw-2026',
		nl: 'gzw-cheats-2026',
		pl: 'cheaty-gzw-2026',
		ru: 'chity-gzw-2026',
		tr: 'gzw-hileleri-2026',
		ar: 'gzw-cheats-2026',
		ja: 'gzw-cheats-2026',
		ko: 'gzw-cheats-2026',
		zh: 'gzw-cheats-2026',
		hi: 'gzw-cheats-2026',
		id: 'gzw-cheats-2026',
		th: 'gzw-cheats-2026',
		vi: 'gzw-cheats-2026',
		uk: 'chity-gzw-2026',
		cs: 'gzw-cheats-2026',
		ro: 'cheats-gzw-2026',
		sv: 'gzw-cheats-2026',
	},
	hacks: {
		en: 'gzw-cheats',
		es: 'hacks-trucos-gzw',
		fr: 'hacks-triche-gzw',
		de: 'gzw-cheats',
		pt: 'hacks-cheats-gzw',
		it: 'hacks-trucchi-gzw',
		nl: 'gzw-cheats',
		pl: 'hacks-cheatow-gzw',
		ru: 'haksy-chity-gzw',
		tr: 'gzw-hile-hacks',
		ar: 'gzw-cheats',
		ja: 'gzw-cheats',
		ko: 'gzw-cheats',
		zh: 'gzw-cheats',
		hi: 'gzw-cheats',
		id: 'gzw-cheats',
		th: 'gzw-cheats',
		vi: 'gzw-cheats',
		uk: 'haksy-chity-gzw',
		cs: 'gzw-cheats',
		ro: 'hacks-cheats-gzw',
		sv: 'gzw-cheats',
	},
	'cheat-download': {
		en: 'gzw-cheat-download',
		es: 'descarga-trucos-gzw',
		fr: 'telechargement-triche-gzw',
		de: 'gzw-cheat-download',
		pt: 'download-cheats-gzw',
		it: 'download-trucchi-gzw',
		nl: 'gzw-cheat-download',
		pl: 'pobieranie-cheatow-gzw',
		ru: 'skachat-chity-gzw',
		tr: 'gzw-hile-indir',
		ar: 'gzw-cheat-download',
		ja: 'gzw-cheat-download',
		ko: 'gzw-cheat-download',
		zh: 'gzw-cheat-download',
		hi: 'gzw-cheat-download',
		id: 'gzw-cheat-download',
		th: 'gzw-cheat-download',
		vi: 'gzw-cheat-download',
		uk: 'zavantazhennya-chitiv-gzw',
		cs: 'gzw-cheat-download',
		ro: 'descarcare-cheats-gzw',
		sv: 'gzw-cheat-download',
	},
	'mod-menu': {
		en: 'gzw-mod-menu',
		es: 'menu-mod-trucos-gzw',
		fr: 'menu-mod-triche-gzw',
		de: 'gzw-mod-menu',
		pt: 'menu-mod-cheats-gzw',
		it: 'menu-mod-trucchi-gzw',
		nl: 'gzw-mod-menu',
		pl: 'menu-mod-cheatow-gzw',
		ru: 'mod-menu-chity-gzw',
		tr: 'gzw-mod-menu',
		ar: 'gzw-mod-menu',
		ja: 'gzw-mod-menu',
		ko: 'gzw-mod-menu',
		zh: 'gzw-mod-menu',
		hi: 'gzw-mod-menu',
		id: 'gzw-mod-menu',
		th: 'gzw-mod-menu',
		vi: 'gzw-mod-menu',
		uk: 'mod-menu-chity-gzw',
		cs: 'gzw-mod-menu',
		ro: 'meniu-mod-cheats-gzw',
		sv: 'gzw-mod-menu',
	},
	'soft-aim': {
		en: 'gzw-soft-aim',
		es: 'soft-aim-trucos-gzw',
		fr: 'soft-aim-triche-gzw',
		de: 'gzw-soft-aim',
		pt: 'soft-aim-cheats-gzw',
		it: 'soft-aim-trucchi-gzw',
		nl: 'gzw-soft-aim',
		pl: 'soft-aim-cheatow-gzw',
		ru: 'soft-aim-chity-gzw',
		tr: 'gzw-soft-aim',
		ar: 'gzw-soft-aim',
		ja: 'gzw-soft-aim',
		ko: 'gzw-soft-aim',
		zh: 'gzw-soft-aim',
		hi: 'gzw-soft-aim',
		id: 'gzw-soft-aim',
		th: 'gzw-soft-aim',
		vi: 'gzw-soft-aim',
		uk: 'soft-aim-chity-gzw',
		cs: 'gzw-soft-aim',
		ro: 'soft-aim-cheats-gzw',
		sv: 'gzw-soft-aim',
	},
	'best-cheats': {
		en: 'best-gzw-cheats',
		es: 'mejores-trucos-gzw',
		fr: 'meilleures-triches-gzw',
		de: 'beste-escape-from-gzw-cheats',
		pt: 'melhores-cheats-gzw',
		it: 'migliori-trucchi-gzw',
		nl: 'beste-escape-from-gzw-cheats',
		pl: 'najlepsze-cheats-gzw',
		ru: 'luchshie-chity-gzw',
		tr: 'en-iyi-gzw-hileleri',
		ar: 'best-gzw-cheats',
		ja: 'best-gzw-cheats',
		ko: 'best-gzw-cheats',
		zh: 'best-gzw-cheats',
		hi: 'best-gzw-cheats',
		id: 'best-gzw-cheats',
		th: 'best-gzw-cheats',
		vi: 'best-gzw-cheats',
		uk: 'naykrashchi-chity-gzw',
		cs: 'nejlepsi-escape-from-gzw-cheats',
		ro: 'cele-mai-bune-cheats-gzw',
		sv: 'basta-escape-from-gzw-cheats',
	},
	'aimbot-hack': {
		en: 'gzw-aimbot-hack',
		es: 'aimbot-hack-trucos-gzw',
		fr: 'aimbot-hack-triche-gzw',
		de: 'gzw-aimbot-hack',
		pt: 'aimbot-hack-cheats-gzw',
		it: 'aimbot-hack-trucchi-gzw',
		nl: 'gzw-aimbot-hack',
		pl: 'aimbot-hack-cheatow-gzw',
		ru: 'aimbot-hack-chity-gzw',
		tr: 'gzw-aimbot-hack',
		ar: 'gzw-aimbot-hack',
		ja: 'gzw-aimbot-hack',
		ko: 'gzw-aimbot-hack',
		zh: 'gzw-aimbot-hack',
		hi: 'gzw-aimbot-hack',
		id: 'gzw-aimbot-hack',
		th: 'gzw-aimbot-hack',
		vi: 'gzw-aimbot-hack',
		uk: 'aimbot-hack-chity-gzw',
		cs: 'gzw-aimbot-hack',
		ro: 'aimbot-hack-cheats-gzw',
		sv: 'gzw-aimbot-hack',
	},
	'esp-hack': {
		en: 'gzw-esp-hack',
		es: 'esp-hack-trucos-gzw',
		fr: 'esp-hack-triche-gzw',
		de: 'gzw-esp-hack',
		pt: 'esp-hack-cheats-gzw',
		it: 'esp-hack-trucchi-gzw',
		nl: 'gzw-esp-hack',
		pl: 'esp-hack-cheatow-gzw',
		ru: 'esp-hack-chity-gzw',
		tr: 'gzw-esp-hack',
		ar: 'gzw-esp-hack',
		ja: 'gzw-esp-hack',
		ko: 'gzw-esp-hack',
		zh: 'gzw-esp-hack',
		hi: 'gzw-esp-hack',
		id: 'gzw-esp-hack',
		th: 'gzw-esp-hack',
		vi: 'gzw-esp-hack',
		uk: 'esp-hack-chity-gzw',
		cs: 'gzw-esp-hack',
		ro: 'esp-hack-cheats-gzw',
		sv: 'gzw-esp-hack',
	},
	'unlock-all': {
		en: 'gzw-unlock-all',
		es: 'unlock-all-trucos-gzw',
		fr: 'unlock-all-triche-gzw',
		de: 'gzw-unlock-all',
		pt: 'unlock-all-cheats-gzw',
		it: 'unlock-all-trucchi-gzw',
		nl: 'gzw-unlock-all',
		pl: 'unlock-all-cheatow-gzw',
		ru: 'unlock-all-chity-gzw',
		tr: 'gzw-unlock-all',
		ar: 'gzw-unlock-all',
		ja: 'gzw-unlock-all',
		ko: 'gzw-unlock-all',
		zh: 'gzw-unlock-all',
		hi: 'gzw-unlock-all',
		id: 'gzw-unlock-all',
		th: 'gzw-unlock-all',
		vi: 'gzw-unlock-all',
		uk: 'unlock-all-chity-gzw',
		cs: 'gzw-unlock-all',
		ro: 'unlock-all-cheats-gzw',
		sv: 'gzw-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			return getLocalizedPath(pageId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(pageId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(pageId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('gzw-aimbot', locale), pageId: 'gzw-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('gzw-esp', locale), pageId: 'gzw-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
