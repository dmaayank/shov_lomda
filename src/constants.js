import { SECTIONS } from "./data/sections";

// Number of intro pages/slides
export const INTOR_PAGES = 4;

// Pages per roadmap station (6 entries, matching STEPS in RoadmapModal).
// Must add up to INTOR_PAGES + SECTIONS.length = 76.
// The five numbers after the intro are placeholders; change them to how many
// of your 72 screens belong to each station, in order.
export const SECTION_PAGES = [INTOR_PAGES, 9, 33, 19, 7, 5];

// Global page offset before each screen:
// index 0 = intro, index i + 1 = tutorial screen i
export const OFFSETS = [0, ...SECTIONS.map((_, i) => INTOR_PAGES + i)];