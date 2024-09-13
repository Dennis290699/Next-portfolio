"use client";

import { useState, useEffect } from 'react';
import AppNavigation from "@/components/AppNavigation";
import Preloader from "@/components/ui/preloader";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de la página
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Ajusta el tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <AppNavigation />
      )}
    </>
  );
}
