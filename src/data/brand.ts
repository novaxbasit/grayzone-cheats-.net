/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Gray Zone Cheats',
	/** Short product label if needed */
	shortName: 'GZW',
	/** Canonical origin — no trailing slash */
	url: 'https://grayzonecheats.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@grayzonecheats.net',
	checkoutUrl: 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Fgray-zone-warfare',

	/** Game this template instance targets */
	game: 'Gray Zone Warfare',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/gzw-cheats-logo.webp',
	logoRaster: '/images/gzw-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Gray Zone Warfare cheats logo',
	defaultOgImage: '/images/gzw-cheats-hero-full.png',
	heroImage: '/images/gzw-cheats-hero-full.png',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#5311ee',
		bg: '#0a0811',
		soft: '#c3aef4',
		deep: '#4907df',
		hover: '#a07bf4',
		panel: '#0a080c',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'Gray Zone Warfare cheats',
		list: [
			'Gray Zone Warfare cheats',
			'Gray Zone Warfare ESP',
			'Gray Zone Warfare aimbot',
			'GZW cheats',
			'GZW ESP',
			'GZW aimbot',
			'Gray Zone Warfare wallhack',
			'Gray Zone Warfare hack',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Gray Zone Cheats | Undetected GZW ESP & Aimbot',
		homeDescription: 'Buy undetected Gray Zone Warfare cheats for Windows PC. PMC & bot ESP, loot ESP, FOV aimbot, no recoil, stream-proof overlay, and Cloud-DMA.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC — ESP, aimbot, Cheats, and patch updates.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live status for {brand} after {game} or {antiCheat} patches. Check before you deploy.',
		previewTitle: '{game} Preview | {brand}',
		previewDescription: 'Quick preview of {brand} — PMC ESP, loot containers, extract helicopters, FOV aimbot, and patch updates.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand}. Email {email} with your order ID.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Real buyer reviews for {brand} — PMC ESP, loot highlights, FOV aimbot, and Cloud-DMA on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — extract routes, ESP, aimbot, and {antiCheat} updates.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and Cloud-DMA for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. PMC & bot ESP, loot container ESP, extract helicopter markers, FOV aimbot, no recoil, stream-proof overlay, and Cloud-DMA with AWS option.',
		heroLede: 'Gray Zone Warfare cheats — PMC ESP, loot ESP, FOV aimbot & Cloud-DMA.',
		blogLabel: 'GZW Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you deploy.',
		previewIntro: 'A quick look at {brand} — PMC ESP, loot containers, extract markers, and updates after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Real feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'PMC & bot ESP',
		chipAim: 'FOV aimbot',
		chipRadar: 'Loot ESP',
		chipUpdates: 'Cloud-DMA',
		navPreview: 'Preview',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-12',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/gzw-cheats-esp.webp',
				title: 'Gray Zone Warfare cheats esp',
				caption: 'Gray Zone Warfare cheats esp wallhack overlay',
			},
			{
				src: '/images/gzw-cheats-wallhack.webp',
				title: 'Gray Zone Warfare cheats wallhack',
				caption: 'Gray Zone Warfare cheats wallhack for raids',
			},
			{
				src: '/images/gzw-cheats-aimbot.webp',
				title: 'Gray Zone Warfare cheats aimbot',
				caption: 'Gray Zone Warfare cheats aimbot soft aim',
			},
			{
				src: '/images/gzw-cheats-aimbot-view.webp',
				title: 'Gray Zone Warfare cheats features',
				caption: 'Gray Zone Warfare cheats features aimbot view',
			},
			{
				src: '/images/gzw-cheats-radar.webp',
				title: 'Gray Zone Warfare cheats status',
				caption: 'Gray Zone Warfare cheats radar after patch updates',
			},
			{
				src: '/images/gzw-cheats-raid.webp',
				title: 'Gray Zone Warfare cheats store',
				caption: 'Gray Zone Warfare cheats plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
