import Link from 'next/link';

interface OfficeCardProps {
  name: string;
  isActive: boolean;
  style: {
    transform: string;
    opacity: number;
    zIndex: number;
  };
}

export default function OfficeCard({ name, isActive, style }: OfficeCardProps) {
  const content = (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out"
      style={{
        transform: `translate(-50%, -50%) ${style.transform}`,
        opacity: style.opacity,
        zIndex: style.zIndex,
        transformStyle: 'preserve-3d',
        width: '550px',
        height: '500px',
      }}
    >
      <div
        className={`
          w-full h-full rounded-3xl bg-[#1a1a1a] border-[3px]
          ${isActive ? 'border-red-600/80 cursor-pointer' : 'border-gray-800'}
          flex items-center justify-center p-10
          ${isActive ? 'shadow-[0_0_100px_rgba(220,38,38,0.7),0_0_50px_rgba(220,38,38,0.5)]' : 'shadow-xl'}
          ${isActive ? 'hover:shadow-[0_0_120px_rgba(220,38,38,0.8),0_0_60px_rgba(220,38,38,0.6)]' : ''}
          transition-all duration-700
        `}
        style={{
          backfaceVisibility: 'hidden',
          overflow: 'hidden',
        }}
      >
        <h2
          className={`
            text-6xl font-bold tracking-tight leading-none select-none
            ${isActive ? 'text-white' : 'text-gray-400'}
            transition-colors duration-700
          `}
          style={{
            transform: 'scale(1, 1)',
          }}
        >
          {name}
        </h2>
      </div>
    </div>
  );

  if (isActive) {
    return (
      <Link href={`/office/${encodeURIComponent(name)}`} className="contents">
        {content}
      </Link>
    );
  }

  return content;
}
