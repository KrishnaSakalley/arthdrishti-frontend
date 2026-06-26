import { Menu, Settings } from "lucide-react";

function Header({ onToggleSidebar }) {
  return (
    <header className="h-14 flex items-center justify-between px-4 border-b border-border bg-bg shrink-0">
      <button
        onClick={onToggleSidebar}
        className="text-text-secondary hover:text-text-primary p-2 -ml-2 rounded-lg hover:bg-bg-elevated transition-colors"
      >
        <Menu size={20} />
      </button>

      <span className="text-text-primary font-semibold tracking-tight">
        ArthDrishti
      </span>

      <button className="text-text-secondary hover:text-text-primary p-2 -mr-2 rounded-lg hover:bg-bg-elevated transition-colors">
        <Settings size={20} />
      </button>
    </header>
  );
}

export default Header;