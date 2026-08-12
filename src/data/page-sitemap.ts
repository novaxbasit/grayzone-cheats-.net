import { siteConfig } from './site';
import { grayzoneImages } from './grayzone';
import { englishPaths, pageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';
import {
	pageSitemapImageLabels,
	resolvedSitemapImages,
	sitemapLastmod,
} from './brand-sitemap';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/**
 * One screenshot per page — paths stay in grayzoneImages; titles/captions from brand tokens.
 */
const pageImageSrcById: Record<PageId, string> = {
	home: grayzoneImages.hero,
	'gzw-esp': grayzoneImages.playerEsp,
	'gzw-aimbot': grayzoneImages.aimbotCombat,
	features: grayzoneImages.aimbotSkeleton,
	pricing: grayzoneImages.cheatsCombat,
	setup: grayzoneImages.playerEsp,
	updates: grayzoneImages.hero,
	faq: grayzoneImages.aimbotSkeleton,
	support: grayzoneImages.cheatsCombat,
	undetected: grayzoneImages.espWallhack,
	wallhack: grayzoneImages.espWallhack,
	radar: grayzoneImages.playerEsp,
	eac: grayzoneImages.aimbotCombat,
	'cheats-2026': grayzoneImages.hero,
	hacks: grayzoneImages.cheatsCombat,
	'cheat-download': grayzoneImages.cheatsCombat,
	'mod-menu': grayzoneImages.playerEsp,
	'soft-aim': grayzoneImages.aimbotSkeleton,
	'best-cheats': grayzoneImages.hero,
	'aimbot-hack': grayzoneImages.aimbotSkeleton,
	'esp-hack': grayzoneImages.espWallhack,
	'unlock-all': grayzoneImages.playerEsp,
	privacy: grayzoneImages.aimbotCombat,
	refund: grayzoneImages.cheatsCombat,
	terms: grayzoneImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[sitemap] No image path configured for pageId: ${pageId}`);
	}
}

/**
 * Canonical English sitemap entries — always includes every pageId from routing.
 * Absolute locs use siteConfig.url (from brand.url).
 */
export const pageSitemapEntries: PageSitemapEntry[] = pageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: sitemapLastmod(meta.lastmod),
		images: [img(pageImageSrcById[pageId], labels.title, labels.caption)],
	};
});

/** Unique keyword images for the dedicated image sitemap (editable in Brand Studio). */
export const imageSitemapEntries: SitemapImage[] = resolvedSitemapImages().map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
