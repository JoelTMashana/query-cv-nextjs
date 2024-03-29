import create from 'zustand';
import { persist } from 'zustand/middleware';

const useChatStore = create(persist((set, get) => ({
  isLoggedIn: false,
  isGPTProcessing: false,
  isLoading: false,
  user: null,
  messages: [],
  promptCount: 0,
  latestGPTMessageId: null,

  startGPTProcessing: () => set(() => ({ isGPTProcessing: true })),
  stopGPTProcessing: () => set(() => ({ isGPTProcessing: false })),
  addMessage: (message) => set((state) => {
    const increment = message.sender === 'user' && !state.isLoggedIn ? 1 : 0;
    const isGPTMessage = message.sender === 'gpt';
    const latestGPTMessageId = isGPTMessage ? message.id : state.latestGPTMessageId;
    return {
      messages: [...state.messages, message],
      promptCount: state.promptCount + increment,
      latestGPTMessageId: latestGPTMessageId 
      
    };
  }),

  resetPromptCount: () => set(() => ({ promptCount: 0 })),
  loginUser: (userDetails) => set({ isLoggedIn: true, user: userDetails, promptCount: 0 }),
  logoutUser: () => set({ isLoggedIn: false, user: null, messages: [], promptCount: 0 }),
  setLoading: (isLoading) => set(() => ({ isLoading })),
}), {
  name: 'chat-store', 
  getStorage: () => localStorage, 
}));

export default useChatStore;
