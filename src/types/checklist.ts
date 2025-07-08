export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface ChecklistBlock {
  id: string;
  title: string;
  items: ChecklistItem[];
  isCollapsed: boolean;
}

export type ChecklistType = 'ors' | 'kep';