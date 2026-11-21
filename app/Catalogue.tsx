"use client";

import { useMemo, useState } from "react";
import { chapters, exhibition, works as baseWorks, type Work } from "./data";
import FloorMapSheet from "./FloorMap";
import WorkSheet from "./WorkSheet";

type Filter = "all" | "highlight";

const pad = (n: number) => String(n).padStart(2, "0");

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[\s·・=＝\-–’'()（）]/g, "");
}

export default function Catalogue({ images }: { images: Record<number, string> }) {
  const works = useMemo(() => baseWorks.map((w) => ({ ...w, image: images[w.no] })), [images]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [openNo, setOpenNo] = useState<number | null>(null);
  const [mapOpen, setMapOpen] = useState(false);
  const [currentCh, setCurrentCh] = useState<string | null>(null);

  // 안내도를 여는 순간, 목록에서 지금 보고 있는 장을 계산해 강조
  const openMap = () => {
    let cur: string | null = null;
    for (const el of document.querySelectorAll<HTMLElement>(".chapter[id^='ch-']")) {
      if (el.getBoundingClientRect().top <= 200) cur = el.id.slice(3);
      else break;
    }
    const list = document.getElementById("list");
    if (list && list.getBoundingClientRect().bottom < 200) cur = null;
    setCurrentCh(cur);
    setMapOpen(true);
  };

  const visible = useMemo(() => {
    const q = normalize(query.trim());
    return works.filter((w) => {
      if (filter === "highlight" && !w.highlight) return false;
      if (!q) return true;
      if (/^\d+$/.test(q)) return w.no === Number(q);
      return [w.artistKo, w.artist, w.titleKo, w.title, w.titleJa].some((f) => normalize(f).includes(q));
    });
  }, [query, filter, works]);

  const visibleSet = useMemo(() => new Set(visible.map((w) => w.no)), [visible]);
  const openIndex = openNo == null ? -1 : visible.findIndex((w) => w.no === openNo);
  const openWork = openNo == null ? null : works.find((w) => w.no === openNo) ?? null;

  const go = (id: string, smooth = true) =>
    document.getElementById(id)?.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });

  return (
    <>
      {/* ───────── HERO ───────── */}
      <header className="hero">
        <p className="hero-top">
          <span>{exhibition.prefixKo}</span>
          <span className="ja" lang="ja">
            {exhibition.prefixJa}
          </span>
        </p>

        <div className="hero-stage">
          <span className="hero-d" aria-hidden>
            d’
          </span>
          <figure className="hero-poster">
            <img src="/img/poster.jpg" alt="전시 포스터 — 장프랑수아 밀레 〈이삭 줍는 여인들〉(1857)" />
          </figure>
          <h1 className="hero-title">
            <span className="v">지금을</span>
            <span className="v">사는</span>
            <span className="v">기쁨</span>
          </h1>
          <p className="hero-sub" aria-label={exhibition.subtitleKo}>
            <span className="v">그럼에도</span>
            <span className="v">하루하루는</span>
            <span className="v">사랑스럽다</span>
          </p>
          <span className="hero-orsay" aria-hidden>
            Orsay
          </span>
        </div>

        <div className="hero-info">
          <p className="hero-en">{exhibition.titleEn}</p>
          <p className="hero-ja" lang="ja">
            {exhibition.titleJa} — {exhibition.subtitleJa}
          </p>
          <div className="hero-date" aria-label="2026년 11월 14일 토요일부터 2027년 3월 28일 일요일까지">
            <span className="d">
              <span className="yr">2026</span>
              <b>11.14</b>
              <small>sat.</small>
            </span>
            <span className="d">
              <span className="dash" aria-hidden />
              <span className="yr">2027</span>
              <b>3.28</b>
              <small>sun.</small>
            </span>
          </div>
          <p className="hero-venue">
            {exhibition.venueKo} <span lang="ja">{exhibition.venueJa}</span>
          </p>
          <p className="hero-tag">
            도쿄 우에노 공원 · 포스터 작품은 밀레 〈이삭 줍는 여인들〉 <span className="nw">(No. 34)</span>
          </p>
          <div className="hero-cta">
            <button className="btn-ink" onClick={() => go("list")}>
              작품 목록 보기 <span aria-hidden>↓</span>
            </button>
            <button className="btn-line" onClick={openMap}>
              층별 안내도
            </button>
          </div>
        </div>
      </header>

      {/* ───────── STICKY TOOLBAR ───────── */}
      <nav className="toolbar" aria-label="작품 목록 도구">
        <div className="toolbar-row">
          <label className="search">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              inputMode="search"
              placeholder="작가·작품·번호 검색"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="작품 검색"
            />
          </label>
          <button
            className={`chip chip-hl ${filter === "highlight" ? "on" : ""}`}
            aria-pressed={filter === "highlight"}
            onClick={() => setFilter(filter === "highlight" ? "all" : "highlight")}
          >
            ★ 주요작
          </button>
        </div>
        <div className="toolbar-row chips">
          {chapters.map((c) => (
            <button key={c.id} className="chip chip-chapter" onClick={() => go(`ch-${c.id}`)}>
              <b>{c.mark}</b>
              {c.short}
              <i className={`fl fl-${c.floor}`}>{c.floor}</i>
            </button>
          ))}
        </div>
      </nav>

      <main id="list">
        <p className="list-note">
          작품 번호는 전시장 내 번호와 일치하지만, 실제 전시 순서와 꼭 같지는 않습니다. 작품을 누르면 도슨트 해설과 상세 정보, 실제 크기 비교를 볼 수
          있어요.
        </p>

        {visible.length === 0 && <p className="empty">조건에 맞는 작품이 없습니다.</p>}

        {chapters.map((c) => {
          const list = works.filter((w) => w.chapter === c.id && visibleSet.has(w.no));
          if (list.length === 0) return null;
          const isEnd = c.id === "prologue" || c.id === "epilogue";
          return (
            <section key={c.id} id={`ch-${c.id}`} className={`chapter ${isEnd ? "is-end" : ""}`}>
              <div className="chapter-band">
                <div className="chapter-mark">
                  {isEnd ? (
                    <span className="cm-word">{c.label}</span>
                  ) : (
                    <>
                      <span className="cm-small">chapter</span>
                      <span className="cm-num">{c.label}</span>
                    </>
                  )}
                </div>
                <div className="chapter-text">
                  <span className="chapter-meta">
                    <span className={`floor f-${c.floor}`}>{c.floor}</span>
                    {c.labelKo} · No. {c.from}–{c.to}
                  </span>
                  <h2>{c.ko}</h2>
                  <p className="chapter-en">{c.en}</p>
                  <p className="chapter-ja" lang="ja">
                    {c.ja}
                  </p>
                </div>
              </div>
              <p className="chapter-intro">{c.intro}</p>

              <ol className="rows">
                {list.map((w) => (
                  <WorkRow key={w.no} w={w} onOpen={() => setOpenNo(w.no)} />
                ))}
              </ol>
            </section>
          );
        })}
      </main>

      {/* ───────── INFO ───────── */}
      <section id="info" className="info">
        <h2 className="block-title">
          관람 안내 <em>Information</em>
        </h2>
        <dl className="info-grid">
          <div>
            <dt>회기</dt>
            <dd>
              <span className="nw">2026년 11월 14일(토) –</span> <span className="nw">2027년 3월 28일(일)</span>
            </dd>
          </div>
          <div>
            <dt>장소</dt>
            <dd>
              도쿄도 미술관 기획전시실 <span lang="ja">東京都美術館 企画展示室</span>
              <br />
              <small>도쿄도 다이토구 우에노 공원 내 · JR 우에노역 공원 개찰구에서 도보 약 7분</small>
            </dd>
          </div>
          <div>
            <dt>개실 시간</dt>
            <dd>
              <span className="nw">9:30 – 17:30</span> · <span className="nw">금요일 9:30 – 20:00</span>
              <br />
              <small>입실은 폐실 30분 전까지</small>
            </dd>
          </div>
          <div>
            <dt>휴실일</dt>
            <dd>
              월요일, 11/24(화), 12/22(화) – 2027.1/3(일), 1/12(화), 3/23(화)
              <br />
              <small>단, 11/23(월·공휴일), 1/4(월), 1/11(월·공휴일), 3/22(월)은 개실</small>
            </dd>
          </div>
          <div>
            <dt>관람료</dt>
            <dd>
              <table className="fee">
                <tbody>
                  <tr>
                    <th>일반</th>
                    <td>2,400엔 (2,200엔)</td>
                  </tr>
                  <tr>
                    <th>대학·전문학교생</th>
                    <td>1,300엔 (1,100엔)</td>
                  </tr>
                  <tr>
                    <th>65세 이상</th>
                    <td>1,600엔 (1,400엔)</td>
                  </tr>
                </tbody>
              </table>
              <small>( ) 안은 사전 판매 요금. 할인·무료 대상 등 최신 정보는 공식 사이트를 확인하세요.</small>
            </dd>
          </div>
        </dl>

        <div className="rules">
          <h3>전시장 유의사항</h3>
          <ul>
            <li>
              사진 촬영은 <b>안내도의 회색 영역</b>에서만 가능합니다. 전시실 내부는 촬영할 수 없어요.
            </li>
            <li>출품작은 29–31번(프랑스 국립가구관 모빌리에 나시오날 기탁)을 제외하고 모두 오르세 미술관 소장품입니다.</li>
            <li>출품 작품은 변경될 수 있습니다.</li>
            <li>작품 보호를 위해 소장처의 대여 조건에 따라 전시실의 온도·습도·조명을 관리하고 있습니다.</li>
          </ul>
        </div>

        <p className="credits">
          주최: 도쿄도 미술관(공익재단법인 도쿄도 역사문화재단), 오르세 미술관, 니혼게이자이신문사, TV도쿄, BS TV도쿄 · 후원: 주일 프랑스 대사관 /
          앵스티튀 프랑세, J-WAVE 81.3FM · 협력: 일본항공, 일본화물항공
        </p>
        <a className="site-link" href={exhibition.site} target="_blank" rel="noreferrer">
          도쿄도 미술관 공식 사이트 ↗
        </a>
      </section>

      <footer className="footer">
        <p>
          이 페이지는 전시장 배포 작품 목록(List of Works)을 바탕으로 만든 비공식 한국어 안내서입니다. 작품 제목의 한국어 표기는 번역자 임의 번역이며,
          정식 명칭은 일본어·영어 원제를 참고하세요.
        </p>
        <p className="footer-logo">
          d’<span>Orsay</span>
        </p>
        <div className="footer-credit">
          <a className="fc-brand" href="https://artfrnd.com/" target="_blank" rel="noreferrer">
            <b>아트프렌즈 아트버스</b>
            <span>artfrnd.com ↗</span>
          </a>
          <a className="fc-mail" href="mailto:info@artfrnd.com">
            info@artfrnd.com
          </a>
        </div>
      </footer>

      {!openWork && !mapOpen && (
        <button className="map-fab" onClick={openMap} aria-label="층별 안내도 열기">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            <path
              d="M9 4 3 6.5v13.5l6-2.5 6 2.5 6-2.5V4l-6 2.5L9 4Z M9 4v13.5 M15 6.5V20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          <span>안내도</span>
        </button>
      )}

      {mapOpen && (
        <FloorMapSheet
          current={currentCh}
          onClose={() => setMapOpen(false)}
          onJump={(id) => {
            setMapOpen(false);
            if (!document.getElementById(`ch-${id}`)) {
              setQuery("");
              setFilter("all");
            }
            setTimeout(() => go(`ch-${id}`, false), 50);
          }}
        />
      )}

      {openWork && (
        <WorkSheet
          work={openWork}
          onClose={() => setOpenNo(null)}
          onPrev={openIndex > 0 ? () => setOpenNo(visible[openIndex - 1].no) : undefined}
          onNext={openIndex >= 0 && openIndex < visible.length - 1 ? () => setOpenNo(visible[openIndex + 1].no) : undefined}
        />
      )}
    </>
  );
}

function WorkRow({ w, onOpen }: { w: Work; onOpen: () => void }) {
  return (
    <li className={`row ${w.highlight ? "is-hl" : ""}`}>
      <button className="row-main" onClick={onOpen}>
        <span className="row-no">{pad(w.no)}</span>
        <span className={`row-thumb ${w.image ? "" : "none"}`} aria-hidden>
          {w.image ? <img src={w.image} alt="" loading="lazy" /> : <span>{w.object ? "◆" : "▢"}</span>}
        </span>
        <span className="row-body">
          <span className="row-title">
            {w.highlight && (
              <span className="star" aria-label="주요작">
                ★
              </span>
            )}
            {w.titleKo}
          </span>
          <span className="row-artist">
            {w.artistKo} <span className="en">{w.artist}</span>
          </span>
          <span className="row-meta">
            {w.year} · {w.mediumKo.split(",")[0]} · {w.size}
          </span>
        </span>
      </button>
    </li>
  );
}
