import { siteConfig } from './site';

/** Screenshots used across product pages — simple Gray Zone Warfare cheats keyword alts. */
export const grayzoneImages = {
	hero: '/images/gzw-cheats-hero-full.png',
	espWallhack: '/images/gzw-cheats-wallhack.webp',
	aimbotCombat: '/images/gzw-cheats-aimbot.webp',
	aimbotSkeleton: '/images/gzw-cheats-aimbot-view.webp',
	playerEsp: '/images/gzw-cheats-radar.webp',
	cheatsCombat: '/images/gzw-cheats-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/gzw-cheats-raid.webp',
	loadoutBuilder: '/images/gzw-cheats-radar.webp',
	squadFight: '/images/gzw-cheats-aimbot-view.webp',
	cheatsPackage: '/images/gzw-cheats-radar.webp',
	headerArt: '/images/gzw-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/gzw-cheats-raid.webp',
	extractFight: '/images/gzw-cheats-aimbot.webp',
	rebootFight: '/images/gzw-cheats-aimbot.webp',
	scavRunCombat: '/images/gzw-cheats-wallhack.webp',
	scavRunMode: '/images/gzw-cheats-esp.webp',
	battleRoyaleIsland: '/images/gzw-cheats-esp.webp',
	raidMap: '/images/gzw-cheats-esp.webp',
	product: [
		{ src: '/images/gzw-cheats-esp.webp', alt: 'Gray Zone Warfare cheats esp' },
		{ src: '/images/gzw-cheats-wallhack.webp', alt: 'Gray Zone Warfare cheats wallhack' },
		{ src: '/images/gzw-cheats-aimbot.webp', alt: 'Gray Zone Warfare cheats aimbot' },
		{ src: '/images/gzw-cheats-esp.webp', alt: 'Gray Zone Warfare cheats esp' },
		{ src: '/images/gzw-cheats-wallhack.webp', alt: 'Gray Zone Warfare cheats wallhack' },
		{ src: '/images/gzw-cheats-aimbot.webp', alt: 'Gray Zone Warfare cheats aimbot' },
	],
	gallery: [
		{ src: '/images/gzw-cheats-esp.webp', alt: 'Gray Zone Warfare cheats esp', featured: true },
		{ src: '/images/gzw-cheats-wallhack.webp', alt: 'Gray Zone Warfare cheats wallhack' },
		{ src: '/images/gzw-cheats-aimbot.webp', alt: 'Gray Zone Warfare cheats aimbot' },
		{ src: '/images/gzw-cheats-esp.webp', alt: 'Gray Zone Warfare cheats esp' },
		{ src: '/images/gzw-cheats-wallhack.webp', alt: 'Gray Zone Warfare cheats wallhack' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/gzw-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/gzw-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/gzw-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/gzw-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/gzw-cheats-radar.webp', title: '', caption: '' },
		{ src: '/images/gzw-cheats-raid.webp', title: '', caption: '' },
	],
} as const;
