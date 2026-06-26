import { useState } from "react";
import { Plus, Mic, ArrowUp } from "lucide-react";

function InputBar({ onSend , disabled }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="shrink-0 px-4 pb-3 pt-2 bg-bg">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-2 bg-bg-surface rounded-full px-4 py-3">
          <button className="text-text-secondary hover:text-text-primary p-1.5 rounded-full hover:bg-bg-elevated transition-colors shrink-0">
            <Plus size={20} />
          </button>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask ArthDrishti"
            disabled={disabled}
            className="flex-1 bg-transparent outline-none text-text-primary placeholder:text-text-secondary text-base"
          />

          <button className="text-text-secondary hover:text-text-primary p-1.5 rounded-full hover:bg-bg-elevated transition-colors shrink-0">
            <Mic size={20} />
          </button>

          {text.trim() && (
            <button
              onClick={handleSend}
              className="bg-text-primary hover:bg-white text-bg p-1.5 rounded-full transition-colors shrink-0"
            >
              <ArrowUp size={20} />
            </button>
          )}
        </div>

        <p className="text-center text-xs text-text-muted mt-2.5">
          ArthDrishti is AI and can make mistakes.
        </p>
      </div>
    </div>
  );
}

export default InputBar;