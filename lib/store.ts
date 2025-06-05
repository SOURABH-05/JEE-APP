import { create } from 'zustand';
import subjectsData from './all_subjects_chapter_data.json';

export type Subject = 'Physics' | 'Chemistry' | 'Mathematics';
export type Status = 'Not Started' | 'In Progress' | 'Completed';

interface FilterState {
  selectedSubject: Subject;
  selectedClasses: string[];
  selectedUnits: string[];
  selectedStatus: Status | null;
  showWeakChapters: boolean;
  setSelectedSubject: (subject: Subject) => void;
  setSelectedClasses: (classes: string[]) => void;
  setSelectedUnits: (units: string[]) => void;
  setSelectedStatus: (status: Status | null) => void;
  setShowWeakChapters: (show: boolean) => void;
}

export const useStore = create<FilterState>((set) => ({
  selectedSubject: 'Physics',
  selectedClasses: [],
  selectedUnits: [],
  selectedStatus: null,
  showWeakChapters: false,
  setSelectedSubject: (subject) => set({ selectedSubject: subject }),
  setSelectedClasses: (classes) => set({ selectedClasses: classes }),
  setSelectedUnits: (units) => set({ selectedUnits: units }),
  setSelectedStatus: (status) => set({ selectedStatus: status }),
  setShowWeakChapters: (show) => set({ showWeakChapters: show }),
}));

export const getUniqueValues = (subject: Subject) => {
  const subjectData = subjectsData.filter((item) => item.subject === subject);
  
  const classes = Array.from(new Set(subjectData.map((item) => item.class)));
  const units = Array.from(new Set(subjectData.map((item) => item.unit)));
  
  return { classes, units };
};

export const getFilteredChapters = (state: FilterState) => {
  let filtered = subjectsData.filter((item) => item.subject === state.selectedSubject);

  if (state.selectedClasses.length > 0) {
    filtered = filtered.filter((item) => state.selectedClasses.includes(item.class));
  }

  if (state.selectedUnits.length > 0) {
    filtered = filtered.filter((item) => state.selectedUnits.includes(item.unit));
  }

  if (state.selectedStatus) {
    filtered = filtered.filter((item) => item.status === state.selectedStatus);
  }

  if (state.showWeakChapters) {
    filtered = filtered.filter((item) => item.isWeakChapter);
  }

  return filtered;
};

export const getTrendIndicator = (chapter: any) => {
  const trend2025vs2024 = chapter.yearWiseQuestionCount['2025'] - chapter.yearWiseQuestionCount['2024'];
  return {
    direction: trend2025vs2024 > 0 ? 'up' : trend2025vs2024 < 0 ? 'down' : 'neutral',
    value: Math.abs(trend2025vs2024),
  };
};