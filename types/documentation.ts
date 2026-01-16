import { LucideIcon } from "lucide-react";

export interface DocSection {
  id: string;
  title: string;
  description?: string;
  [key: string]: any;
}

export interface DocCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  sections: DocSection[];
}

export type DocumentationMap = Record<string, DocCategory>;
