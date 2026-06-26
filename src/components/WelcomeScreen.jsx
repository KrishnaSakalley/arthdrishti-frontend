function WelcomeScreen() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* subtle gradient glow */}
      <div
        className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mb-3">
          Namaste! Main ArthDrishti hoon.
        </h1>
        <p className="text-text-secondary text-base">
          Your AI Financial Companion
        </p>
      </div>
    </div>
  );
}

export default WelcomeScreen;