"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * @returns Not found route component which displays a 404 page.
 * Redirects to the login page after 5 seconds.
 */
export default function NotFound() {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(5);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [router]);

  return (
    <div className="h-screen flex flex-col justify-center">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              No se ha encontrado.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Lo sentimos, no podemos encontrar esa página. <br />
              Serás redirigido en {secondsRemaining} segundos.
            </p>
            <button
              onClick={() => router.push("/")}
              className="inline-flex text-white bg-slate-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Volver a la página de login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
