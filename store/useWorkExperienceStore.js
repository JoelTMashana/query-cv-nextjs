import create from 'zustand';

const useWorkExperienceStore = create((set) => ({
  experiences: [],
  setExperiences: (experiences) => set(() => ({ experiences })),
  addExperience: (experience) => set((state) => ({ experiences: [...state.experiences, experience] })),
  updateExperience: (updatedExperience) => set((state) => ({
    experiences: state.experiences.map((exp) => exp.experience_id === updatedExperience.experience_id ? updatedExperience : exp),
  })),
  deleteExperience: (experienceId) => set((state) => ({
    experiences: state.experiences.filter((exp) => exp.experience_id !== experienceId),
  })),
}));

export default useWorkExperienceStore;
