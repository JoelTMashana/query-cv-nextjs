import create from 'zustand';

const useSelectionStore = create((set) => ({
  selectedSkills: [],
  setSelectedSkills: (skills) => set(() => ({ selectedSkills: skills })),
  selectedTools: [],
  setSelectedTools: (tools) => set(() => ({ selectedTools: tools })),
}));

export default useSelectionStore;