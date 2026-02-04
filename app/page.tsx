import Header from '@/components/Header';
import OfficeCarousel from '@/components/OfficeCarousel';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0B] overflow-hidden flex flex-col">
      <Header />
      <OfficeCarousel />
    </div>
  );
}
