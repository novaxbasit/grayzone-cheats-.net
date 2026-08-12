import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Gray Zone Warfare indetectables para Gray Zone Warfare en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Gray Zone Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Gray Zone Warfare en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'GZW ESP player tags hack', gallery: 'Galería Gray Zone Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Gray Zone Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y scav-run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Gray Zone Warfare indétectables pour Gray Zone Warfare sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'Gray Zone Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Gray Zone Warfare sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'GZW ESP player tags hack', gallery: 'Galerie Gray Zone Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Gray Zone Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et scav-run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Gray Zone Cheats für Gray Zone Warfare auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Gray Zone Warfare: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'GZW ESP player tags hack', gallery: 'Gray Zone Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Gray Zone Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und scav-run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Gray Zone Warfare indetectáveis para Gray Zone Warfare no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Gray Zone Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Gray Zone Warfare no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'GZW ESP player tags hack', gallery: 'Galeria Gray Zone Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Gray Zone Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e scav-run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Gray Zone Warfare indetectable per Gray Zone Warfare su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'Gray Zone Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Gray Zone Warfare su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'GZW ESP player tags hack', gallery: 'Galleria Gray Zone Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Gray Zone Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e scav-run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Gray Zone Warfare cheats voor Gray Zone Warfare op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Gray Zone Warfare: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'GZW ESP player tags hack', gallery: 'Gray Zone Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Gray Zone Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en scav-run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Gray Zone Warfare dla Gray Zone Warfare na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Gray Zone Warfare na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'GZW ESP player tags hack', gallery: 'Galeria Gray Zone Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Gray Zone Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i scav-run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Gray Zone Warfare для Gray Zone Warfare на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Gray Zone Warfare на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'GZW ESP player tags hack', gallery: 'Галерея Gray Zone Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Gray Zone Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и scav-run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Gray Zone Warfare için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Gray Zone Warfare Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'GZW ESP player tags hack', gallery: 'Gray Zone Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Gray Zone Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve scav-run\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Gray Zone Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Gray Zone Warfare undetected لـ Gray Zone Warfare على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'Gray Zone Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Gray Zone Warfare على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'GZW ESP player tags hack', gallery: 'معرض Gray Zone Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Gray Zone Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وscav-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Gray Zone Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Gray Zone Warfare向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'Gray Zone Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Gray Zone Warfare Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'Gray Zone Warfare cheats hero ESP aimbot wallhack', gallery: 'Gray Zone Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にGray Zone Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとscav-runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Gray Zone Warfare undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Gray Zone Warfare Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'Gray Zone Warfare cheats hero ESP aimbot wallhack', gallery: 'Gray Zone Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Gray Zone Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 scav-run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Gray Zone Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Gray Zone Warfare undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'Gray Zone Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Gray Zone Warfare Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'Gray Zone Warfare cheats hero ESP aimbot wallhack', gallery: 'Gray Zone Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Gray Zone Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和scav-run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Gray Zone Warfare undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Gray Zone Warfare Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'Gray Zone Warfare cheats hero ESP aimbot wallhack', gallery: 'Gray Zone Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Gray Zone Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Gray Zone Warfare undetected untuk Gray Zone Warfare di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Gray Zone Warfare di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'GZW ESP player tags hack', gallery: 'Galeri Gray Zone Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Gray Zone Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan scav-run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Gray Zone Warfare undetected สำหรับ Gray Zone Warfare บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Gray Zone Warfare บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'GZW ESP player tags hack', gallery: 'แกลเลอรี Gray Zone Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Gray Zone Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Gray Zone Warfare undetected cho Gray Zone Warfare trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Gray Zone Warfare trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'GZW ESP player tags hack', gallery: 'Thư viện Gray Zone Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Gray Zone Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và scav-run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Gray Zone Warfare для Gray Zone Warfare на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Gray Zone Warfare на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'GZW ESP player tags hack', gallery: 'Галерея Gray Zone Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Gray Zone Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і scav-run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Gray Zone Warfare cheaty pro Gray Zone Warfare na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Gray Zone Warfare na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'GZW ESP player tags hack', gallery: 'Galerie Gray Zone Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Gray Zone Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a scav-run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Gray Zone Warfare undetected pentru Gray Zone Warfare pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Gray Zone Warfare pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'GZW ESP player tags hack', gallery: 'Galerie Gray Zone Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Gray Zone Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și scav-run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Gray Zone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Gray Zone Warfare cheats för Gray Zone Warfare på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'Gray Zone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Gray Zone Warfare på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'GZW ESP player tags hack', gallery: 'Gray Zone Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Gray Zone Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och scav-run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'gzw-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'gzw-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for Gray Zone Warfare hacks', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Gray Zone Warfare cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Gray Zone Warfare hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Gray Zone Warfare cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Gray Zone Warfare', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'gzw-esp': 'Cajas de jugador y wallhack',
		'gzw-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'gzw-esp': 'Boîtes joueur et wallhack',
		'gzw-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'gzw-esp': 'Spielerboxen & Wallhack',
		'gzw-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'gzw-esp': 'Caixas de jogador e wallhack',
		'gzw-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'gzw-esp': 'Box giocatore e wallhack',
		'gzw-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'gzw-esp': 'Боксы игроков и wallhack',
		'gzw-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Gray Zone Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${suffix}`
		: `${topicName} 2026 | ${suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Gray Zone Cheats ${suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Gray Zone Warfare. ${p.delivery}. Easy Anti-Cheat maintenance included.`,
			),
		),
		h1: `${topicName} — ${suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: 'Gray Zone Warfare cheats',
		galleryTitle: 'Gray Zone Warfare cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read enemy squads with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for PMC raids and scav-runs.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'gzw-esp': { en: 'GZW ESP', es: 'ESP GZW', fr: 'ESP GZW', de: 'GZW ESP', pt: 'ESP GZW', it: 'ESP GZW', nl: 'GZW ESP', pl: 'ESP GZW', ru: 'ESP GZW', tr: 'GZW ESP', ar: 'ESP GZW', ja: 'GZW ESP', ko: 'GZW ESP', zh: 'GZW ESP', hi: 'GZW ESP', id: 'ESP GZW', th: 'GZW ESP', vi: 'ESP GZW', uk: 'ESP GZW', cs: 'GZW ESP', ro: 'ESP GZW', sv: 'GZW ESP' },
	'gzw-aimbot': { en: 'GZW Aimbot', es: 'Aimbot GZW', fr: 'Aimbot GZW', de: 'GZW Aimbot', pt: 'Aimbot GZW', it: 'Aimbot GZW', nl: 'GZW Aimbot', pl: 'Aimbot GZW', ru: 'Aimbot GZW', tr: 'GZW Aimbot', ar: 'Aimbot GZW', ja: 'GZW Aimbot', ko: 'GZW Aimbot', zh: 'GZW Aimbot', hi: 'GZW Aimbot', id: 'Aimbot GZW', th: 'GZW Aimbot', vi: 'Aimbot GZW', uk: 'Aimbot GZW', cs: 'GZW Aimbot', ro: 'Aimbot GZW', sv: 'GZW Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'GZW Wallhack', es: 'Wallhack GZW', fr: 'Wallhack GZW', de: 'GZW Wallhack', pt: 'Wallhack GZW', it: 'Wallhack GZW', nl: 'GZW Wallhack', pl: 'Wallhack GZW', ru: 'Wallhack GZW', tr: 'GZW Wallhack', ar: 'Wallhack GZW', ja: 'GZW Wallhack', ko: 'GZW Wallhack', zh: 'GZW Wallhack', hi: 'GZW Wallhack', id: 'Wallhack GZW', th: 'GZW Wallhack', vi: 'Wallhack GZW', uk: 'Wallhack GZW', cs: 'GZW Wallhack', ro: 'Wallhack GZW', sv: 'GZW Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'Gray Zone Cheats 2026', es: 'Trucos GZW 2026', fr: 'Triches GZW 2026', de: 'Gray Zone Cheats 2026', pt: 'Cheats GZW 2026', it: 'Cheat GZW 2026', nl: 'Gray Zone Cheats 2026', pl: 'Cheaty GZW 2026', ru: 'Читы GZW 2026', tr: 'GZW Hileleri 2026', ar: 'غش GZW 2026', ja: 'Gray Zone Cheats 2026', ko: 'Gray Zone Cheats 2026', zh: 'GZW作弊 2026', hi: 'Gray Zone Cheats 2026', id: 'Cheat GZW 2026', th: 'Gray Zone Cheats 2026', vi: 'Cheat GZW 2026', uk: 'Чіти GZW 2026', cs: 'Gray Zone Warfare cheaty 2026', ro: 'Cheats GZW 2026', sv: 'Gray Zone Cheats 2026' },
	hacks: { en: 'Gray Zone Cheats', es: 'Trucos GZW', fr: 'Triches GZW', de: 'Gray Zone Cheats', pt: 'Cheats GZW', it: 'Cheat GZW', nl: 'Gray Zone Cheats', pl: 'Cheaty GZW', ru: 'Читы GZW', tr: 'GZW Hileleri', ar: 'غش GZW', ja: 'Gray Zone Cheats', ko: 'Gray Zone Cheats', zh: 'GZW作弊', hi: 'Gray Zone Cheats', id: 'Cheat GZW', th: 'Gray Zone Cheats', vi: 'Cheat GZW', uk: 'Чіти GZW', cs: 'Gray Zone Warfare cheaty', ro: 'Cheats GZW', sv: 'Gray Zone Cheats' },
	'cheat-download': { en: 'GZW Cheat Download', es: 'Descarga Gray Zone Cheats', fr: 'Téléchargement Gray Zone Cheats', de: 'GZW Cheat Download', pt: 'Download Gray Zone Cheats', it: 'Download Gray Zone Cheats', nl: 'GZW Cheat Download', pl: 'Pobieranie Gray Zone Cheats', ru: 'Скачать Gray Zone Cheats', tr: 'GZW Hile İndir', ar: 'تحميل Gray Zone Cheats', ja: 'GZW Cheat Download', ko: 'GZW Cheat Download', zh: 'GZW作弊下载', hi: 'GZW Cheat Download', id: 'Download Cheat GZW', th: 'ดาวน์โหลด Gray Zone Cheats', vi: 'Tải Cheat GZW', uk: 'Завантаження Gray Zone Cheats', cs: 'Stáhnout Gray Zone Cheats', ro: 'Descărcare Gray Zone Cheats', sv: 'GZW Cheat Download' },
	'mod-menu': { en: 'GZW Mod Menu', es: 'Menú mod GZW', fr: 'Menu mod GZW', de: 'GZW Mod-Menü', pt: 'Menu mod GZW', it: 'Mod menu GZW', nl: 'GZW Mod Menu', pl: 'Mod menu GZW', ru: 'Мод-меню GZW', tr: 'GZW Mod Menü', ar: 'قائمة مود GZW', ja: 'GZW Mod Menu', ko: 'GZW 모드 메뉴', zh: 'GZW修改菜单', hi: 'GZW Mod Menu', id: 'Menu mod GZW', th: 'เมนูมอด GZW', vi: 'Mod menu GZW', uk: 'Мод-меню GZW', cs: 'GZW mod menu', ro: 'Meniu mod GZW', sv: 'GZW Mod-meny' },
	'soft-aim': { en: 'GZW Soft Aim', es: 'Soft aim GZW', fr: 'Soft aim GZW', de: 'GZW Soft Aim', pt: 'Soft aim GZW', it: 'Soft aim GZW', nl: 'GZW Soft Aim', pl: 'Soft aim GZW', ru: 'Soft aim GZW', tr: 'GZW Soft Aim', ar: 'Soft aim GZW', ja: 'GZW Soft Aim', ko: 'GZW Soft Aim', zh: 'GZW Soft Aim', hi: 'GZW Soft Aim', id: 'Soft aim GZW', th: 'GZW Soft Aim', vi: 'Soft aim GZW', uk: 'Soft aim GZW', cs: 'GZW Soft Aim', ro: 'Soft aim GZW', sv: 'GZW Soft Aim' },
	'best-cheats': { en: 'Best Gray Zone Cheats', es: 'Mejores trucos GZW', fr: 'Meilleures triches GZW', de: 'Beste Gray Zone Cheats', pt: 'Melhores cheats GZW', it: 'Migliori cheat GZW', nl: 'Beste Gray Zone Cheats', pl: 'Najlepsze cheaty GZW', ru: 'Лучшие читы GZW', tr: 'En İyi GZW Hileleri', ar: 'أفضل غش GZW', ja: '最強GZWチート', ko: '최고의 GZW 치트', zh: '最佳GZW作弊', hi: 'सर्वश्रेष्ठ Gray Zone Cheats', id: 'Cheat GZW terbaik', th: 'Cheat GZW ที่ดีที่สุด', vi: 'Cheat GZW tốt nhất', uk: 'Найкращі чіти GZW', cs: 'Nejlepší Gray Zone Warfare cheaty', ro: 'Cele mai bune cheats GZW', sv: 'Bästa Gray Zone Cheats' },
	'aimbot-hack': { en: 'GZW Aimbot Hack', es: 'Hack aimbot GZW', fr: 'Hack aimbot GZW', de: 'GZW Aimbot Hack', pt: 'Hack aimbot GZW', it: 'Hack aimbot GZW', nl: 'GZW Aimbot Hack', pl: 'Hack aimbot GZW', ru: 'Хак aimbot GZW', tr: 'GZW Aimbot Hilesi', ar: 'هاك Aimbot GZW', ja: 'GZW Aimbot Hack', ko: 'GZW 에임봇 핵', zh: 'GZW自瞄外挂', hi: 'GZW Aimbot Hack', id: 'Hack aimbot GZW', th: 'Hack Aimbot GZW', vi: 'Hack aimbot GZW', uk: 'Хак aimbot GZW', cs: 'GZW aimbot hack', ro: 'Hack aimbot GZW', sv: 'GZW Aimbot Hack' },
	'esp-hack': { en: 'GZW ESP Hack', es: 'Hack ESP GZW', fr: 'Hack ESP GZW', de: 'GZW ESP Hack', pt: 'Hack ESP GZW', it: 'Hack ESP GZW', nl: 'GZW ESP Hack', pl: 'Hack ESP GZW', ru: 'Хак ESP GZW', tr: 'GZW ESP Hilesi', ar: 'هاك ESP GZW', ja: 'GZW ESP Hack', ko: 'GZW ESP 핵', zh: 'GZW ESP外挂', hi: 'GZW ESP Hack', id: 'Hack ESP GZW', th: 'Hack ESP GZW', vi: 'Hack ESP GZW', uk: 'Хак ESP GZW', cs: 'GZW ESP hack', ro: 'Hack ESP GZW', sv: 'GZW ESP Hack' },
	'unlock-all': { en: 'GZW Unlock All', es: 'Unlock all GZW', fr: 'Unlock all GZW', de: 'GZW Unlock All', pt: 'Unlock all GZW', it: 'Unlock all GZW', nl: 'GZW Unlock All', pl: 'Unlock all GZW', ru: 'Unlock all GZW', tr: 'GZW Unlock All', ar: 'Unlock all GZW', ja: 'GZW Unlock All', ko: 'GZW Unlock All', zh: 'GZW Unlock All', hi: 'GZW Unlock All', id: 'Unlock all GZW', th: 'GZW Unlock All', vi: 'Unlock all GZW', uk: 'Unlock all GZW', cs: 'GZW Unlock All', ro: 'Unlock all GZW', sv: 'GZW Unlock All' },
};

const CTA2_HREF = {
	'gzw-esp': '/gzw-wallhack/',
	'gzw-aimbot': '/gzw-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/undetected-gzw-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/eac-bypass/',
	wallhack: '/gzw-esp/',
	radar: '/gzw-esp/',
	'eac': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/undetected-gzw-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/gzw-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/gzw-aimbot/',
	'esp-hack': '/gzw-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Gray Zone Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Gray Zone Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for grayzonecheats.net and Gray Zone Warfare licenses.`),
		imageAlt: 'Gray Zone Warfare cheats',
		galleryTitle: 'Gray Zone Warfare cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on grayzonecheats.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@grayzonecheats.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
