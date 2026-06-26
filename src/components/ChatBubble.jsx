function ChatBubble({ role, text, isError }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[75%] text-base leading-relaxed whitespace-pre-wrap
          ${isUser
            ? "bg-[#383939] text-text-primary rounded-3xl px-5 py-3"
            : isError
              ? "text-danger px-1 py-1"
              : "text-text-primary px-1 py-1"}
        `}
      >
        {text}
      </div>
    </div>
  );
}

export default ChatBubble;