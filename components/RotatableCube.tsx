'use client';

import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import { useEffect } from 'react';

export default function RotatableCube() {
  function onLoad(splineApp: Application) {
    // Decrease camera control sensitivity even more
    const orbitControls = splineApp._camera?.controls;
    if (orbitControls) {
      // @ts-ignore - accessing internal controls
      if (orbitControls.dampingFactor !== undefined) {
        // @ts-ignore
        orbitControls.dampingFactor = 0.02; // Much smoother, less sensitive
      }
      // @ts-ignore
      if (orbitControls.rotateSpeed !== undefined) {
        // @ts-ignore
        orbitControls.rotateSpeed = 0.1; // Much less sensitive rotation
      }
      // @ts-ignore
      if (orbitControls.zoomSpeed !== undefined) {
        // @ts-ignore
        orbitControls.zoomSpeed = 0.1; // Much less sensitive zoom
      }
    }
  }

  useEffect(() => {
    // Aggressively hide watermark with multiple approaches
    const style = document.createElement('style');
    style.innerHTML = `
      #spline-watermark,
      .spline-watermark,
      [id*="watermark"],
      [class*="watermark"],
      a[href*="spline.design"],
      a[href*="spline"],
      div[style*="spline"],
      canvas + div,
      canvas + a,
      canvas ~ div a,
      canvas ~ a {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        width: 0 !important;
        height: 0 !important;
        position: absolute !important;
        left: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    // Also try to find and remove watermark elements directly
    const removeWatermark = () => {
      const selectors = [
        '#spline-watermark',
        '.spline-watermark',
        'a[href*="spline.design"]',
        'a[href*="spline"]',
        '[id*="watermark"]',
        '[class*="watermark"]'
      ];

      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          (el as HTMLElement).style.display = 'none';
          el.remove();
        });
      });
    };

    // Remove immediately and set interval to keep removing
    removeWatermark();
    const interval = setInterval(removeWatermark, 100);

    return () => {
      clearInterval(interval);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <Spline
        scene="https://prod.spline.design/dJVxGcgi62jh5y-z/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
