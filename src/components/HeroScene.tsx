import { lazy, Suspense, useEffect, useState } from "react";

const Scene = lazy(() => import("./HeroSceneCanvas"));

export function HeroScene() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return null;
  return <Suspense fallback={null}><Scene /></Suspense>;
}