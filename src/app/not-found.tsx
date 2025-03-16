"use client";

import { useEffect, useState } from "react";

/**
 * If a user for some reason navigates to a route that does not exist, 
 * this component will be displayed. And redirect in 5 seconds to the login page.
 * 
 * @returns Not found route component which displays a 404 page.
 */
export default function NotFound() {
  const [backCounter, setBackCounter] = useState<number>(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackCounter((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

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
              Lo sentimos, no podemos encontrar esa página. Encontrarás mucho para explorar en la página de inicio.{" "}
              <br />
              Serás redirigido en {backCounter} segundos.
            </p>
            <a
              href="/"
              className="inline-flex text-white bg-slate-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Volver a la página de inicio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}