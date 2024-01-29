import create from 'zustand';

const useChatStore = create((set) => ({
    messages: [],
    promptCount: 0,
    addMessage: (message) => set((state) => {
      // Increment prompt count if sender is user

      const increment = message.sender === 'user' ? 1 : 0;
      return {
        messages: [...state.messages, message],
        promptCount: state.promptCount + increment
      };
    }),
    resetPromptCount: () => set(() => ({ promptCount: 0 })), // Reset prompt count to 0
  }));
  
  export default useChatStore;
