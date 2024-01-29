import create from 'zustand';
import { persist } from 'zustand/middleware';

const useChatStore = create(persist((set, get) => ({
    isLoggedIn: false, 
    messages: [],
    promptCount: 0,
    addMessage: (message) => set((state) => {
      const increment = message.sender === 'user' && !state.isLoggedIn ? 1 : 0;
      return {
        messages: [...state.messages, message],
        promptCount: state.promptCount + increment
      };
    }),
    resetPromptCount: () => set(() => ({ promptCount: 0 })),
    loginUser: () => set({ isLoggedIn: true, promptCount: 0 }),
    logoutUser: () => set({ isLoggedIn: false, promptCount: 0 }),
}), {
    name: 'chat-store', 
    getStorage: () => localStorage, 
}));

export default useChatStore;
