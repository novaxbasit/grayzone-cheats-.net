import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'Gray Zone Warfare cheats',
		title: 'Gray Zone Warfare cheats gallery',
		subtitle: 'Simple Gray Zone Warfare cheats visuals — ESP, wallhack, aimbot, and radar for Gray Zone Warfare on PC.',
		lead: 'Gray Zone Cheats helps you spot PMCs, bots, loot, and extracts with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'Gray Zone Warfare cheats esp', copy: 'See players through walls with Gray Zone Warfare cheats esp and wallhack overlays.' },
			{ title: 'Gray Zone Warfare cheats radar', copy: 'Track nearby threats with Gray Zone Warfare cheats radar before you push or extract.' },
			{ title: 'Gray Zone Warfare cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for GZW raids on Windows PC.' },
		],
		updatesLabel: 'Gray Zone Warfare cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Galería Gray Zone Warfare',
		subtitle: 'Visuales de Gray Zone Warfare con loadouts, peleas de escuadrón y combate battle royale — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Gray Zone Cheats está pensado para el loop BR de Gray Zone Warfare: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Verdansk y scav-run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Gray Zone Warfare', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Galerie Gray Zone Warfare',
		subtitle: 'Visuels Gray Zone Warfare — loadouts, combats d\'escouade et battle royale — avec ESP, radar et Aimbot.',
		lead: 'Gray Zone Cheats suit la boucle BR de Gray Zone Warfare : lire la carte, suivre les escouades, loot et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Verdansk et scav-run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Gray Zone Warfare', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Gray Zone Warfare Galerie',
		subtitle: 'Gray Zone Warfare-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'Gray Zone Cheats passt zur BR-Schleife von Gray Zone Warfare: Karte lesen, Gegner-Trupps tracken, looten und Reboot van überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Verdansk und scav-run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Gray Zone Warfare Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Gray Zone Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Galeria Gray Zone Warfare',
		subtitle: 'Visuais de Gray Zone Warfare com loadouts, combates de esquadrão e battle royale — com ESP, radar e Aimbot.',
		lead: 'Gray Zone Cheats segue o loop BR do Gray Zone Warfare: ler o mapa, rastrear esquadrões, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Verdansk e scav-run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Gray Zone Warfare', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Galleria Gray Zone Warfare',
		subtitle: 'Immagini Gray Zone Warfare — loadout, scontri di squadra e battle royale — con ESP, radar e Aimbot.',
		lead: 'Gray Zone Cheats è pensato per il loop BR di Gray Zone Warfare: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Verdansk e scav-run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Gray Zone Warfare', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Gray Zone Warfare galerij',
		subtitle: 'Gray Zone Warfare-beelden van loadouts, squadgevechten en battle royale — met ESP, radar en Aimbot.',
		lead: 'Gray Zone Cheats volgt de BR-loop van Gray Zone Warfare: kaart lezen, vijandelijke squads volgen, looten en de extract overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Verdansk en scav-run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Gray Zone Warfare Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Gray Zone Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Galeria Gray Zone Warfare',
		subtitle: 'Grafiki Gray Zone Warfare — loadouty, walki drużynowe i battle royale — z ESP, radar i Aimbot.',
		lead: 'Gray Zone Cheats pasuje do pętli BR Gray Zone Warfare: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Verdansk i scav-run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Gray Zone Warfare', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Галерея Gray Zone Warfare',
		subtitle: 'Визуалы Gray Zone Warfare — лоадауты, бои отрядов и battle royale — с ESP, радаром и Aimbot.',
		lead: 'Gray Zone Cheats создан для BR-цикла Gray Zone Warfare: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Verdansk и scav-run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Gray Zone Warfare', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Gray Zone Warfare galerisi',
		subtitle: 'Loadout, takım savaşları ve battle royale görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Gray Zone Cheats, Gray Zone Warfare BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Verdansk ve scav-run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Gray Zone Warfare Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Gray Zone Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Gray Zone Cheats',
		title: 'معرض Gray Zone Warfare',
		subtitle: 'صور Gray Zone Warfare — loadouts ومعارك الفرق وbattle royale — مع ESP ورادار وAimbot.',
		lead: 'Gray Zone Cheats مبني لحلقة BR في Gray Zone Warfare: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Verdansk وscav-run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Gray Zone Warfare', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Gray Zone Warfare ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのGray Zone Warfareビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Gray Zone CheatsはGray Zone WarfareのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Verdanskとscav-runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Gray Zone Warfareエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Gray Zone Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Gray Zone Warfare 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Gray Zone Warfare 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Gray Zone Cheats는 Gray Zone Warfare BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Verdansk와 scav-run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Gray Zone Warfare 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Gray Zone Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Gray Zone Warfare 图库',
		subtitle: 'Gray Zone Warfare 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Gray Zone Cheats 为 Gray Zone Warfare BR 循环设计：读图、追踪敌方小队、搜刮并在 extract 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Verdansk 和 scav-run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Gray Zone Warfare 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Gray Zone Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Gray Zone Warfare गैलरी',
		subtitle: 'Loadout, squad fights और battle royale visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Gray Zone Cheats Gray Zone Warfare BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और extract survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Verdansk और scav-run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Gray Zone Warfare Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Gray Zone Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Galeri Gray Zone Warfare',
		subtitle: 'Visual Gray Zone Warfare — loadout, pertempuran squad, dan battle royale — dengan ESP, radar, dan Aimbot.',
		lead: 'Gray Zone Cheats untuk loop BR Gray Zone Warfare: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Verdansk dan scav-run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Gray Zone Warfare', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Gray Zone Cheats',
		title: 'แกลเลอรี Gray Zone Warfare',
		subtitle: 'ภาพ Gray Zone Warfare — loadout การต่อสู้ทีม และ battle royale — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Gray Zone Cheats สำหรับลูป BR ของ Gray Zone Warfare: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Verdansk และ scav-run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Gray Zone Warfare', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Thư viện Gray Zone Warfare',
		subtitle: 'Hình ảnh Gray Zone Warfare — loadout, chiến đấu squad và battle royale — với ESP, radar và Aimbot.',
		lead: 'Gray Zone Cheats cho vòng BR Gray Zone Warfare: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Verdansk và scav-run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Gray Zone Warfare', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Галерея Gray Zone Warfare',
		subtitle: 'Візуали Gray Zone Warfare — loadout, бої загонів і battle royale — з ESP, радаром і Aimbot.',
		lead: 'Gray Zone Cheats для BR-циклу Gray Zone Warfare: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Verdansk і scav-run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Gray Zone Warfare', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Galerie Gray Zone Warfare',
		subtitle: 'Gray Zone Warfare vizuály — loadouty, squad souboje a battle royale — s ESP, radarem a Aimbot.',
		lead: 'Gray Zone Cheats pro BR smyčku Gray Zone Warfare: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Verdansk a scav-run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Gray Zone Warfare', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Galerie Gray Zone Warfare',
		subtitle: 'Vizualuri Gray Zone Warfare — loadout, lupte de squad și battle royale — cu ESP, radar și Aimbot.',
		lead: 'Gray Zone Cheats pentru bucla BR Gray Zone Warfare: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Verdansk și scav-run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Gray Zone Warfare', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Gray Zone Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Gray Zone Cheats',
		title: 'Gray Zone Warfare galleri',
		subtitle: 'Gray Zone Warfare-bilder — loadouts, squadstrider och battle royale — med ESP, radar och Aimbot.',
		lead: 'Gray Zone Cheats för Gray Zone Warfare:s BR-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Verdansk och scav-run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Gray Zone Warfare Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Gray Zone Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
