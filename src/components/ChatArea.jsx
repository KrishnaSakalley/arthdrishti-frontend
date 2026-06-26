import { useEffect, useRef } from "react";
import WelcomeScreen from "./WelcomeScreen";
import ChatBubble from "./ChatBubble";

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex gap-1.5 px-1 py-2">
        <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" />
      </div>
    </div>
  );
}

function ChatArea({ messages, isLoading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  if (messages.length === 0 && !isLoading) {
    return <WelcomeScreen />;
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 pt-28 pb-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} text={msg.text} isError={msg.isError} />
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatArea;