import { SquarePen, MessageSquare, ShieldAlert, LineChart, Wallet, X } from "lucide-react";

const menuItems = [
  { label: "Financial Advisor", icon: MessageSquare, mode: "profiler" },
  { label: "Money Management", icon: Wallet, mode: "money_mgmt" },
  { label: "Fraud Detection", icon: ShieldAlert, mode: "fraud" },
  { label: "Quant Analysis", icon: LineChart, mode: "quant" },
];

function Sidebar({ isOpen, onClose, onNewChat, onSelectMode, activeMode }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-bg border-r border-border
          z-40 flex flex-col transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <span className="text-text-primary font-medium text-lg">ArthDrishti</span>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary p-1.5 rounded-full hover:bg-bg-elevated transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="px-3 space-y-0.5">
          <button
            onClick={onNewChat}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-full bg-bg-elevated hover:bg-[#3C3D3F] text-text-primary text-sm transition-colors"
          >
            <SquarePen size={18} />
            New chat
          </button>
        </div>

        <div className="h-3" />

        <nav className="px-3 space-y-0.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMode === item.mode;
            return (
              <button
                key={item.mode}
                onClick={() => onSelectMode(item.mode)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-full text-sm transition-colors
                  ${isActive
                    ? "bg-bg-elevated text-text-primary"
                    : "text-text-secondary hover:bg-bg-elevated hover:text-text-primary"}
                `}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex-1 overflow-y-auto px-3 pt-4">
          <p className="text-xs text-text-muted px-3 pb-2">Previous chats</p>
          <p className="text-xs text-text-muted px-3 italic">No history yet</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;