export default function Header() {
  return (
    <div className="pt-8 pb-6 flex flex-col items-center justify-center flex-shrink-0">
      {/* Logo Icon */}
      <div className="mb-4">
        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.6)]">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-white tracking-tight">
        <span className="drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">
          Bain Forge
        </span>
      </h1>
    </div>
  );
}
