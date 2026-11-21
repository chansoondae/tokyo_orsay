import { HIGHLIGHTS, docent, type Docent } from "./notes";

export type Floor = "LBF" | "1F" | "2F";

export type Chapter = {
  id: string;
  label: string; // 짧은 표기 (Prologue, 1, 2 …)
  labelKo: string; // 프롤로그, 1장 …
  mark: string; // 칩 표기 P, 1 … E
  short: string; // 칩용 짧은 이름
  ko: string;
  en: string;
  ja: string;
  floor: Floor;
  route: number; // 관람 순서
  from: number; // 작품 번호 범위
  to: number;
  intro: string;
};

export type Work = {
  no: number;
  chapter: string;
  artistKo: string;
  artist: string;
  life: string;
  titleKo: string;
  title: string;
  titleJa: string;
  year: string;
  mediumKo: string;
  medium: string;
  size: string;
  sizeNote?: string;
  object: boolean; // 조각·공예 등 입체 작품
  docent: Docent;
  highlight: boolean;
  image?: string;
};

export const exhibition = {
  titleKo: "지금을 사는 기쁨",
  subtitleKo: "그럼에도 하루하루는 사랑스럽다",
  prefixKo: "도쿄도 미술관 개관 100주년 기념 · 오르세 미술관 소장",
  titleJa: "いまを生きる歓び",
  subtitleJa: "それでも日々は愛おしい",
  prefixJa: "東京都美術館開館100周年記念 オルセー美術館所蔵",
  titleEn: "What a Wonderful World: Masterworks from the Musée d’Orsay",
  venueKo: "도쿄도 미술관",
  venueJa: "東京都美術館",
  period: "2026.11.14 (토) – 2027.3.28 (일)",
  site: "https://www.tobikan.jp",
};

export const chapters: Chapter[] = [
  {
    id: "prologue",
    mark: "P",
    short: "프롤로그",
    label: "Prologue",
    labelKo: "프롤로그",
    ko: "춤 — 세계를 축복하다",
    en: "Dance: Celebrating the World",
    ja: "ダンス 世界をことほぐ",
    floor: "LBF",
    route: 1,
    from: 1,
    to: 16,
    intro:
      "전시는 ‘춤’으로 문을 엽니다. 신화 속 님프와 목신의 춤에서 오페라 극장의 발레리나, 무대 위에서 빛과 베일로 춤춘 로이 풀러까지. 회화·조각·사진 속에서 살아 움직이는 몸은 그 자체로 삶과 세계를 기뻐하는 몸짓입니다.",
  },
  {
    id: "ch1",
    mark: "1",
    short: "자연",
    label: "1",
    labelKo: "1장",
    ko: "자연의 아름다움을 발견하다",
    en: "Discovering the Beauty of Nature",
    ja: "自然の美を見出す",
    floor: "LBF",
    route: 2,
    from: 17,
    to: 33,
    intro:
      "계절이 바뀌는 들판과 강변, 유리와 칠보에 피어난 꽃, 사진기로 붙잡은 바다와 밤하늘. 19세기 예술가들은 화가의 붓뿐 아니라 공예가의 손과 사진가의 렌즈로 자연의 아름다움을 새롭게 발견했습니다.",
  },
  {
    id: "ch2",
    mark: "2",
    short: "노동",
    label: "2",
    labelKo: "2장",
    ko: "잘 먹고, 잘 일하고, 잘 자다",
    en: "Eat Well, Work Well, Sleep Well",
    ja: "よく食べ、よく働き、よく眠る",
    floor: "1F",
    route: 3,
    from: 34,
    to: 43,
    intro:
      "포스터를 장식한 밀레의 〈이삭 줍는 여인들〉을 비롯해, 들에서 일하고 도시에서 땀 흘리고 한낮에 잠시 쉬는 사람들의 모습. 평범한 노동과 휴식이야말로 삶을 지탱하는 기쁨이라는 것을 화가들은 진지하게 그려냈습니다.",
  },
  {
    id: "ch3",
    mark: "3",
    short: "일상",
    label: "3",
    labelKo: "3장",
    ko: "하루하루를 쌓아가다",
    en: "Day by Day",
    ja: "日々を重ねる",
    floor: "1F",
    route: 4,
    from: 44,
    to: 59,
    intro:
      "전쟁으로 포위된 파리의 기억부터 깃발로 가득한 축제의 거리, 공원 벤치와 정원의 해바라기, 피아노 앞의 소녀들까지. 근대 도시 파리에서 사람들이 하루하루를 어떻게 살아냈는지를 따라갑니다.",
  },
  {
    id: "ch4",
    mark: "4",
    short: "오락",
    label: "4",
    labelKo: "4장",
    ko: "노소도 빈부도 가리지 않고",
    en: "Young and Old, Rich and Poor alike",
    ja: "老いも若きも、貧富も問わず",
    floor: "2F",
    route: 5,
    from: 60,
    to: 79,
    intro:
      "서커스와 카바레, 가장무도회와 밤거리. 19세기 말 파리에는 나이와 계층을 가리지 않고 누구나 즐길 수 있는 오락이 넘쳐났습니다. 몽마르트르 ‘검은 고양이’의 그림자극에 쓰인 아연 실루엣도 함께 만나 보세요.",
  },
  {
    id: "ch5",
    mark: "5",
    short: "행복",
    label: "5",
    labelKo: "5장",
    ko: "행복의 감촉",
    en: "The Texture of Happiness",
    ja: "幸せの手ざわり",
    floor: "2F",
    route: 6,
    from: 80,
    to: 106,
    intro:
      "어머니의 무릎, 잠든 아기, 발치에서 조는 개와 고양이. 나비파 화가들이 직접 찍은 가족 사진과 따뜻한 실내 그림, 아이를 빚은 조각들이 손에 닿을 듯한 행복의 감촉을 전합니다.",
  },
  {
    id: "epilogue",
    mark: "E",
    short: "에필로그",
    label: "Epilogue",
    labelKo: "에필로그",
    ko: "그럼에도 세상은 아름답다",
    en: "And yet, the World is Beautiful",
    ja: "それでも世界は美しい",
    floor: "2F",
    route: 7,
    from: 107,
    to: 112,
    intro:
      "고흐의 〈론강의 별이 빛나는 밤〉에서 고갱의 타히티, 르누아르와 보나르의 낙원까지. 고단한 삶 속에서도 화가들이 끝내 붙잡았던 ‘세상의 아름다움’으로 전시를 마무리합니다.",
  },
];

export const chapterOf = (no: number) => chapters.find((c) => no >= c.from && no <= c.to)!;

// ───────── 재료 표기 ─────────
type M = readonly [ko: string, en: string];
const OC: M = ["캔버스에 유채", "Oil on canvas"];
const OCB: M = ["판지에 유채", "Oil on cardboard"];
const DEGAS: M = ["청동 소상, 파티나 마감", "Patinated bronze statuette"];
const GS: M = ["젤라틴 실버 프린트", "Gelatin silver bromide paper"];
const ARI: M = ["아리스토타이프", "Aristotype"];
const ARI_MOD: M = ["아리스토타이프 (모던 프린트)", "Aristotype (modern print)"];
const PGV: M = ["포토그라뷰어", "Photogravure"];
const COLLO: M = ["사진 제판 (콜로타이프)", "Photomechanical print (collotype)"];
const ALB2_M: M = [
  "알부민 프린트, 콜로디온 유리 원판 2장으로 인화, 판지에 부착",
  "Albumen print from two collodion glass negatives, mounted on cardboard",
];
const ALB_M: M = ["알부민 프린트, 판지에 부착", "Albumen print mounted on cardboard"];
const ALB_GSN: M = [
  "알부민 프린트, 젤라틴 실버 브로마이드 원판으로 인화",
  "Albumen print from a gelatin silver bromide negative",
];
const ALB_FILM: M = [
  "알부민 프린트, 젤라틴 실버 브로마이드 필름 원판으로 인화",
  "Albumen print from a gelatin silver bromide film negative",
];
const ALB_FILM_M: M = [
  "알부민 프린트, 젤라틴 실버 브로마이드 필름 원판으로 인화, 판지에 부착",
  "Albumen print from a gelatin silver bromide film negative, mounted on cardboard",
];
const ZINC: M = ["오려 내 채색한 아연판 실루엣", "Silhouette in cut and painted zinc"];

const DEGAS_ART = ["에드가 드가", "Edgar Degas", "1834–1917"] as const;
const CARPEAUX = ["장바티스트 카르포", "Jean-Baptiste Carpeaux", "1827–1875"] as const;
const BONNARD = ["피에르 보나르", "Pierre Bonnard", "1867–1947"] as const;
const RENOIR = ["피에르오귀스트 르누아르", "Pierre-Auguste Renoir", "1841–1919"] as const;
const DENIS = ["모리스 드니", "Maurice Denis", "1870–1943"] as const;
const LUCE = ["막시밀리앵 뤼스", "Maximilien Luce", "1858–1941"] as const;
const GALLE = ["에밀 갈레", "Emile Gallé", "1846–1904"] as const;
const AUBRY = ["샤를 오브리", "Charles Aubry", "1811–1877"] as const;
const RIVIERE = ["앙리 리비에르", "Henri Rivière", "1864–1951"] as const;
const CARRIERE = ["외젠 카리에르", "Eugène Carrière", "1849–1906"] as const;

type Artist = readonly [ko: string, en: string, life: string];

type Row = [
  no: number,
  artist: Artist,
  titleKo: string,
  title: string,
  titleJa: string,
  year: string,
  medium: M,
  size: string,
  object?: boolean,
  sizeNote?: string,
];

const S = true; // 입체 작품

const rows: Row[] = [
  // ───── 프롤로그: 춤 — 세계를 축복하다 ─────
  [1, CARPEAUX, "삼미신", "The Three Graces", "三美神", "1873년경", ["흰 대리석 군상", "White marble group"], "82.0×45.0×40.0", S],
  [2, ["카미유 코로", "Camille Corot", "1796–1875"], "님프들의 춤", "The Dance of the Nymphs", "ニンフのダンス", "1860년경", OC, "48.1×77.2"],
  [3, ["앙리에드몽 크로스", "Henri-Edmond Cross", "1856–1910"], "달아나는 님프들", "The Flight of the Nymphs", "逃げるニンフ", "1906년경", OC, "73.0×92.0"],
  [4, ["조제프 베르나르", "Joseph Bernard", "1866–1931"], "춤추는 목신", "Dancing Faun", "踊る牧神", "1912년", ["녹청빛 고색 파티나와 옅은 흘림 자국이 있는 청동상", "Bronze statue with an antique green patina and light drips"], "185.0×78.5×46.5", S],
  [5, ["조제프 베르나르", "Joseph Bernard", "1866–1931"], "춤추는 여인과 아이", "Woman and Child Dancing", "踊る女性と子ども", "1925년", ["청동 군상", "Bronze group"], "183.0×48.0×77.0", S],
  [6, BONNARD, "무희들", "Dancers", "踊り子", "1896년경", OCB, "28.0×36.0"],
  [7, DEGAS_ART, "르 펠티에 거리 오페라 극장의 무용 연습실", "The Dance Hall at the Opera House on Rue Le Peletier", "ル・ペルティエ通りのオペラ座の稽古場", "1872년", OC, "32.7×46.3"],
  [8, DEGAS_ART, "의상을 입고 쉬는 무희", "Dressed Dancer at Rest", "休息する衣装姿の踊り子", "1890–1911년 제작 (1921–31년 주조)", DEGAS, "43.6×23.0×26.0", S],
  [9, DEGAS_ART, "스페인 춤, 첫 번째 습작", "Spanish Dance, First Study", "スペインの踊り、第一習作", "1881–91년 제작 (1921–31년 주조)", DEGAS, "41.5×17.0×19.0", S],
  [10, DEGAS_ART, "무희, 그랑 아라베스크, 첫 번째 단계", "Dancer, Grand Arabesque, First Beat", "踊り子、グランド・アラベスク、第一段階", "1882–95년 제작 (1921–31년 주조)", DEGAS, "49.0×38.5×26.0", S],
  [11, DEGAS_ART, "무희, 오른발 아라베스크, 왼팔은 수평으로", "Dancer, Arabesque on Right Leg, Left Arm in Line", "踊り子、右足でのアラベスク、左手はライン上に", "1882–95년 제작 (1921–31년 주조)", DEGAS, "28.8×43.7×10.9", S],
  [12, ["폴 베르공", "Paul Bergon", "1863–1912"], "야외 습작", "Outdoor Study", "戸外習作", "1895년", PGV, "14.7×19.5"],
  [13, ["테이버 부조 사진 신디케이트 (파리)", "The Taber bas-relief photographic syndicate Ltd (Paris)", ""], "로이 풀러", "Loïe Fuller", "ロイ・フラー", "1897년", ARI, "18.4×22.6"],
  [14, ["새뮤얼 조슈아 베킷", "Samuel Joshua Beckett", "1870–1940"], "춤추는 로이 풀러, 베일 효과, 오른팔을 들고", "Loïe Fuller Dancing, Veil Effect, Right Arm Raised", "踊るロイ・フラー、ヴェールの効果、右腕を上げて", "1900–28년", GS, "10.2×14.5"],
  [15, ["아돌프 메이어", "Adolphe Meyer", "1868–1946"], "오른쪽을 향한 무희, 4분의 3 신상, 가슴에 늘어뜨린 두 갈래 긴 머리", "Dancer in Right Profile, Three-quarter Length, Two Long Strands of Hair on Her Chest", "右向きの踊り子、四分の三身像、胸には二束の長い髪", "1914년 (1912년 유리 원판으로 인쇄)", COLLO, "22.6×17.2"],
  [16, ["아돌프 메이어", "Adolphe Meyer", "1868–1946"], "뒷모습의 무희, 왼쪽 옆얼굴, 오른팔을 굽히고", "Dancer from Behind, Face in Left Profile, Right Arm Bent", "後ろ姿の踊り子、左向きの横顔、右手を曲げて", "1914년 (1912년 유리 원판으로 인쇄)", COLLO, "19.9×13.5"],

  // ───── 1장: 자연의 아름다움을 발견하다 ─────
  [17, ["장프랑수아 밀레", "Jean-François Millet", "1814–1875"], "봄", "The Spring", "春", "1868–73년", OC, "86.0×111.0"],
  [18, ["알프레드 시슬레", "Alfred Sisley", "1839–1899"], "봄, 사시나무와 아카시아", "Spring, Aspens and Acacias", "春、ヤマナラシとアカシア", "1889년", OC, "60.1×73.1"],
  [19, ["아돌프 고상", "Adolphe Gaussen", "1871–1957"], "여름 아침", "Summer Morning", "夏の朝", "제작연도 미상", OC, "50.0×65.5"],
  [20, LUCE, "에르블레의 센강", "The Seine River in Herblay", "エルブレーのセーヌ川", "1890년", OC, "50.3×79.3"],
  [21, CARPEAUX, "웨딩드레스를 입은 아멜리 드 몽포르", "Amélie de Montfort in Her Wedding Dress", "ウェディングドレスを着たアメリー・ド・モンフォール", "1869년", ["석고 흉상", "Plaster bust"], "67.5×46.6×29.3", S],
  [22, GALLE, "잔", "Cup", "器", "1880–84년경", ["‘월광색’ 간 유리, 금 윤곽을 두른 불투명 다색 에나멜 부조 장식", "Frosted ‘Clair-de-lune’ glass; opaque polychrome enamels in relief outlined in gold"], "6.0×25.0×25.0", S],
  [23, GALLE, "병", "Bottle", "瓶", "1880–84년경", ["‘월광색’ 유리, 금 윤곽을 두른 불투명 다색 에나멜 부조 장식", "‘Clair-de-lune’ glass; opaque polychrome enamels in relief outlined in gold"], "14.8×9.5", S],
  [24, GALLE, "플라스크형 꽃병", "Flask Vase", "フラコン形の花瓶", "1890–1900년경", ["다층 블로운 글라스, 금속박 봉입, 휠 조각 장식, 덧붙임 장식", "Multi-layered blown glass, metallic inclusions, wheel-engraved decoration, applications"], "21.0×11.5", S, "밑지름 7.5cm"],
  [25, ["페르낭 테스마르", "Fernand Thesmar", "1843–1912"], "푸크시아", "Fuchsias", "フクシア", "1907년", ["세브르 연질 자기 (‘사이공’형), 금선 칠보, 반투명·불투명 다색 유약", "Soft porcelain from Sèvres (‘Saigon’ vase), translucent and opaque polychrome gold cloisonné enamels"], "23.2×11.5×11.5", S],
  [26, ["르네 랄리크", "René Lalique", "1860–1945"], "양귀비", "Poppy", "ケシ", "1897년", ["금, 은, 브릴리언트 컷 다이아몬드, 유선·투각 칠보, 반투명 무광·불투명 유광 유약", "Gold, silver, brilliant-cut diamonds, cloisonné and openwork enamel, translucent matte and opaque gloss"], "7.5×23.5×10.5", S],
  [27, ["귀스타브 르 그레", "Gustave Le Gray", "1820–1884"], "지중해, 아그드 언덕", "Mediterranean Sea, Mount Agde", "地中海、アグドの丘", "1857년", ALB2_M, "32.6×42.0"],
  [28, ["귀스타브 르 그레", "Gustave Le Gray", "1820–1884"], "범선, 일명 ‘달빛 속의 범선’", "Brick, also known as the ‘Brick au clair de lune’", "帆船、通称「月明かりの帆船」", "1856년경", ["알부민 프린트, 콜로디온 유리 원판 2장으로 인화", "Albumen print from two collodion glass negatives"], "32.0×39.9"],
  [29, AUBRY, "엉겅퀴", "Thistles", "アザミ", "1864년경", ALB2_M, "38.0×27.5"],
  [30, AUBRY, "잎", "Leaves", "葉", "1864년경", ALB2_M, "26.7×37.2"],
  [31, AUBRY, "포도송이가 달린 포도나무 가지", "Vine Branches with Grapes", "房をつけたブドウの枝", "1864년경", ALB2_M, "27.0×37.7"],
  [32, ["앙리 형제", "Henry frères", ""], "백조자리 일부의 사진, 1885년 8월 13일, 파리 천문대", "Photograph of a Portion of Cygnus, 13 August 1885, Paris Observatory", "白鳥座の部分写真、1885年8月13日、パリ天文台", "1885년", ALB_M, "26.0×21.0"],
  [33, ["앙리 형제", "Henry frères", ""], "달 표면 사진, 북쪽 끝, 1890년 3월 27일, 파리 천문대", "Lunar Photograph, North Horn, 27 March 1890, Paris Observatory", "月面写真、北角、1890年3月27日、パリ天文台", "1890년", ["알부민 프린트 (확대), 판지에 부착", "Albumen print, enlargement; mounted on cardboard"], "22.0×16.5"],

  // ───── 2장: 잘 먹고, 잘 일하고, 잘 자다 ─────
  [34, ["장프랑수아 밀레", "Jean-François Millet", "1814–1875"], "이삭 줍는 여인들", "Gleaners", "落穂拾い", "1857년", OC, "83.5×110.0"],
  [35, ["쥘 브르통", "Jules Breton", "1827–1906"], "이삭 줍는 여인들을 불러들이다", "Calling in the Gleaners", "落穂拾いの招集", "1859년", OC, "90.5×176.0"],
  [36, ["쥘알렉시 뮈니에", "Jules-Alexis Muenier", "1863–1942"], "방랑자들", "The Wanderers", "放浪者", "1897년경", OC, "150.0×146.0"],
  [37, ["주제 줄리우 드 소자 핀투", "José Julio de Sousa Pinto", "1856–1939"], "감자 수확", "The Potato Harvest", "ジャガイモの収穫", "1898년", OC, "66.0×82.5"],
  [38, ["빈센트 반 고흐", "Vincent van Gogh", "1853–1890"], "낮잠", "The Siesta", "昼寝", "1889–90년", OC, "73.0×91.0"],
  [39, ["에밀 베르나르", "Emile Bernard", "1868–1941"], "바닷가의 수확", "Harvest by the Sea", "海辺の収穫", "1891년", OC, "73.3×92.5"],
  [40, ["에르네스트 뒤에즈", "Ernest Duez", "1843–1896"], "윌리스 뷔탱", "Ulysse Butin", "ユリス・ビュタン", "1880년경", OC, "155.0×135.0"],
  [41, ["카미유 피사로", "Camille Pissarro", "1830–1903"], "빨래를 너는 여인", "Woman Hanging out Laundry", "洗濯物を干す女性", "1887년", OC, "41.0×33.0"],
  [42, ["귀스타브 카유보트", "Gustave Caillebotte", "1848–1894"], "마루 깎는 사람들", "Floor Scrapers", "床削り", "1875년", OC, "102.0×147.0"],
  [43, LUCE, "말뚝 박는 사람들", "The Pile Drivers", "杭を打つ人々", "1902–03년", OC, "154.0×196.0"],

  // ───── 3장: 하루하루를 쌓아가다 ─────
  [44, ["피에르 퓌비 드 샤반", "Pierre Puvis de Chavannes", "1824–1898"], "비둘기", "The Pigeon", "鳩", "1871년", OC, "136.7×86.5"],
  [45, ["피에르 퓌비 드 샤반", "Pierre Puvis de Chavannes", "1824–1898"], "기구", "The Balloon", "気球", "1870년", OC, "138.5×86.0"],
  [46, ["클로드 모네", "Claude Monet", "1840–1926"], "파리 몽토르게유 거리, 1878년 6월 30일의 축제", "Rue Montorgueil, Paris. Celebration on 30 June 1878", "パリ、モントルグイユ通り、1878年6月30日の祝祭", "1878년", OC, "81.0×50.0"],
  [47, LUCE, "생미셸 강변과 노트르담 대성당", "The Quay of Saint-Michel and Notre-Dame", "サン＝ミシェル河岸とノートル＝ダム大聖堂", "1901년", OC, "73.0×60.5"],
  [48, ["앙리 르무안", "Henri Lemoine", "1848–1924"], "불로뉴 숲, 얼어붙은 호수와 스케이트 타는 사람들", "Bois de Boulogne, Frozen Lake and Skaters", "ブーローニュの森、凍った湖とスケートをする人々", "1894–1900년", ARI, "6.7×8.3"],
  [49, ["앙리 르무안", "Henri Lemoine", "1848–1924"], "센강 변의 건축물과 산책하는 사람들, 1900년 파리 만국박람회", "Buildings and Pedestrians along the Seine, 1900 World’s Fair, Paris", "セーヌ川沿いの建築物と散策する人々、1900年のパリ万国博覧会", "1900년", ARI_MOD, "7.5×10.0"],
  [50, ["샤를 오귀스탱 레르미트", "Charles Augustin Lhermitte", "1881–1945"], "파리, 겨울 공원", "Paris, a Public Garden in Winter", "パリ、冬の公園", "1912년", ["아리스토타이프, 판지에 부착 (모던 프린트)", "Aristotype mounted on cardboard (modern print)"], "8.3×5.8"],
  [51, ["샤를 오귀스탱 레르미트", "Charles Augustin Lhermitte", "1881–1945"], "파리, 투르넬 다리 상류의 낚시꾼들", "Paris—Anglers Upstream from the Tournelle Bridge", "パリ、トゥルネル橋上流の釣り人", "1912년경", ARI_MOD, "8.2×11.1"],
  [52, ["카미유 피사로", "Camille Pissarro", "1830–1903"], "에르미타주 공원의 한구석, 퐁투아즈", "Garden Corner at the Hermitage. Pontoise", "エルミタージュの公園の片隅、ポントワーズ", "1877년", OC, "55.0×46.0"],
  [53, ["케르그자비에 루셀", "Ker-Xavier Roussel", "1867–1944"], "테라스", "The Terrace", "テラス", "1892년경", OC, "37.0×75.5"],
  [54, ["베르트 모리조", "Berthe Morisot", "1841–1895"], "불로뉴 숲의 벤치에서", "On a Bench in the Bois de Boulogne", "ブーローニュの森のベンチにて", "1894년", OC, "38.2×55.3"],
  [55, ["귀스타브 카유보트", "Gustave Caillebotte", "1848–1894"], "해바라기, 프티 젠빌리에의 정원", "The Sunflowers, Garden at Petit Gennevilliers", "ヒマワリ、プティ・ジェヌヴィリエの庭", "1885년경", OC, "130.5×105.8"],
  [56, ["앙리 드 툴루즈로트레크", "Henri de Toulouse-Lautrec", "1864–1901"], "쥐스틴 디욀", "Justine Dieulh", "ジュスティーヌ・ディユール", "1891년", OCB, "74.0×58.0"],
  [57, ["카미유 카바이요라살", "Camille Cabaillot-Lassalle", "1839–1902"], "1874년의 살롱", "The Salon of 1874", "1874年のサロン", "1874년", OC, "100.0×81.5"],
  [58, RENOIR, "책 읽는 여인", "The Reader", "読書する人", "1874–76년", OC, "46.5×38.5"],
  [59, RENOIR, "피아노 앞의 소녀들", "Young Girls at the Piano", "ピアノの前の少女たち", "1892년", OC, "116.0×90.0"],

  // ───── 4장: 노소도 빈부도 가리지 않고 ─────
  [60, ["조르주 쇠라", "Georges Seurat", "1859–1891"], "서커스 (밑그림)", "The Circus, Sketch", "サーカス（下絵）", "1891년", OC, "55.2×46.2"],
  [61, ["알베르 롱드", "Albert Londe", "1858–1917"], "알마 경마장, 코끼리 쇼", "Hippodrome de l’Alma, Elephant Show", "アルマ曲馬場、象の見世物", "1891년", ALB_GSN, "8.7×17.3"],
  [62, ["알베르 롱드", "Albert Londe", "1858–1917"], "알마 경마장, 곡마사들", "Hippodrome de l’Alma, Male and Female Jockeys", "アルマ曲馬場、曲馬師", "1887–88년", ["알부민 프린트, 젤라틴 실버 브로마이드 원판으로 인화, 판지에 부착", "Albumen print from a gelatin silver bromide negative mounted on cardboard"], "12.0×16.5"],
  [63, ["해리 코그즈웰 루빈캠", "Harry Cogswell Rubincam", "1871–1940"], "서커스에서", "In the Circus", "サーカスにて", "1907년", PGV, "15.5×19.3"],
  [64, CARRIERE, "클리시 광장, 밤", "Place Clichy, at Night", "クリシー広場、夜", "1899–1900년", OC, "33.0×41.0"],
  [65, ["가브리엘 로페", "Gabriel Loppé", "1825–1913"], "밤의 광고탑", "Advertising Column at Night", "夜の広告塔", "1889년경", ARI, "17.9×12.9"],
  [66, ["가브리엘 로페", "Gabriel Loppé", "1825–1913"], "파리: 밤의 퐁뇌프, 사마리텐 백화점과 벨 자르디니에르 백화점", "Paris: Pont-Neuf, Samaritaine, and Belle Jardinière at Night", "パリ：夜のポン＝ヌフ、サマリテーヌ百貨店とベル・ジャルディニエール百貨店", "1900년", ["아리스토타이프, 젤라틴 실버 브로마이드 유리 원판으로 인화", "Aristotype from a gelatin silver bromide glass negative"], "17.9×12.9"],
  [67, CARPEAUX, "튈르리 궁전의 가장무도회", "Costume Ball at the Tuileries Palace", "テュイルリー宮殿での仮装舞踏会", "1867년", OC, "55.5×46.1"],
  [68, ["제임스 티소", "James Tissot", "1836–1902"], "야회", "Evening", "夜会", "1878년", OC, "91.0×51.0"],
  [69, ["앙리 드 툴루즈로트레크", "Henri de Toulouse-Lautrec", "1864–1901"], "앙리 사마리", "Henri Samary", "アンリ・サマリー", "1889년", OCB, "75.0×52.0"],
  [70, ["루이 앙크탱", "Louis Anquetin", "1861–1932"], "앙리 사마리", "Henri Samary", "アンリ・サマリー", "1890년경", OC, "71.0×59.3"],
  [71, ["조반니 볼디니", "Giovanni Boldini", "1842–1931"], "연회 장면", "Party Scene", "宴の情景", "1889년경", OC, "96.8×104.7"],
  [72, ["르네그자비에 프리네", "René-Xavier Prinet", "1861–1946"], "가수", "The Singer", "歌手", "1909년경", OCB, "42.8×60.4"],
  [73, RIVIERE, "인물 (미상)", "Unidentified Character", "人物（不詳）", "1886–96년", ZINC, "51.0×20.0"],
  [74, RIVIERE, "인물 (미상)", "Unidentified Character", "人物（不詳）", "1886–96년", ZINC, "40.5×14.5"],
  [75, RIVIERE, "변호사·정치가 조르주 클레망소 (1841–1929)", "Georges Clemenceau (1841–1929), Lawyer and Politician", "弁護士・政治家ジョルジュ・クレマンソー（1841–1929）", "1886–96년", ZINC, "47.7×12.8"],
  [76, RIVIERE, "시인 장 모레아스 (1856–1910)", "Jean Moréas (1856–1910), Poet", "詩人ジャン・モレアス（1856–1910）", "1886–96년", ZINC, "46.0×14.8"],
  [77, ["루이 모랭", "Louis Morin", "1855–1938"], "깃발과 카두케우스(헤르메스의 지팡이)를 든 중절모의 인물", "Character Wearing a Bowler Hat Holding a Banner and a Caduceus", "旗とケリュケイオン（ヘルメスの杖）を持つ、山高帽の人物", "1894년", ZINC, "37.0×23.0"],
  [78, ["앙리 솜", "Henry Somm", "1844–1907"], "작은 수도원장들", "Little Abbots", "小さな修道院長", "1886–96년", ZINC, "40.8×44.0"],
  [79, ["카랑 다슈", "Caran d’Ache", "1858–1909"], "돌격을 알리는 북", "Drums Sounding the Charge", "突撃を告げる太鼓", "1886–96년", ZINC, "36.0×96.5"],

  // ───── 5장: 행복의 감촉 ─────
  [80, DENIS, "잠옷 차림으로 어머니 무릎에 앉은 노엘, 몽루주 별장, 생제르맹앙레 (이블린)", "Noëlle on Her Mother’s Lap in Her Nightgown, Villa Montrouge, Saint-Germain-en-Laye (Yvelines)", "部屋着の母の膝に乗るノエル、モンルージュ荘、サン＝ジェルマン＝アン＝レー（イヴリーヌ県）", "1900년경", GS, "11.8×16.2"],
  [81, DENIS, "굴렁쇠를 가지고 노는 네 딸, 안마리·노엘·마들렌·베르나데트, 벨라 비스타 별장, 피에솔레 (이탈리아)", "The Four Girls with a Hoop, Anne-Marie, Noëlle, Madeleine, Bernadette, Villa Bella Vista, Fiesole (Italy)", "フープで遊ぶ4人の娘、アンヌ＝マリー、ノエル、マドレーヌ、ベルナデット、ベラ・ヴィスタ荘、フィエーゾレ（イタリア）", "1907년", GS, "16.0×15.0"],
  [82, DENIS, "발코니의 마들렌과 안마리, 베네치아 (이탈리아)", "Madeleine and Anne-Marie on the Balcony, Venice (Italy)", "バルコニーのマドレーヌとアンヌ＝マリー、ヴェネツィア（イタリア）", "1907년", GS, "14.5×14.2"],
  [83, BONNARD, "아틀리에 발코니에서, 파리", "On the Balcony of the Studio, Paris", "アトリエのバルコニーにて、パリ", "1902–03년", ALB_FILM, "7.9×10.9"],
  [84, BONNARD, "연못에서 물놀이하는 클로드 테라스와 자코토, 오른쪽에서 그 광경을 바라보는 샤를", "Claude Terrasse and Jacotot Bathing in a Pond, Charles Watching the Scene on the Right", "池で水浴びするクロード・テラスとジャコト、右手でその光景を見るシャルル", "1902–03년", ALB_FILM_M, "5.8×8.1"],
  [85, BONNARD, "테라스가 아이들이 헤엄치는 연못 한가운데 웅크린 클로드 테라스, 연못가에서 지켜보는 앙드레 테라스와 자코토", "Claude Terrasse Crouching in the Centre of a Pool Where the Terrasse Children are Swimming; on the Edge of the Pool, Andrée Terrasse and Jacotot are Watching Them", "テラス家の子どもが遊ぶ池の中央でしゃがむクロード・テラス、池のほとりでその光景を見るアンドレ・テラスとジャコト", "1902–03년", ALB_FILM_M, "5.9×8.2"],
  [86, BONNARD, "마르트의 발치에서 잠든 블랙", "Black Sleeping at Marthe’s Feet", "マルトの足元で眠るブラック", "1906년", ALB_FILM, "3.7×5.2"],
  [87, ["로버트 제퍼슨 빙엄", "Robert Jefferson Bingham", "1824–1870"], "화가 메소니에", "Meissonier, Painter", "画家メッソニエ", "1855년경", ALB_M, "8.5×5.2"],
  [88, ["르네 랄리크", "René Lalique", "1860–1945"], "라 브네트리에서, 채소밭 안뜰의 개 크라크와 정원사", "La Benneterie, Crac, and the Gardener, Vegetable Garden Courtyard", "ラ・ベヌトリーにて、菜園の中庭にいる犬のクラックと庭師", "1906년", ARI, "11.5×8.7"],
  [89, ["폴 뷔르티 아빌랑", "Paul Burty Haviland", "1880–1950"], "샤퐁발에서, 오귀스트 르드뤼(아버지)와 그의 고양이", "Chaponval, Auguste Ledru Sr. with His Cat", "シャポンヴァルにて、オーギュスト・ルドリュ（父）と彼の猫", "1918년", ARI, "10.9×8.5"],
  [90, ["작자 미상", "Anonymous", ""], "잠자는 고양이", "A Sleeping Cat", "眠る猫", "1870년경", ["알부민 프린트, 베이지색 판지에 부착", "Albumen print mounted on beige cardboard"], "8.3×5.5"],
  [91, ["조르주 레멘", "Georges Lemmen", "1865–1916"], "침대에서", "In Bed", "ベッドにて", "1900년경", OCB, "30.0×45.0"],
  [92, BONNARD, "실내", "Interior", "室内", "1920년경", OC, "53.0×57.0"],
  [93, ["에드몽 아망장", "Edmond Aman-Jean", "1858–1936"], "타데카롤린 자케", "Thadée-Caroline Jacquet", "タデ＝カロリーヌ・ジャケ", "1892년경", OC, "112.0×90.0"],
  [94, RENOIR, "앉아 있는 소녀", "Young Girl Sitting", "座る少女", "1909년", OC, "65.4×55.5"],
  [95, ["에두아르 뷔야르", "Edouard Vuillard", "1868–1940"], "음악의 저녁", "The Musical Evening", "音楽の夕べ", "1896–99년경", ["판지에 유채, 뒷면을 격자 살로 보강한 패널에 부착", "Oil on cardboard mounted on cradled panel"], "44.8×55.3"],
  [96, ["에두아르 마네", "Edouard Manet", "1832–1883"], "크리스털 꽃병의 꽃", "Flowers in a Crystal Vase", "ガラスの花瓶の花", "1882년", OC, "54.5×35.0"],
  [97, CARRIERE, "넬리 카리에르", "Nelly Carrière", "ネリー・カリエール", "1890년경", OC, "41.0×38.0"],
  [98, CARRIERE, "어머니의 입맞춤, 어머니와 두 아이", "Mother’s Kiss. Mother and Two Children", "母の接吻、母とふたりの子ども", "1892년경", OC, "50.0×60.7"],
  [99, DENIS, "멜레리오 가족", "The Mellerio Family", "メルリオ一家", "1897년", OC, "118.5×110.6"],
  [100, BONNARD, "손수레와 아이, 습작", "The Child with the Wheelbarrow, Study", "手押し車と子ども、習作", "1912년", OCB, "65.6×50.5"],
  [101, CARPEAUX, "뾰로통한 아이", "The Sulky Child", "ふくれっ面の子ども", "1856년", ["테라코타 흉상", "Terracotta bust"], "28.5×17.2×14.0", S],
  [102, ["장 카리에스", "Jean Carriès", "1855–1894"], "잠자는 아기", "The Sleeping Baby", "眠る赤ん坊", "1888년경", ["회색 파티나로 마감한 석고 고부조", "High relief in grey patinated plaster"], "17.0×37.0×31.0", S],
  [103, ["장 카리에스", "Jean Carriès", "1855–1894"], "보닛을 쓰고 턱받이를 한 아기", "Baby Wearing a Bonnet and Bib", "帽子をかぶりよだれ掛けをつけた赤ん坊", "1893년", ["흉상: 시유 석기", "Bust: glazed stoneware"], "26.2×20.2×20.0", S],
  [104, ["뤼시앵 슈네그", "Lucien Schnegg", "1864–1909"], "루이즈 슈네그의 초상", "Portrait of Louise Schnegg", "ルイーズ・シュネグの肖像", "1895년", ["대리석", "Marble"], "21.0×23.0×18.0", S],
  [105, ["피에르 로슈", "Pierre Roche", "1855–1922"], "아이", "Child", "子ども", "1898–99년", ["납 흉상", "Lead bust"], "29.5×18.7×18.0", S],
  [106, ["장 당프", "Jean Dampt", "1854–1945"], "할머니의 입맞춤", "The Grandmother’s Kiss", "祖母の接吻", "1892년", ["대리석과 나무로 된 이중 흉상", "Double bust in marble and wood"], "50.0×53.0×36.0", S],

  // ───── 에필로그: 그럼에도 세상은 아름답다 ─────
  [107, ["빈센트 반 고흐", "Vincent van Gogh", "1853–1890"], "론강의 별이 빛나는 밤", "The Starry Night", "星月夜", "1888년", OC, "73.0×92.0"],
  [108, ["폴 시냐크", "Paul Signac", "1863–1935"], "아비뇽, 저녁 (교황청)", "Avignon. Evening (The Papal Palace)", "アヴィニョン、夕暮れ（教皇宮殿）", "1909년", OC, "73.3×91.9"],
  [109, ["폴 세뤼지에", "Paul Sérusier", "1864–1927"], "황금빛 밀밭과 메밀밭", "The Field of Golden Wheat and Buckwheat", "黄金色の麦畑と蕎麦畑", "1900년경", OC, "103.0×47.3"],
  [110, ["폴 고갱", "Paul Gauguin", "1848–1903"], "아레아레아 (즐거움)", "Arearea", "アレアレア", "1892년", OC, "74.5×93.5"],
  [111, RENOIR, "목욕하는 여인들", "The Bathers", "浴女たち", "1918–19년", OC, "110.0×160.0"],
  [112, BONNARD, "전원 교향곡", "The Pastoral Symphony", "田園交響曲", "1916–20년", OC, "130.0×160.0"],
];

export const works: Work[] = rows.map(
  ([no, [artistKo, artist, life], titleKo, title, titleJa, year, [mediumKo, medium], size, object = false, sizeNote]) => ({
    no,
    chapter: chapterOf(no).id,
    artistKo,
    artist,
    life,
    titleKo,
    title,
    titleJa,
    year,
    mediumKo,
    medium,
    size,
    sizeNote,
    object,
    docent: docent[no],
    highlight: HIGHLIGHTS.has(no),
  }),
);
