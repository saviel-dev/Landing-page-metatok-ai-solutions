import { Suspense, lazy, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
}

function SplineFallback({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 ${className ?? ""}`}
      aria-hidden
    >
      {/* Animated skeleton orbs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute h-40 w-40 rounded-full bg-primary/10 blur-2xl animate-[blob_4s_ease-in-out_infinite]" />
          <div className="absolute h-28 w-28 rounded-full bg-accent/10 blur-xl animate-[blob_6s_ease-in-out_1s_infinite] translate-x-16" />
          <div className="h-20 w-20 rounded-full border border-primary/20 animate-spin-slow flex items-center justify-center">
            <div className="h-10 w-10 rounded-full border border-accent/30 animate-spin" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/50 animate-pulse">
        Cargando escena 3D…
      </div>
    </div>
  );
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className ?? ""}`}>
      {!loaded && <SplineFallback className="absolute inset-0" />}
      <Suspense fallback={<SplineFallback className="absolute inset-0" />}>
        <Spline
          scene={scene}
          onLoad={() => {
            setLoaded(true);
            onLoad?.();
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </div>
  );
}
