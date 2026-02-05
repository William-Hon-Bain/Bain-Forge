'use client';
import Spline from '@splinetool/react-spline';

import { useOffice } from '../contexts/OfficeContext';

export default function RotatableCube() {
  const { getCurrentOffice } = useOffice();
  const currentOffice = getCurrentOffice();

  // Calculate percentage (default to 0 if no office data)
  const percentage = currentOffice
    ? Math.min(100, Math.max(0, (currentOffice.progress / currentOffice.target) * 100))
    : 0;

  // Define the visual bounds of the 3D model (approximate % from top)
  const MODEL_TOP_PCT = 15;
  const MODEL_BOTTOM_PCT = 85;
  const MODEL_RANGE = MODEL_BOTTOM_PCT - MODEL_TOP_PCT;

  // Calculate mask height based on the model's visual bounds
  // At 0% progress, mask covers down to 85% (hiding the top 85%).
  // At 100% progress, mask shrinks to 15% (hiding only the top 15%).
  const maskHeightPct = MODEL_BOTTOM_PCT - ((percentage / 100) * MODEL_RANGE);

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      {/* Scale up the scene to make model appear bigger */}
      <div className="w-full h-full scale-[2]">
        <Spline scene="https://prod.spline.design/dJVxGcgi62jh5y-z/scene.splinecode" />
      </div>

      {/* Grayscale Overlay for the "unfilled" top portion */}
      <div
        className="absolute top-0 left-0 w-full z-10 transition-all duration-1000 ease-out pointer-events-none"
        style={{
          height: `${maskHeightPct}%`,
          backdropFilter: 'grayscale(100%)',
          WebkitBackdropFilter: 'grayscale(100%)',
          background: 'transparent'
        }}
      />
    </div>
  );
}
