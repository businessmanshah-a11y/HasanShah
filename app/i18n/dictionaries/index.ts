import type { Locale } from "../config";
import fa, { type Dictionary } from "./fa";
import en from "./en";
import ar from "./ar";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { fa, en, ar };
