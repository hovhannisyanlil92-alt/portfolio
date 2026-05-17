export type ChatRole = 'user' | 'ai';

export type ChatMessage = {
  role: ChatRole;
  text: string;
};
