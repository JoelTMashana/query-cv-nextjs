import create from 'zustand';

const useChatStore = create((set) => ({
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
    resetPromptCount: () => set(() => ({ promptCount: 0 })), // Reset prompt count to 0
    loginUser: () => set({ isLoggedIn: true, promptCount: 0 }), 
    logoutUser: () => set({ isLoggedIn: false, promptCount: 0 }), 

  }));
  
  export default useChatStore;
