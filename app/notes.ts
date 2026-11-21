import { docentA } from "./docent-a";
import { docentB } from "./docent-b";
import { docentC } from "./docent-c";
import { docentD } from "./docent-d";

/** 작품별 도슨트 해설: script = 문단 목록, look = 감상 포인트 */
export type Docent = { script: string[]; look: string[] };

// 주요작 (★)
export const HIGHLIGHTS = new Set([1, 7, 17, 34, 38, 42, 46, 59, 60, 96, 107, 110, 111, 112]);

export const docent: Record<number, Docent> = { ...docentA, ...docentB, ...docentC, ...docentD };
