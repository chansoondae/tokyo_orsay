"use client";

import { useEffect, useState } from "react";
import { chapters, type Floor } from "./data";

const FLOORS: { id: Floor; ko: string; img: string; w: number; h: number }[] = [
  { id: "LBF", ko: "지하 1층", img: "/img/floor_LBF.jpg", w: 1026, h: 810 },
  { id: "1F", ko: "1층", img: "/img/floor_1F.jpg", w: 1022, h: 780 },
  { id: "2F", ko: "2층", img: "/img/floor_2F.jpg", w: 1024, h: 778 },
];

// 원본 안내도 이미지 위 번호 배지 위치 (% 좌표)
const POS: Record<string, { x: number; y: number }> = {
  prologue: { x: 21, y: 24 },
  ch1: { x: 62, y: 21 },
  ch2: { x: 21.5, y: 23 },
  ch3: { x: 62, y: 23 },
  ch5: { x: 23.5, y: 11 },
  epilogue: { x: 61, y: 14 },
  ch4: { x: 9, y: 61 },
};

// 방 전체 클릭 영역 (% 좌표: x, y, w, h) — 평면도 이미지의 방 경계에 맞춤
const AREA: Record<string, { x: number; y: number; w: number; h: number; round?: boolean }> = {
  prologue: { x: 3, y: 10, w: 37, h: 52 },
  ch1: { x: 43, y: 9, w: 37, h: 49 },
  ch2: { x: 3, y: 10, w: 37, h: 52 },
  ch3: { x: 43, y: 9, w: 37, h: 49 },
  ch5: { x: 3, y: 4, w: 37, h: 37 },
  ch4: { x: 3, y: 44, w: 37, h: 30 },
  epilogue: { x: 42, y: 6, w: 38, h: 42, round: true },
};

type Props = {
  current: string | null; // 지금 목록에서 보고 있는 장
  onJump: (chapterId: string) => void;
  onClose: () => void;
};

/** 아래에서 올라오는 층별 안내도 시트 */
export default function FloorMapSheet({ current, onJump, onClose }: Props) {
  const initial = chapters.find((c) => c.id === current)?.floor ?? "LBF";
  const [floor, setFloor] = useState<Floor>(initial);
  const f = FLOORS.find((x) => x.id === floor)!;
  const list = chapters.filter((c) => c.floor === floor);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="sheet-wrap" role="dialog" aria-modal="true" aria-label="층별 안내도">
      <div className="sheet-backdrop" onClick={onClose} />
      <div className="sheet map-sheet">
        <div className="sheet-grip" aria-hidden />
        <div className="sheet-head">
          <h2 className="map-title">
            층별 안내도 <em>Floor Map</em>
          </h2>
          <button className="sheet-close" onClick={onClose} aria-label="닫기">
            ✕
          </button>
        </div>
        <p className="map-lead">
          <b>지하 1층 입구</b>에서 프롤로그로 시작해 <b>1층</b>을 거쳐 <b>2층 에필로그</b>와 특설 숍에서 끝나요. 평면도의 방을 누르면 해당 작품 목록으로
          이동합니다.
        </p>

        <div className="floor-tabs" role="tablist">
          {FLOORS.map((x) => {
            const cs = chapters.filter((c) => c.floor === x.id);
            return (
              <button
                key={x.id}
                role="tab"
                aria-selected={floor === x.id}
                className={floor === x.id ? "on" : ""}
                onClick={() => setFloor(x.id)}
              >
                {x.id}
                <small>
                  {cs[0].route}
                  {cs.length > 1 ? `–${cs[cs.length - 1].route}` : ""}
                </small>
              </button>
            );
          })}
        </div>

        <div className="plan">
          <div className="plan-inner" style={{ aspectRatio: `${f.w} / ${f.h}` }}>
            <img src={f.img} alt={`${f.ko}(${f.id}) 전시실 평면도`} />
            {list.map((c) => {
              const r = AREA[c.id];
              return (
                <button
                  key={c.id}
                  className={`plan-area ${r.round ? "round" : ""} ${c.id === current ? "current" : ""}`}
                  style={{ left: `${r.x}%`, top: `${r.y}%`, width: `${r.w}%`, height: `${r.h}%` }}
                  onClick={() => onJump(c.id)}
                  aria-label={`${c.route}번 ${c.labelKo} ${c.ko} 작품 목록으로 이동`}
                />
              );
            })}
            {list.map((c) => (
              <span
                key={c.id}
                className={`plan-label ${c.id === current ? "current" : ""}`}
                style={{ left: `${POS[c.id].x}%`, top: `${POS[c.id].y}%` }}
                aria-hidden
              >
                {c.route}
              </span>
            ))}
          </div>
        </div>
        <p className="plan-legend">
          <i aria-hidden /> 회색 영역에서만 사진 촬영 가능
        </p>

        <ol className="route-list">
          {list.map((c) => (
            <li key={c.id} className={c.id === current ? "current" : ""}>
              <button onClick={() => onJump(c.id)}>
                <span className="rl-no">{c.route}</span>
                <span className="rl-name">
                  <b>{c.labelKo}</b> {c.ko}
                  <small>
                    No. {c.from}–{c.to}
                  </small>
                </span>
                {c.id === current ? <span className="rl-here">보는 중</span> : <span className="rl-go">›</span>}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
