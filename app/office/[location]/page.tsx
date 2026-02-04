import RotatableCube from '@/components/RotatableCube';
import DepartmentsSection from '@/components/DepartmentsSection';

interface OfficePageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function OfficePage({ params }: OfficePageProps) {
  const { location } = await params;
  const locationName = decodeURIComponent(location);

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] flex flex-col">
      {/* Top 10% - Office Title */}
      <div className="h-[10vh] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            {locationName} Office
          </span>
        </h1>
      </div>

      {/* Middle 40% - 3D Cube */}
      <div className="h-[40vh] flex items-center justify-center">
        <RotatableCube />
      </div>

      {/* Bottom 50% - Departments */}
      <div className="h-[50vh]">
        <DepartmentsSection />
      </div>
    </div>
  );
}
