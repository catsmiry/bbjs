declare module '@miry/bbjs' {
  interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
  }

  interface ApiResponse {
    data: {
      // 必要なフィールドを追加
      response: string; // 例: レスポンスの内容を含むフィールド
    };
  }

  class AI {
    constructor(model?: string);
    sendMessage(conversationId: string, content: string): Promise<string>; // conversationIdを追加
  }

  export default AI;
}