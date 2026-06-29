import type { Locale } from "../config";
import fa, { type Dictionary } from "./fa";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { fa };
