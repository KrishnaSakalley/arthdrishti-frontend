import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import InputBar from "./components/InputBar";
import { sendChat } from "./services/api";
import { useSessionId } from "./hooks/useSessionId";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [activeMode, setActiveMode] = useState("profiler");
  const [isLoading, setIsLoading] = useState(false);

  const { sessionId, resetSession } = useSessionId();

  const handleSend = async (text) => {
    // F3.5: show user bubble immediately
    setMessages((prev) => [...prev, { role: "user", text }]);
    setIsLoading(true);

    try {
      const data = await sendChat(text, sessionId, activeMode);
      setMessages((prev) => [...prev, { role: "assistant", text: data.response }]);
    } catch (err) {
      // F3.7: error handling
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong, please try again.", isError: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    resetSession();
    setSidebarOpen(false);
  };

  const handleSelectMode = (mode) => {
    setActiveMode(mode);
    setMessages([]);
    resetSession();
    setSidebarOpen(false);
  };

  return (
    <div className="h-screen w-full flex bg-bg overflow-hidden">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewChat={handleNewChat}
        onSelectMode={handleSelectMode}
        activeMode={activeMode}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <ChatArea messages={messages} isLoading={isLoading} />
        <InputBar onSend={handleSend} disabled={isLoading} />
      </div>
    </div>
  );
}

export default App;