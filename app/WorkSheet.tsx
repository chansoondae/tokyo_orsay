"use client";

import { useEffect, useRef, useState } from "react";
import { chapterOf, type Work } from "./data";

const pad = (n: number) => String(n).padStart(2, "0");

type Props = {
  work: Work;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export default function WorkSheet({ work: w, onClose, onPrev, onNext }: Props) {
  const ch = chapterOf(w.no);
  const panelRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const dims = w.size.split("×").length;

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 });
    panelRef.current?.focus();
  }, [w.no]);

  return (
    <div className="sheet-wrap" role="dialog" aria-modal="true" aria-label={`${w.no}번 ${w.titleKo}`}>
      <div className="sheet-backdrop" onClick={onClose} />
      <div
        className="sheet"
        ref={panelRef}
        tabIndex={-1}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (dx > 70) onPrev?.();
          if (dx < -70) onNext?.();
        }}
      >
        <div className="sheet-grip" aria-hidden />
        <div className="sheet-head">
          <span className="sheet-crumb">
            <b className={`floor f-${ch.floor}`}>{ch.floor}</b>
            {ch.labelKo} · {ch.ko}
          </span>
          <button className="sheet-close" onClick={onClose} aria-label="닫기">
            ✕
          </button>
        </div>

        <ArtImage w={w} />

        <div className="sheet-no">
          <span>No.</span>
          {pad(w.no)}
          {w.highlight && <span className="sheet-hl">★ 주요작</span>}
        </div>
        <h2 className="sheet-title">{w.titleKo}</h2>
        <p className="sheet-title-en">{w.title}</p>
        <p className="sheet-title-ja" lang="ja">
          {w.titleJa}
        </p>

        <p className="sheet-artist">
          {w.artistKo}
          <span>
            {w.artist}
            {w.life && ` · ${w.life}`}
          </span>
        </p>

        <DocentBlock key={w.no} w={w} />

        <dl className="sheet-facts">
          <div>
            <dt>제작연도</dt>
            <dd>{w.year}</dd>
          </div>
          <div>
            <dt>기법·재료</dt>
            <dd>
              {w.mediumKo}
              <small>{w.medium}</small>
            </dd>
          </div>
          <div>
            <dt>크기</dt>
            <dd>
              {w.size} cm
              <small>
                {dims === 3 ? "높이 × 너비 × 깊이" : w.object ? "높이 × 너비" : "세로 × 가로"}
                {w.sizeNote && ` · ${w.sizeNote}`}
              </small>
            </dd>
          </div>
        </dl>

        <SizeCompare size={w.size} object={w.object} />

        <div className="sheet-actions">
          <button className="nav-btn" onClick={onPrev} disabled={!onPrev} aria-label="이전 작품">
            ‹ 이전
          </button>
          <button className="nav-btn" onClick={onNext} disabled={!onNext} aria-label="다음 작품">
            다음 ›
          </button>
        </div>
      </div>
    </div>
  );
}

/** 키 170cm 사람과 작품 크기를 같은 축척으로 비교 */
function SizeCompare({ size, object }: { size: string; object: boolean }) {
  const [h, wd] = size.split("×").map(Number);
  const PERSON = 170;
  // 큰 조각(사람 키에 가까운 것)은 바닥에, 작은 입체 작품은 90cm 좌대 위에 둔다고 가정
  const plinth = object ? (h > 120 ? 8 : 90) : 0;
  // 평면 작품: 화면 중심 150cm 높이에 건다고 가정
  const bottom = object ? plinth : Math.max(20, 150 - h / 2);
  const top = bottom + h;
  const sceneH = Math.max(PERSON, top) + 15;
  const gap = 30;
  const personW = 46;
  const sceneW = 20 + personW + gap + Math.max(wd, object ? 40 : 0) + 20;
  const artX = 20 + personW + gap;
  const y = (v: number) => sceneH - v;
  const plinthW = Math.max(wd + 12, 40);
  const small = h < 25 && wd < 25;

  return (
    <figure className="size-compare">
      <svg viewBox={`0 0 ${sceneW} ${sceneH}`} role="img" aria-label={`키 170cm 사람과 비교한 작품 크기 ${size}cm`}>
        <line x1="0" x2={sceneW} y1={y(0)} y2={y(0)} className="sc-floor" />
        <g className="sc-person" transform={`translate(20, ${y(PERSON)})`}>
          <circle cx={personW / 2} cy="12" r="11" />
          <path d="M6 30 h34 a6 6 0 0 1 6 6 v52 h-8 v-44 h-3 v126 h-11 v-74 h-2 v74 h-11 v-126 h-3 v44 h-8 v-52 a6 6 0 0 1 6 -6z" />
        </g>
        {object && plinth > 0 && (
          <rect x={artX + wd / 2 - plinthW / 2} y={y(plinth)} width={plinthW} height={plinth} className="sc-plinth" />
        )}
        <rect x={artX} y={y(top)} width={wd} height={h} className={object ? "sc-sculpt" : "sc-art"} />
        <text x={artX + wd / 2} y={y(top) - 5} textAnchor="middle" className="sc-label">
          {wd}cm
        </text>
      </svg>
      <figcaption>
        키 170cm 사람과의 크기 비교 {object ? "(입체 작품)" : "(화면 중심 150cm 높이 기준)"}
        {small && " · 아주 작은 작품이니 가까이에서 보세요"}
      </figcaption>
    </figure>
  );
}

function ArtImage({ w }: { w: Work }) {
  const search = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${w.artist} ${w.title} Musée d'Orsay`)}`;
  if (w.image) {
    return (
      <figure className="art">
        <div className="art-frame">
          <img src={w.image} alt={`${w.artistKo} 〈${w.titleKo}〉`} loading="lazy" />
        </div>
      </figure>
    );
  }
  return (
    <figure className="art art-empty">
      <div className="art-frame">
        <span>{w.artistKo}</span>
        <b>〈{w.titleKo}〉</b>
        <small>작품 이미지 준비 중</small>
        <a href={search} target="_blank" rel="noreferrer">
          이미지 검색 ↗
        </a>
      </div>
    </figure>
  );
}

/** 화면용 문장을 음성 합성기가 자연스럽게 읽도록 다듬기 */
function forSpeech(t: string) {
  return t
    .replace(/\s*\([^)]*[A-Za-z][^)]*\)/g, "") // 괄호 속 외국어 원제는 생략
    .replace(/\([^)]*\)(?=[가-힣])/g, "") // 조사가 바로 붙는 괄호 — 목신(파우누스)은 → 목신은
    .replace(/(\d+)\s*[–-]\s*(\d+)\s*(번|년)/g, "$1$3부터 $2$3")
    .replace(/(\d+)\s*·\s*(\d+)\s*번/g, "$1번과 $2번")
    .replace(/(\d+(?:\.\d+)?)\s*cm/g, "$1센티미터")
    .replace(/\s*[—–]\s*/g, ", ")
    .replace(/·/g, ", ")
    .replace(/[〈〉《》‘’“”「」]/g, "")
    .replace(/[()]/g, ", ")
    .replace(/…/g, ". ")
    .replace(/\s*,\s*(,\s*)+/g, ", ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** 문장 단위로 쪼개기 — 크롬의 ‘긴 문장 15초 후 끊김’ 문제를 피하고 진행 위치를 표시하기 위함 */
function sentences(t: string) {
  return t.split(/(?<=[.?!])\s+/).filter(Boolean);
}

const RATES = [1, 1.2, 0.85];

function pickKoreanVoice(voices: SpeechSynthesisVoice[]) {
  const ko = voices.filter((v) => v.lang.toLowerCase().startsWith("ko"));
  return ko.find((v) => /yuna|sora|siri|premium|enhanced|natural|google/i.test(v.name)) ?? ko[0];
}

type Seg = { key: string; text: string };

function DocentBlock({ w }: { w: Work }) {
  const [canSpeak, setCanSpeak] = useState(false);
  const [active, setActive] = useState<string | null>(null); // 지금 읽고 있는 문단
  const [rate, setRate] = useState(1);
  const voiceRef = useRef<SpeechSynthesisVoice | undefined>(undefined);
  const runRef = useRef(0); // 재생 세션 번호 — 정지·새 재생 시 이전 대기열 무효화

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    setCanSpeak(true);
    const load = () => (voiceRef.current = pickKoreanVoice(synth.getVoices()));
    load();
    synth.addEventListener?.("voiceschanged", load);
    return () => {
      runRef.current++;
      synth.removeEventListener?.("voiceschanged", load);
      try {
        synth.cancel();
      } catch {}
    };
  }, []);

  const segments = (): Seg[] => {
    const segs: Seg[] = [{ key: "title", text: forSpeech(`${w.no}번. ${w.artistKo}, ${w.titleKo}.`) }];
    w.docent.script.forEach((p, i) => sentences(forSpeech(p)).forEach((s) => segs.push({ key: `s${i}`, text: s })));
    segs.push({ key: "lookhead", text: "이렇게 보세요." });
    w.docent.look.forEach((l, i) => sentences(forSpeech(l)).forEach((s) => segs.push({ key: `l${i}`, text: s })));
    return segs;
  };

  const stop = () => {
    runRef.current++;
    window.speechSynthesis.cancel();
    setActive(null);
  };

  const play = (r = rate) => {
    const synth = window.speechSynthesis;
    const run = ++runRef.current;
    synth.cancel();
    const segs = segments();
    if (!voiceRef.current) voiceRef.current = pickKoreanVoice(synth.getVoices());

    const speakAt = (i: number) => {
      if (run !== runRef.current) return;
      if (i >= segs.length) return setActive(null);
      const u = new SpeechSynthesisUtterance(segs[i].text);
      u.lang = "ko-KR";
      u.rate = r;
      if (voiceRef.current) u.voice = voiceRef.current;
      u.onstart = () => run === runRef.current && setActive(segs[i].key);
      u.onend = () => speakAt(i + 1);
      u.onerror = (e) => {
        if (e.error === "interrupted" || e.error === "canceled") return;
        speakAt(i + 1);
      };
      synth.speak(u);
    };
    setActive(segs[0].key);
    speakAt(0);
  };

  const speaking = active !== null;
  const cycleRate = () => {
    const next = RATES[(RATES.indexOf(rate) + 1) % RATES.length];
    setRate(next);
    if (speaking) play(next); // 재생 중이면 처음부터 새 속도로
  };

  return (
    <section className={`docent ${w.highlight ? "hl" : ""}`} aria-label="도슨트 해설">
      <div className="docent-head">
        <h3>도슨트</h3>
        {canSpeak && (
          <div className="docent-ctrl">
            <button className="rate" onClick={cycleRate} aria-label={`읽기 속도 ${rate}배`}>
              {rate}×
            </button>
            <button className={`listen ${speaking ? "on" : ""}`} onClick={() => (speaking ? stop() : play())} aria-pressed={speaking}>
              {speaking ? "■ 정지" : "▶ 듣기"}
            </button>
          </div>
        )}
      </div>
      {w.docent.script.map((p, i) => (
        <p key={i} className={active === `s${i}` ? "speaking" : undefined}>
          {p}
        </p>
      ))}
      <div className="look">
        <h4>이렇게 보세요</h4>
        <ul>
          {w.docent.look.map((l, i) => (
            <li key={i} className={active === `l${i}` ? "speaking" : undefined}>
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
