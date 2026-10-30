export interface Topic {
  id: string;
  title: string;
  summary: string;
  points: string[];
  tip?: string;
}

export interface HairType {
  id: string;
  group: "Lurus" | "Bergelombang" | "Keriting" | "Keriting rapat";
  name: string;
  pattern: string;
  characteristics: string[];
  care: string[];
  shampoo: string;
  conditioner: string;
  haircuts: string[];
  styling: string[];
  detangling: string;
  mistakes: string[];
  maintenance: string[];
}

export interface SkinType {
  id: string;
  name: string;
  tagline: string;
  signs: string[];
  goals: string[];
  lookFor: string[];
  watchOut: string[];
  tip: string;
}

export interface RoutineStep {
  title: string;
  detail: string;
  optional?: boolean;
}

export type GuideCategory = "Face" | "Hair" | "Posture" | "Movement" | "Style" | "Habits";

export interface GuideSection {
  heading: string;
  body: string[];
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: GuideCategory;
  sections: GuideSection[];
  related: string[];
}

export interface HabitItem {
  id: string;
  label: string;
  tip: string;
}

export interface HabitGroup {
  id: string;
  title: string;
  icon: "sun" | "sparkles" | "scissors" | "droplets" | "utensils" | "activity" | "monitor" | "moon" | "bath";
  description: string;
  items: HabitItem[];
}

export interface Outfit {
  id: string;
  level: "Casual" | "Smart casual" | "Formal";
  name: string;
  occasion: string;
  pieces: string[];
  palette: string[];
  notes: string;
}
